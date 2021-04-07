import { useEffect, useState } from 'react';
import axios from 'axios';
import SideBarAdmin from "../sideBar/SideBarAdmin";
import toastr from 'toastr';
import "toastr/build/toastr.css";


const SellerManagement = () => {

    const [sellers ,setSellers] = useState('');






    const deleteSeller = (id) => {

 
    axios.delete(`${process.env.REACT_APP_URL_API}/deleteSeller/${id}`)
    .then(res => {
      console.log(res);

      toastr.info(res.data.message, {
        positionClass: "toast-top-left",
    })
       
    })

  }


  useEffect(()=>{

    axios.get(`${process.env.REACT_APP_URL_API}/sellersList`)
    .then(function (response) {
     
        setSellers(response.data)
    
    }).catch(function (err) {
      console.log(err);
  });
  
  })

  

    return ( 
        <>
           <div className="flex flex-wrap bg-gray-100 w-full h-screen">

            <SideBarAdmin/>


            <div className="w-9/12   ">
                <div className="p-4 text-gray-500">
                    Content here...
              


                    
      
      <div className="overflow-x-auto">
        <div className="min-w-screen  bg-gray-100 flex items-center justify-center  font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Full Name</th>
                    <th className="py-3 px-6 text-left">Phone</th>
                    <th className="py-3 px-6 text-center">Email Address</th>
                    <th className="py-3 px-6 text-center">Address</th>
                    <th className="py-3 px-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  
                  {
                    sellers &&
                    sellers.map((seller) =>(

                      <tr key={seller._id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{seller.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span className="font-medium">{seller.phone}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          <samp className="font-medium">{seller.email}</samp>
                        </div>
                      </td>

                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          <span className="font-medium">{seller.address}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div onClick={()=>{deleteSeller(seller._id)}} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"  >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
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
 
export default SellerManagement;


