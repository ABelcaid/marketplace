import { useEffect, useState } from 'react';
import axios from 'axios';
import SideBarAdmin from "../sideBar/SideBarAdmin";

import toastr from 'toastr';
import "toastr/build/toastr.css";



const AddAdmin = () => {

  const [name,setName] = useState('');
  const [email ,setEmail] = useState('');
  const [phone ,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const [role,setRole] = useState('');
  const [city,setCity] = useState('');
  const [admins,setAdmins] = useState(null);

  let token = localStorage.getItem("token");



  const handleSubmit = async(e) => {

    
    e.preventDefault();

    const admin = {name,email,phone,password,role,city};
 

    let res = await axios.post(`${process.env.REACT_APP_URL_API}/admin/add`, admin);



    if(res.data.error !== undefined){

      res.data.error.forEach(item =>{

          toastr.warning(item ,{
              positionClass: "toast-top-left",
          })
      })

    } else{
      toastr.info( res.data.message, {
      positionClass: "toast-top-left",
    })
    }

    


  }


  // ----------------------detete admin --------------------------


    const handleDelete = (id) => {

 
    axios.delete(`${process.env.REACT_APP_URL_API}/admin/deleteAdmin/${id}`)
    .then(res => {
      console.log(res);
       
    })

  }


  useEffect(()=>{

    axios.get('http://localhost:8080/admin/all')
    .then(function (response) {
     
      setAdmins(response.data)
    
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
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="role"
                                                        className="block text-sm font-medium text-gray-700">Role</label>
                                                    <select id="role" name="role" autoComplete="role"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        value={role}
                                                        onChange={(e)=>setRole(e.target.value)}
                                                        >
                                                        <option value="root">root</option>
                                                        <option value="admin">admin</option>
                                                    </select>
                                                </div>
                                     
                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label htmlFor="password"
                                                        className="block text-sm font-medium text-gray-700">password</label>
                                                    <input type="password" name="password" id="password"
                                                        className=" h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                                                        value={password}
                                                        onChange={(e)=>setPassword(e.target.value)}
                                                        />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label htmlFor="city"
                                                        className="block text-sm font-medium text-gray-700">City</label>
                                                    <input type="text" name="city" id="city"
                                                        className=" h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                                                        value={city}
                                                        onChange={(e)=>setCity(e.target.value)}
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
                    <th className="py-3 px-6 text-center">Role</th>
                    <th className="py-3 px-6 text-center">City</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  
                  {
                    admins &&
                    admins.map((admin) =>(

                      <tr key={admin._id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{admin.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span className="font-medium">{admin.phone}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          <samp className="font-medium">{admin.email}</samp>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">{admin.role}</span>
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          <span className="font-medium">{admin.city}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div onClick={()=>{handleDelete(admin._id)}} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"  >
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
 
export default AddAdmin;