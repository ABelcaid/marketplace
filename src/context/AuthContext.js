import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = (props) => {

    // --------------admin login context ------------------

    const [loggedIn , setLoggedIn] = useState(undefined);
    const [role , setRole] = useState(undefined);


    

    async function getLoggedIn(){

        const loggedInRes = await axios.get(`${process.env.REACT_APP_URL_API}/admin/loggedIn`);

        console.log("***************x**");
        console.log(loggedInRes.data.loggedIn);
        console.log("*****************");

        setLoggedIn(loggedInRes.data.loggedIn);
        setRole(loggedInRes.data.role);

    }

    // --------------user login context ------------------



    const [userLoggedIn , setUserLoggedIn] = useState(undefined);
    const [userRole , setUserRole] = useState(undefined);


    

    async function getLoggedInUser(){

        const loggedInUserRes = await axios.get(`${process.env.REACT_APP_URL_API}/loggedInUser`);

        console.log("*****************");
        console.log(loggedInUserRes.data.loggedIn);
        console.log("*****************");

        setUserLoggedIn(loggedInUserRes.data.loggedIn);
        setUserRole(loggedInUserRes.data.role);

    }






    useEffect(()=>{
        getLoggedIn();
        getLoggedInUser();

    },[])


    return ( 
        <AuthContext.Provider value={{loggedIn,role,getLoggedIn,userLoggedIn,userRole,getLoggedInUser}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContext;
export {AuthContextProvider};