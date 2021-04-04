import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";





const NavBar = () => {


  const userLoggedIn = useContext (AuthContext);

  const isLoggedIn = userLoggedIn.userLoggedIn;
  const role = userLoggedIn.userRole;

  const history = useHistory();

  const { getLoggedInUser } = useContext(AuthContext);

    const [open, setOpen] = useState(false);


    const logOut = async() => { 

      await axios.get(`${process.env.REACT_APP_URL_API}/logout`);

      await getLoggedInUser();

      history.push('/');

  }


    return ( 
        <>
         {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                {/* <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                /> */}
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              
       
         
       
              <Link to={'/products/diamond'} className="text-base font-medium text-gray-500 hover:text-gray-900">Diamond </Link>
              <Link to={'/products/gold'} className="text-base font-medium text-gray-500 hover:text-gray-900">Pure Gold</Link>
              <Link to={'/products/metal'} className="text-base font-medium text-gray-500 hover:text-gray-900">Metal</Link>
              <Link to={'/products/silver'} className="text-base font-medium text-gray-500 hover:text-gray-900">Silver</Link>
              <Link to={'/products/copper'} className="text-base font-medium text-gray-500 hover:text-gray-900">Copper</Link>
              

            </nav>

            
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a className="no-underline hover:text-black     ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 " href="#">
                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                  <circle cx="10.5" cy="18.5" r="1.5" />
                  <circle cx="17.5" cy="18.5" r="1.5" />
                </svg>
              </a>
              <Link to={'/dashbord'} className="no-underline hover:text-black  ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 " href="#">
                <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <circle fill="none" cx={12} cy={7} r={3} />
                  <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                </svg>
              </Link>

              



              {
                isLoggedIn ? (
                  <a
                  href="#" onClick={logOut}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700"
                >
                 Logout
                </a>
                ):(
                  <a
                  href="#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-blue-500 hover:bg-blue-700"
                >
                 login
                </a>
                )
              }

           
            </div>
          </div>
        </div>


        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Analytics
                    </span>
                  </a>

                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
  
              <div>

                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Join us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
     );
}
 
export default NavBar;