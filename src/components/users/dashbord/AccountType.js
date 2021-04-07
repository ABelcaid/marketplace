import UserDashbord from "./UserDashbord";

import StripeCheckout from "react-stripe-checkout";

import toastr from 'toastr';
import "toastr/build/toastr.css";
import axios from "axios";
import { useState } from "react";

const AccountType = () => {

  


    async function handleTokenProAccount(token) {


        let product = {
            type : 'pro',
            price : 3000
        }

       

        const response = await axios.post(
            `${process.env.REACT_APP_URL_API}/accountType/upgradeAccount`,
          { token,product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {

          

          toastr.info('Success! Check email for details', {
            positionClass: "toast-top-left",
        })

        } else {


          toastr.warning('Something went wrong', {
            positionClass: "toast-top-left",
        })
        }
      }



      async function handleTokenExpertAccount(token) {

        let product = {
            type : 'expert',
            price : 5000
        }
       

        const response = await axios.post(
            `${process.env.REACT_APP_URL_API}/accountType/upgradeAccount`,
          { token,product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {

          

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
        <div className="flex flex-wrap bg-gray-100 w-full h-screen">
            <UserDashbord/>
            <div className="w-9/12   ">
                <div className="p-4 text-gray-500">
                    ...
                    <div className=" min-w-screen  bg-gray-100 flex items-center justify-center  font-sans overflow-hidden mt-10 sm:mt-0">
                        <div className=" w-full lg:w-5/6">
                            
                        <section className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-col text-center w-full mb-20">
                                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Account Type</h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                      ....
                                </div>
                                <div className="flex flex-wrap -m-4">
                                
                                <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                                    <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">Free</span>
                                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Starter</h2>
                                    <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                        <span>FREE</span>
                                        <span className="text-lg ml-1 font-normal text-gray-500"></span>
                                    </h1>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                        </span>10 Products
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                        </span>Standard Delivery
                                    </p>

                                    <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Free
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                    <p className="text-xs text-gray-500 mt-3">the default account.</p>
                                    </div>
                                </div>
                                <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                                    <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                        <span>3000</span>
                                        <span className="text-lg ml-1 font-normal text-gray-500">EUR</span>
                                    </h1>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                        </span>50 Products
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                        </span>Standard Delivery
                                    </p>

                                    {/* <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Buy
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button> */}


                                    <StripeCheckout className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
                                        stripeKey="pk_test_51IcsGEHRH7LB9NYW6q5Xed7pHznPT7shwEfb0NhkWdVIHB489oWS4E2iypkwCEeO8KOYLG5FEAro7SQToOlrCOga00Q09necQB"
                                        name={'Pro Account'}
                                        token={handleTokenProAccount}
                                        amount={30 * 100}
                                    />  



                                    <p className="text-xs text-gray-500 mt-3">free after you selle more than 5000 EUR.</p>
                                    </div>
                                </div>
                                <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Expert</h2>
                                    <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                        <span>5000</span>
                                        <span className="text-lg ml-1 font-normal text-gray-500">EUR</span>
                                    </h1>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                        </span>Unlimited products
                                    </p>
                                    <p className="flex items-center text-gray-600 mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                        </span>Express Delivery
                                    </p>

                                    {/* <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Buy
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button> */}

                                    <StripeCheckout className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
                                        stripeKey="pk_test_51IcsGEHRH7LB9NYW6q5Xed7pHznPT7shwEfb0NhkWdVIHB489oWS4E2iypkwCEeO8KOYLG5FEAro7SQToOlrCOga00Q09necQB"
                                        name={'Expert Account'}
                                        token={handleTokenExpertAccount}
                                        amount={50 * 100}
                                    /> 
                                    <p className="text-xs text-gray-500 mt-3">free after you selle more than 20 000 EUR Dhs.</p>
                                    </div>
                                </div>
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
 
export default AccountType;