import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import toastr from 'toastr';
import "toastr/build/toastr.css";



import Footer from "../../global/Footer";
import NavBar from "../../global/NavBar";
import { Link } from 'react-router-dom';




const Register = () => {

    const [name,setName] = useState('');
    const [email ,setEmail] = useState('');
    const [phone ,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [address,setAddress] = useState('');
  
    const history = useHistory();

  
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const user = {name,email,phone,password,address};
      
  
      axios.post(`${process.env.REACT_APP_URL_API}/register`, user)
      .then(res => {
       
        console.log(res.data.error);


        if(res.data.error !== undefined){

          res.data.error.forEach(item =>{

              toastr.warning(item ,{
                  positionClass: "toast-top-left",
              })
          })

        }else{
            history.push('/login');
          toastr.info(' SuccessFully Registred', {
              positionClass: "toast-top-left",
          })
        }

        
       
        
       
      })
  
    }
  





    return ( 
    <>
            <NavBar/>
        
        <section className="text-gray-600 body-font h-screen">
            <form action="" onSubmit={handleSubmit}>

            
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">What is Lorem Ipsum?</h1>
                <p className="leading-relaxed mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Create an account</h2>
                <div className="relative mb-4">
                    <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                    <input type="text" 
                    id="full-name" 
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                    <input type="text" id="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                    <input type="text" id="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                    <input type="password" id="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="text-white  bg-blue-500 hover:bg-blue-700 border-0 py-2 px-8 focus:outline-none  rounded text-lg">Create an account</button>
                
                <Link to={'/login'}>
                <p className="text-xs text-gray-500 mt-3">Already have an account log in here</p>
                </Link>
                </div>
            </div>
            </form>
        </section>

        <Footer/>
    </>
     );
}
 
export default Register;