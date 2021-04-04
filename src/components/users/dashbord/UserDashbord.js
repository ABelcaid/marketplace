import axios from "axios";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import toastr from 'toastr';
import "toastr/build/toastr.css";
import AuthContext from "../../../context/AuthContext";

const UserDashbord = () => {

    const userLoggedIn = useContext(AuthContext);
    const userRole = userLoggedIn.userRole;

    const history = useHistory();
   
    const { getLoggedInUser } = useContext(AuthContext);


    

    
    let userName = localStorage.getItem('userName');


    const BecomeSeller = async() => { 

       let res =  await axios.put(`${process.env.REACT_APP_URL_API}/becomeSeller`);

       toastr.info(res.data.message, {
        positionClass: "toast-top-left",
    })
  
    }

    const logOut = async() => { 

        await axios.get(`${process.env.REACT_APP_URL_API}/logout`);

        await getLoggedInUser();

        history.push('/login');

    }



    return ( 
        <>
        <div className="w-3/12 bg-white rounded p-3 shadow-lg">
           <div className="flex items-center space-x-4 p-2 mb-5">
               <img className="h-12 rounded-full"
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png" alt="Benjamin Ferel" />
               <div>
                   <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">{userName}</h4>
                   <span className="text-sm tracking-wide flex items-center space-x-1">
                       <svg className="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                               d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                       </svg><span className="text-gray-600">{userRole}</span>
                   </span>
               </div>
           </div>
           <ul className="space-y-2 text-sm">


               {
                   userRole =="buyer" && <>

                <li>
                   <a href="#" onClick={BecomeSeller}
                       className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                       {/* <span className="text-gray-600">
                           <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                               stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                   d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                           </svg>
                       </span> */}
                       <span>Become a Seller</span>
                   </a>
               </li>

                   </>
               }
   

   
   


               {
               userRole =="seller" && <>

      
            <li>

                <Link to={'/productsManagement'} className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <span>Products Managements</span>
                </Link>
             
            </li>
            <li>

                <Link to={'/accountType'} className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <span>Account Type</span>
                </Link>
             
            </li>
            <li>

                <Link to={'/statistic'} className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                <span className="text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
                </svg>
                    </span>
                    <span>STATISTIC</span>
                </Link>
             
            </li>
  
                
                </>
            }

            <li>
                <a href="#" onClick={logOut}
                    className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </span>
                    <span>Logout</span>
                </a>
            </li>
    
           
           </ul>
       </div>
       </>
     );
}
 
export default UserDashbord;