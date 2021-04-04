import { useContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import toastr from 'toastr';
import "toastr/build/toastr.css";






import Footer from "../../global/Footer";
import NavBar from "../../global/NavBar";
import AuthContext from '../../../context/AuthContext';

const LoginUser = () => {

    const { getLoggedInUser } = useContext(AuthContext);

    const [email ,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const history = useHistory();




    const handleSubmit = async (e) => {
    
        e.preventDefault();
    
        try {
          const user = {email,password};
          let res = await  axios.post(`${process.env.REACT_APP_URL_API}/login`, user);

          console.log(res.data.error);


          if(res.data.error !== undefined){

            res.data.error.forEach(item =>{

                toastr.warning(item ,{
                    positionClass: "toast-top-left",
                })
            })

          }else{
            history.push('/dashboard');

            localStorage.setItem('userName',res.data.userName)

            toastr.info(' SuccessFully logged', {
				positionClass: "toast-top-left",
			})
          }



          
    
          getLoggedInUser();
      }
      catch (e) {
        
        toastr.warning(e.message ,{
            positionClass: "toast-top-left",
        })
      }
        
       
       
    
      }




    return ( 
        <>
        <NavBar/>

        <form onSubmit={handleSubmit}>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">What is Lorem Ipsum?</h1>
                <p className="leading-relaxed mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign in </h2>

                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div className="relative mb-4">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                    <input type="password" id="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create an account</button>
                <p className="text-xs text-gray-500 mt-3">Sign in to eBay or create an account</p>
                </div>
            </div>
        </section>
        </form>
    
       

    <Footer/>
</>
     );
}
 
export default LoginUser;