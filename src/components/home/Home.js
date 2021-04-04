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


    useEffect(async()=>{


        try {

            const response1 = await axios.get(`${process.env.REACT_APP_URL_API}/product/productByCategory/copper/4`);

            const response2 = await axios.get(`${process.env.REACT_APP_URL_API}/product/productByCategory/diamond/4`);
            
            const response3 = await axios.get(`${process.env.REACT_APP_URL_API}/product/productByCategory/gold/4`);

            const response4 = await axios.get(`${process.env.REACT_APP_URL_API}/product/productByCategory/metal/4`);

            const response5 = await axios.get(`${process.env.REACT_APP_URL_API}/product/productByCategory/silver/4`);




            setCopperProducts(response1.data);

            setDiamondProducts(response2.data);

            setGoldProducts(response3.data);

            setMetalProducts(response4.data);

            setSilverProducts(response5.data);

           

            
        } catch (error) {

            console.log(error);
            
        }

    



        
      
      },[])






    return ( 

        <>
        <NavBar/>
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

        {/* <div className="container mx-auto px-6">
            <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144")'}}>
                <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                    <h2 className="text-2xl text-white font-semibold">Sport Shoes</h2>
                    <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                    <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <span>Shop Now</span>
                    <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>
                </div>
            </div>
        </div> */}


        {/* <img src={homeImg} className="w-auto"/> */}


        </div>
        <section className="bg-white py-8">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                    Products by category
                    </a>
                    <div className="flex items-center" id="store-nav-content">
                    <select className="pl-3 inline-block no-underline hover:text-black" name="" id="">
                            <option value="">DH</option>
                            <option value="">USD</option>
                        </select>
             

             
               
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

                        <div   key={product._id} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <Link to={`/product/${product._id}`}>
                            <img className="hover:grow hover:shadow-lg" src={product.image} />
                            <div className="pt-3 flex items-center justify-between">
                            <p className>{product.name}</p>
        
                            </div>
                            <p className="pt-1 text-gray-900">{product.price} <span>DH</span></p>
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
                            <div className="pt-3 flex items-center justify-between">
                            <p className>{product.name}</p>
        
                            </div>
                            <p className="pt-1 text-gray-900">{product.price}</p>
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
                            <div className="pt-3 flex items-center justify-between">
                            <p className>{product.name}</p>
        
                            </div>
                            <p className="pt-1 text-gray-900">{product.price}</p>
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
                            <div className="pt-3 flex items-center justify-between">
                            <p className>{product.name}</p>
        
                            </div>
                            <p className="pt-1 text-gray-900">{product.price}</p>
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
                            <div className="pt-3 flex items-center justify-between">
                            <p className>{product.name}</p>
        
                            </div>
                            <p className="pt-1 text-gray-900">{product.price}</p>
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