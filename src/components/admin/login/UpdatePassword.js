import imageUpdatePassword from '../img/login.svg';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';





const UpdatePassword = () => {

  const [password,setPassword] = useState('');


  const history = useHistory();

  
  const handleSubmit = async (e) => {

    
    e.preventDefault();

    try {
      const res = await  axios.put(`${process.env.REACT_APP_URL_API}/admin/updatePassword`, {password : password});

  
              history.push('/admin');


  
  }
  catch (err) {
  console.error(err);
  }
    
   
   

  }




    return ( 
    <div className="UpdatePassword"> 

    <div className="lg:flex">
<div className="lg:w-1/2 xl:max-w-screen-sm">
  <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
    <div className="cursor-pointer flex items-center">
      <div>
    
      </div>
      <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">Yw</div>
    </div>
  </div>
  <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
    <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
            xl:text-bold">Change Password</h2>
    <div className="mt-12">
      <form  onSubmit={handleSubmit}>

        <div className="mt-8">
          <div className="flex justify-between items-center">
            <div className="text-sm font-bold text-gray-700 tracking-wide">
             New Password
            </div>

          </div>
          <input 
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" 
            placeholder="Enter New Password"
            type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            
            />
        </div>
        <div className="mt-10">
          <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                        shadow-lg">
            Update
          </button>
        </div>
      </form>

    </div>
  </div>
</div>
<div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
  <img src={imageUpdatePassword} className="w-7/12"/>
</div>
</div> 

    </div>
     );
}
 
export default UpdatePassword;