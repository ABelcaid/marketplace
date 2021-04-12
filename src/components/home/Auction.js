import Footer from "../global/Footer";
import NavBar from "../global/NavBar";
import { useEffect, useRef, useState } from "react";


// Firebase deps
import firebase from 'firebase/app';

import 'firebase/firestore';
import axios from "axios";


import StripeCheckout from "react-stripe-checkout";

import toastr from 'toastr';
import "toastr/build/toastr.css";
import { useHistory } from "react-router";



firebase.initializeApp({

    apiKey: "AIzaSyBhXjQyDFMDsYqAfC-sYc-amXlN2VZ9dYA",
    authDomain: "auctionandchatapp.firebaseapp.com",
    projectId: "auctionandchatapp",
    storageBucket: "auctionandchatapp.appspot.com",
    messagingSenderId: "550000039748",
    appId: "1:550000039748:web:8399c78cca2d7da34aa911",
    measurementId: "G-TRD85BY80H"
});


const db = firebase.firestore();




let x = 10

let d = 10



const Auction = () => {


    const history = useHistory();

    const [messages, setMessages] = useState([]);

    const [messageToSend, setMessageToSend] = useState();

    const [product, setProduct] = useState();

    const [givedPrice , setGivedPrice] = useState();

    const [maxGivedPrice , setMaxGivedPrice ] = useState();

    const [timerSeconds , setTimerSeconds ] = useState();


  
    let userName = localStorage.getItem('userName');

    let lastbuyer = maxGivedPrice && maxGivedPrice[0].buyerName

    let lastMaxPrice = maxGivedPrice &&  maxGivedPrice[0].givedPrice;


    


    const timmer = setTimeout(() => {

      if (timerSeconds && timerSeconds > 0) {

        

        setTimerSeconds( timerSeconds && timerSeconds - 1);

        if (db) {

                     db.collection("timer").doc("gKKsX6G8x3NhTVhvnaUP").update({
                      seconds: timerSeconds && timerSeconds - 1
                    });
        }



       
        
      }      
    }, 1000);

    




  



    
  const addMessage = async(e) => {
    e.preventDefault();

    if (db) {
        db.collection('messages').add({
            text : messageToSend,
            createdAt : firebase.firestore.FieldValue.serverTimestamp(),
            displayName:userName

        })
    }
 


  }


  const saveGivedPrice = async(e) => {
    e.preventDefault();

    let givedPriceInt = parseInt(givedPrice);

    // check the max price 
  

    if (givedPriceInt <= lastMaxPrice) {

        alert(`You need to enter more than ${lastMaxPrice} EUR if you want to buy the product `)
        
    }else {

        if (db) {
            db.collection('finalBuyer').add({
                buyerName : userName,
                createdAt : firebase.firestore.FieldValue.serverTimestamp(),
                givedPrice :givedPriceInt
    
            })

            console.log(userName)
            
            db.collection("timer").doc("gKKsX6G8x3NhTVhvnaUP").update({
              seconds: 60 
            });
            
        }

    }

 
  }


    useEffect(() => {
    
    
        if (db) {

            // --------------get product ------------------------

            const product = db
            .collection("product")
            .limit(1)
            .onSnapshot((querySnapshot) => {
              const data = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
           

              setProduct(data);

              

              
            });

            


          const allMessages = db
            .collection("messages")
            .orderBy("createdAt")
            .limit(100)
            .onSnapshot((querySnapshot) => {
              const dataMessage = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
              
              setMessages(dataMessage);
              
            });




            const maxPrice = db
            .collection("finalBuyer")
            .orderBy("createdAt", 'desc')
            .limit(1)
            .onSnapshot((querySnapshot) => {
              const dataPrice = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
              
              setMaxGivedPrice(dataPrice);

            });



            const timer = db
            .collection("timer")
            .limit(1)
            .onSnapshot((querySnapshot) => {
              const dataTimer = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
              
              setTimerSeconds(dataTimer[0].seconds);
            
              

            });
          
        }
      }, [db,timerSeconds]);




      
      async function handleToken(token, addresses) {

       

        const response = await axios.post(
            `${process.env.REACT_APP_URL_API}/checkout/checkout`,
          { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {

          history.push('/')

          toastr.info('Success! Check email for details', {
            positionClass: "toast-top-left",
        })

        } else {


          toastr.warning('Something went wrong', {
            positionClass: "toast-top-left",
        })
        }
      }




  

    return ( 

    <>
    <NavBar/>


    {
      timerSeconds === 0  && userName === lastbuyer ?  
      
      <section className="text-gray-600 body-font h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Auction is Over</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Thank you for your participation</p>
          <StripeCheckout 
                        stripeKey="pk_test_51IcsGEHRH7LB9NYW6q5Xed7pHznPT7shwEfb0NhkWdVIHB489oWS4E2iypkwCEeO8KOYLG5FEAro7SQToOlrCOga00Q09necQB"
                        name={product && product[0].name}
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amount={lastMaxPrice * 100}
                    />
        </div>
   
      </div>
    </section>
    :  timerSeconds === 0  && userName !== lastbuyer ?
    <section className="text-gray-600 body-font h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Auction is Over</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Thank you for your participation </p>
        </div>
   
      </div>
    </section>
     : 



   
    


    


     <section className="text-gray-600 body-font">
     

     <h1 className="text-center text-4xl" style={{height : "10px" , width : "100%"}}><span>{timerSeconds }</span> </h1>

    <div className="container px-5 py-24 mx-auto flex flex-wrap">

    
      <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/2 md:w-full">
          <div className="flex  rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          
            <div className="flex-grow">
            <div className="text-gray-600 body-font">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{product && product[0].name}</h1>
            <p className="mb-8 leading-relaxed">{product && product[0].description}</p>
            <p className="mb-8 leading-relaxed"> Init Price :  {product && product[0].intPrice} $</p>
            <p className="mb-8 leading-relaxed"> Gived Price :  {maxGivedPrice && maxGivedPrice[0].givedPrice} $</p>
                <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={product && product[0].image} />
                    </div>
                 
                </div>

                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                   <form onSubmit={saveGivedPrice}>
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                            <label htmlFor="price" className="leading-7 text-sm text-gray-600">Add Your Price </label>
                            <input type="number" id="price" name="price" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                               value={givedPrice}
                               onChange={(e)=>setGivedPrice(e.target.value)}
                                />
                            </div>
                            
                            <button type="submit" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add</button>
                        </div>
                    </form>
                    </div> 

                    
            </div>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/2 md:w-full">
          <div className="flex  rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
            
            <div className="flex-grow">

            <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">

            <div className="flex flex-col flex-auto h-full p-6">
                <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                    <div className="flex flex-col h-full overflow-x-auto mb-4">
                        <div className="flex flex-col h-full">
                            <div className="grid grid-cols-12 gap-y-2">

                            {
                                messages.map((msg,i) =>(

                                    <div key={i} className="col-start-1 col-end-8 p-3 rounded-lg">
                                        <div className="flex flex-row items-center">
                                            <div
                                                className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                                {msg.displayName.charAt(0)}
                                            </div>
                                            <div>
                                            {msg.displayName}
                                            </div>
                                            <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                                <div>{msg.text}</div>
                                            </div>
                                        </div>
                                    
                                    </div>

                                    
                                ))
                            }


                            
                    
                            </div>
                        </div>
                    </div>

                    <form onSubmit={addMessage}>
                    <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                        

                            

                            <div>
                              
                            </div>
                            <div className="flex-grow ml-4">
                                <div className="relative w-full">
                                    <input type="text"
                                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" 
                                        value={messageToSend}
                                        onChange={(e)=>setMessageToSend(e.target.value)}
                                        />
                                    <div
                                        className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-4">
                                <button type="submit"
                                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                                    <span>Send</span>
                                    <span className="ml-2">
                                        <svg className="w-4 h-4 transform rotate-45 -mt-px" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                    
                    </div>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>

       
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  }
  <Footer/>
    </>
    
    );
}
 
export default Auction;