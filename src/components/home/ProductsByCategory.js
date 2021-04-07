import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../global/Footer";
import NavBar from "../global/NavBar";

const ProductsByCategory = () => {



    const [products,setProducts] = useState('');

    const [pageNumber, setPageNumber] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);

    const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

    const {category} = useParams();


    useEffect(async()=>{


        try {

            
        
            const response = await axios.get(`${process.env.REACT_APP_URL_API}/product/productByCategoryPagenation/${category}?page=${pageNumber}`);

            setProducts(response.data.products);
            setNumberOfPages(response.data.totalPages)


            
        } catch (error) {

            console.log(error);
            
        }

    
      
      },[pageNumber,category])



      return ( 

        <>
        <NavBar/>
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 ">

        </div>
        <section className="bg-white py-8  h-screen">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                List  Products
                    </a>

                </div>
                </nav>


                {
                     products &&
                     products.map((product) =>(

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


           
            </div>
          


                <div className="flex flex-col items-center my-12">
                <div className="flex text-gray-700">
                    <div className="h-8 w-8 mr-1 flex justify-center items-center  cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left w-4 h-4">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    </div>
                    <div className="flex h-8 font-medium ">
                    {pages.map((pageIndex) => (

                        <button key={pageIndex}  onClick={() => setPageNumber(pageIndex)} className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">{pageIndex + 1}</button>

                    ))}

                    </div>
                    <div className="h-8 w-8 ml-1 flex justify-center items-center  cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right w-4 h-4">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                    </div>
                </div>
                </div>

</section>

<Footer/>
        </>

     );
}
 
export default ProductsByCategory;