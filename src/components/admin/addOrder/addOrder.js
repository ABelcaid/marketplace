import { useEffect, useState } from 'react';
import axios from 'axios';
import SideBarAdmin from "../sideBar/SideBarAdmin";
import toastr from 'toastr';
import "toastr/build/toastr.css";

const AddOrder = () => {


    const [orders , setOrders] = useState('');





    

        const validateOrder = (id) => {

    
            axios.put(`${process.env.REACT_APP_URL_API}/order/${id}`)
            .then(res => {
            console.log(res);
        
            toastr.info(res.data.message, {
                positionClass: "toast-top-left",
            })
            
            })
        
        }

        useEffect(()=>{

            axios.get(`${process.env.REACT_APP_URL_API}/order/ordersList`)
            .then(function (response) {
            
                setOrders(response.data)
            
            }).catch(function (err) {
            console.log(err);
        });
        
        })





        return (
            <>
            <div className="flex flex-wrap bg-gray-100 w-full h-screen">
    
                <SideBarAdmin />
    
    
                <div className="w-9/12   ">
                    <div className="p-4 text-gray-500">
    
    
    
                        <div className="overflow-x-auto">
                            <div
                                className="min-w-screen  bg-gray-100 flex items-center justify-center  font-sans overflow-hidden">
                                <div className="w-full lg:w-5/6">
                                    <div className="bg-white shadow-md rounded my-6">
                                        <table className="min-w-max w-full table-auto">
                                            <thead>
                                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                    <th className="py-3 px-6 text-left">Id Product</th>
                                                    <th className="py-3 px-6 text-left">Price</th>
                                                    <th className="py-3 px-6 text-center">Shipping Address</th>
    
                                                    <th className="py-3 px-6 text-center">Validate Order</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-600 text-sm font-light">
    
                                                {
                                                orders &&
                                                orders.map((order) =>(
    
                                                <tr key={order._id} className="border-b border-gray-200 hover:bg-gray-100">
                                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <span className="font-medium">{order.idProduct}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-left">
                                                        <div className="flex items-center">
                                                            <span className="font-medium">{order.price}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-center">
                                                        <div className="flex items-center justify-center">
                                                            <samp className="font-medium">{order.shippingAddres}</samp>
                                                        </div>
                                                    </td>
    
    
                                                    <td className="py-3 px-6 text-center">
                                                        <div className="flex item-center justify-center">
                                                            <div onClick={()=>{validateOrder(order._id)}} className="w-4
                                                                mr-2 transform hover:text-purple-500 hover:scale-110" >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                    height="16" fill="currentColor"
                                                                    className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                </svg>
    
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
    
                                                ))
                                                }
    
    
    
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
    
            </div>
        </>
        );
}
 
export default AddOrder;