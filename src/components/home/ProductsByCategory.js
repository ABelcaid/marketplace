import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../global/Footer";
import NavBar from "../global/NavBar";

const ProductsByCategory = () => {



    const [products,setProducts] = useState('');


    const {category} = useParams();


    useEffect(async()=>{

        console.log(category);

        


        try {


        
            const response = await axios.get(`${process.env.REACT_APP_URL_API}/product/productByCategory/${category}/0`);

            setProducts(response.data);


            
        } catch (error) {

            console.log(error);
            
        }

    



        
      
      })



      return ( 

        <>
        <NavBar/>
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

        </div>
        <section className="bg-white py-8">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                List Diamond Products
                    </a>

                </div>
                </nav>


                {
                     products &&
                     products.map((product) =>(

                        <div key={product._id} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <Link to={`/product/${product._id}`} >
                            <img className="hover:grow hover:shadow-lg" src={product.image} />
                            <div className="pt-3 flex items-center justify-between">
                            <p className>{product.name}</p>
        
                            </div>
                            <p className="pt-1 text-gray-900">{product.price} <span>DH</span></p>
                        </Link>
                        </div>

                        
                       
                     ))
                }


           
            </div>
</section>

<Footer/>
        </>

     );
}
 
export default ProductsByCategory;