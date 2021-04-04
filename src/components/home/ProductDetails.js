import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../global/Footer"
import NavBar from "../global/NavBar";

const ProductDetails = () => {



    const [product,setProduct] = useState('');


    const {idProduct} = useParams();


    useEffect(async()=>{

        

        


        try {


        
            const response = await axios.get(`${process.env.REACT_APP_URL_API}/product/productById/${idProduct}`);

            setProduct(response.data);

            console.log(response.data);


            
        } catch (error) {

            console.log(error);
            
        }

    



        
      
      },[])



    return ( 
        <>

        <NavBar/>

        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="product" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"src={product && product.image} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">{product && product.category}</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product && product.name}</h1>
                  
                    <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                 
                    <div className="flex ml-6 items-center">
                        <div className="relative">
                     
                   
                        </div>
                    </div>
                    </div>
                    <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">{product && product.price } DH</span>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add To Card</button>
               
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