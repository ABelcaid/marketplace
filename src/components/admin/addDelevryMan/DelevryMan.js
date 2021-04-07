import { useEffect, useState } from 'react';
import axios from 'axios';
import SideBarAdmin from "../sideBar/SideBarAdmin";
import toastr from 'toastr';
import "toastr/build/toastr.css";

const DelevryMan = () => {

  const [name,setName] = useState('');
  const [email ,setEmail] = useState('');
  const [phone ,setPhone] = useState('');

  const [delevryManList,setDelevryManList] = useState(null);





  const handleSubmit = (e) => {

    e.preventDefault();

    const delevryMan = {name,email,phone};
 

    axios.post(`${process.env.REACT_APP_URL_API}/deliveryMan/addDelevryMan`, delevryMan)
    .then(res => {

      console.log(res.data);
     
      toastr.info(res.data.message, {
        positionClass: "toast-top-left",
    })
     
    })

  }


  // ----------------------detete admin --------------------------


    const handleDelete = (id) => {

 
    axios.delete(`${process.env.REACT_APP_URL_API}/deliveryMan/deleteDelevryMan/${id}`)
    .then(res => {
      console.log(res);

      toastr.info(res.data.message, {
        positionClass: "toast-top-left",
    })
       
    })

  }


  useEffect(()=>{

    axios.get(`${process.env.REACT_APP_URL_API}/deliveryMan/delevryManList`)
    .then(function (response) {
     
        setDelevryManList(response.data)
    
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
                  
                    <div className=" min-w-screen  bg-gray-100 flex items-center justify-center  font-sans overflow-hidden mt-10 sm:mt-0">
                        <div className=" w-full lg:w-5/6">

                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form onSubmit={handleSubmit}>
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="first_name"
                                                        className="block text-sm font-medium text-gray-700">Full
                                                        name</label>

                                                    <input type="text" name="name" id="name"
                                                        
                                                        className=" h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                                                        value={name}
                                                        onChange={(e)=>setName(e.target.value)}
                                                        />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="Phone"
                                                        className="block text-sm font-medium text-gray-700">Phone</label>

                                                    <input type="text" name="Phone" id="Phone"
                                                       
                                                        className=" h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                                                        value={phone}
                                                        onChange={(e)=>setPhone(e.target.value)}
                                                        />
                                                </div>
                                                <div className="col-span-6 sm:col-span-4">
                                                    <label htmlFor="email_address"
                                                        className="block text-sm font-medium text-gray-700">Email
                                                        address</label>

                                                    <input type="eamil" name="email_address" id="email_address"
                                                        
                                                        className=" h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                        value={email}
                                                        onChange={(e)=>setEmail(e.target.value)}
                                                        />
                                                </div>
                                         
                                     
                                             

                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button type="submit"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Add 
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* table of admins */}

                    
      
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
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  
                  {
                    delevryManList &&
                    delevryManList.map((delevryMan) =>(

                      <tr key={delevryMan._id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{delevryMan.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span className="font-medium">{delevryMan.phone}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          <samp className="font-medium">{delevryMan.email}</samp>
                        </div>
                      </td>
                   
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div onClick={()=>{handleDelete(delevryMan._id)}} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"  >
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
 
export default DelevryMan;