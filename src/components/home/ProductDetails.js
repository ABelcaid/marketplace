import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Footer from "../global/Footer"
import NavBar from "../global/NavBar";

import StripeCheckout from "react-stripe-checkout";

import toastr from 'toastr';
import "toastr/build/toastr.css";


const ProductDetails = () => {


  const history = useHistory();

    const [product,setProduct] = useState('');


    
    const {idProduct} = useParams();




    const [ToCurrency, setToCurrency] = useState('EUR');


    let currency = ToCurrency && ToCurrency;

    const [exchangeRate, setExchangeRate] = useState();













    useEffect(async()=>{


      fetch('http://data.fixer.io/api/latest?access_key=afe4bd8abcfd1a927150d247ad43ac84')
      .then(currencyRes => currencyRes.json())
      .then(data => {
      

        setExchangeRate(data.rates[currency]);

        
        console.log(data.rates[currency]);
        
      });




    
        try {
        
            const response = await axios.get(`${process.env.REACT_APP_URL_API}/product/productById/${idProduct}`);

            setProduct(response.data);

        } catch (error) {

            console.log(error);
            
        }

    
      },[currency])


    



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

        <section className="text-gray-600 body-font overflow-hidden h-screen">

        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                    Product Details
                    </a>
                    <div className="flex items-center" id="store-nav-content">


                    {/* <select className="pl-3 inline-block no-underline hover:text-black" name="" id="">

                      
                      {
                       currencyOptions && currencyOptions.map(item =>{

                          <option value={item}>{item}</option>  
                        })
                      }
                     
                    </select> */}


                  <select onChange={(e)=>setToCurrency(e.target.value)} className="pl-3 inline-block no-underline hover:text-black" name="" id="">
                        <option  value='EUR'>EUR</option>
                        <option  value='USD'>USD</option>

                    
                  </select>
             

             
               
                    </div>
                </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="product" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"src={product && product.image} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">{product && product.category}</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product && product.name}</h1>
                  
                    <p className="leading-relaxed">{product && product.description}</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                 
                    <div className="flex ml-6 items-center">
                        <div className="relative">
                     
                   
                        </div>
                    </div>
                    </div>
                    <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">{product && (product.price * exchangeRate).toFixed(2) } {currency}</span>
                  

                    <StripeCheckout className="flex ml-auto text-white  bg-blue-500 hover:bg-blue-700 border-0 py-2 px-6 focus:outline-none  rounded"
                        stripeKey="pk_test_51IcsGEHRH7LB9NYW6q5Xed7pHznPT7shwEfb0NhkWdVIHB489oWS4E2iypkwCEeO8KOYLG5FEAro7SQToOlrCOga00Q09necQB"
                        name={product && product.name}
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amount={product && product.price * 100}
                    />
                    
                    
               
                    </div>
                </div>
                </div>
            </div>
        </section>

        <Footer/>

        </>
     );
}
 
export default ProductDetails;