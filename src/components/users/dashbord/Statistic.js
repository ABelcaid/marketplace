import UserDashbord from "./UserDashbord";
import EntrepreneurImg from '../../../img/entrepreneur.jpg';
import { useEffect, useState } from "react";
import axios from "axios";

const Statistic = () => {

    const [sellerStatistic,setSellerStatistic] = useState(0);





    useEffect( async()=>{

        // get number of listed products 

        let res = await axios.get(`${process.env.REACT_APP_URL_API}/sellerStatistic`);

        
        setSellerStatistic(res.data);

        console.log(res.data);

        
       
      
      },[])





    return ( 
        <>
        <div className="flex flex-wrap bg-gray-100 w-full h-screen">
            <UserDashbord/>
            <div className="w-9/12   ">
                <div className="p-4 text-gray-500">
                    ...
                    <div className=" min-w-screen  bg-gray-100 flex items-center justify-center  font-sans overflow-hidden mt-10 sm:mt-0">
                        <div className=" w-full lg:w-5/6">

                            <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                    <div className="w-full sm:p-4 px-4 mb-6">
                                        <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                                        <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                                    </div>

                                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                        <h2 className="title-font font-medium text-3xl text-gray-900">{sellerStatistic && sellerStatistic.typeAccount}</h2>
                                        <p className="">Type Acount</p>
                                    </div>
                                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                        <h2 className="title-font font-medium text-3xl text-gray-900">{sellerStatistic && sellerStatistic.income}</h2>
                                        <p className="">Total  Income in EUR</p>
                                    </div>

                                    
                                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                        <h2 className="title-font font-medium text-3xl text-gray-900">{sellerStatistic && sellerStatistic.listedProduct}</h2>
                                        <p className="">Listed Products</p>
                                    </div>
                                    </div>
                                    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                    <img className="object-cover object-center w-full h-full" src={EntrepreneurImg} alt="stats" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                               
        </>
     );
}
 
export default Statistic;