import NavBar from "../global/NavBar";
import homeImg from '../../img/louvre.png';
import Footer from "../global/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {




    const [copperProducts,setCopperProducts] = useState('');
    const [diamondProducts,setDiamondProducts] = useState('');
    const [goldProducts,setGoldProducts] = useState('');
    const [metalProducts,setMetalProducts] = useState('');
    const [silverProducts,setSilverProducts] = useState('');
    const [ads,setAds] = useState('');

    useEffect(async()=>{


        


        try {

            const response1 = await axios.get(`${process.env.REACT_APP_URL_API}/product/productByCategory/copper/4`);

            const response2 = await axios.get(`${process.env.REACT_APP_URL_API}/product/productByCategory/diamond/4`);
            
            const response3 = await axios.get(`${process.env.REACT_APP_URL_API}/product/productByCategory/gold/4`);

            const response4 = await axios.get(`${process.env.REACT_APP_URL_API}/product/productByCategory/metal/4`);

            const response5 = await axios.get(`${process.env.REACT_APP_URL_API}/product/productByCategory/silver/4`);


            const adsRes = await axios.get(`${process.env.REACT_APP_URL_API}/ads/getAds`);



            setCopperProducts(response1.data);

            setDiamondProducts(response2.data);

            setGoldProducts(response3.data);

            setMetalProducts(response4.data);

            setSilverProducts(response5.data);

            setAds(adsRes.data);

            
        } catch (error) {

            console.log(error);
            
        }

    



        
      
      },[])






    return ( 

        <>
        <NavBar/>

        
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

        <div className="container mx-auto px-6">
            <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{backgroundImage: `url(${ads && ads.image})`}}>
                <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                    <h2 className="text-2xl text-white font-semibold">{ads && ads.description}</h2>
                  
                </div>
                </div>
            </div>
        </div>




        </div>
        <section className="bg-white py-8 ">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                    Products by category
                    </a>
                    <div className="flex items-center" id="store-nav-content">
                
               
                    </div>
                </div>
                </nav>

                

                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                    Top Diamond Products
                    </a>

                </div>
                </nav>


                {
                     diamondProducts &&
                     diamondProducts.map((product) =>(

                        <div key={product._id} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <Link to={`/product/${product._id}`} >
                            <img className="hover:grow hover:shadow-lg" src={product.image} />  
                            <div>
                            <div className="flex items-center justify-between mt-3">
                                <div>
                                    <a href="#" className="font-medium">{product.name}</a>
                                  
                                    </div>
                                    <span className="flex items-center h-8 text-white  bg-blue-500 text-sm px-2 rounded">{product.price}  <span> € </span></span>
                                </div>
                            </div>

                        </Link>
                        </div>
                       
                     ))
                }

                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                    Top Copper Products
                    </a>
                </div>
                </nav>

                {
                     copperProducts &&
                     copperProducts.map((product) =>(

                        <div  key={product._id} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <Link to={`/product/${product._id}`}>
                            <img className="hover:grow hover:shadow-lg" src={product.image} />
                            <div>
                            <div className="flex items-center justify-between mt-3">
                                <div>
                                    <a href="#" className="font-medium">{product.name}</a>
                                  
                                    </div>
                                    <span className="flex items-center h-8 text-white  bg-blue-500 text-sm px-2 rounded">{product.price}  <span> € </span></span>
                                </div>
                            </div>
                        </Link>
                        </div>
                       
                     ))
                }

                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                    Top Gold Products
                    </a>
                </div>
                </nav>
 
        
                {
                     goldProducts &&
                     goldProducts.map((product) =>(

                        <div  key={product._id} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <Link to={`/product/${product._id}`}>
                            <img className="hover:grow hover:shadow-lg" src={product.image} />
                            <div>
                            <div className="flex items-center justify-between mt-3">
                                <div>
                                    <a href="#" className="font-medium">{product.name}</a>
                                  
                                    </div>
                                    <span className="flex items-center h-8 text-white  bg-blue-500 text-sm px-2 rounded">{product.price}  <span> € </span></span>
                                </div>
                            </div>
                        </Link>
                        </div>
                       
                     ))
                }
         
                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                    Top Metal Products
                    </a>
                </div>
                </nav>
 
        
                {
                     metalProducts &&
                     metalProducts.map((product) =>(

                        <div  key={product._id} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <Link to={`/product/${product._id}`}>
                            <img className="hover:grow hover:shadow-lg" src={product.image} />
                            <div>
                            <div className="flex items-center justify-between mt-3">
                                <div>
                                    <a href="#" className="font-medium">{product.name}</a>
                                  
                                    </div>
                                    <span className="flex items-center h-8 text-white  bg-blue-500 text-sm px-2 rounded">{product.price}  <span> € </span></span>
                                </div>
                            </div>
                        </Link>
                        </div>
                       
                     ))
                }

                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                    Top Silver Products
                    </a>
                </div>
                </nav>
 
        
                {
                     silverProducts &&
                     silverProducts.map((product) =>(

                        <div key={product._id} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <Link to={`/product/${product._id}`}>
                            <img className="hover:grow hover:shadow-lg" src={product.image} />
                            <div>
                            <div className="flex items-center justify-between mt-3">
                                <div>
                                    <a href="#" className="font-medium">{product.name}</a>
                                  
                                    </div>
                                    <span className="flex items-center h-8 text-white  bg-blue-500 text-sm px-2 rounded">{product.price}  <span> € </span></span>
                                </div>
                            </div>
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
 
export default Home;