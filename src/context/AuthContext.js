import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [loggedIn , setLoggedIn] = useState(undefined);
    const [role , setRole] = useState(undefined);
    

    async function getLoggedIn(){

        const loggedInRes = await axios.get(`${process.env.REACT_APP_URL_API}/admin/loggedIn`);

        console.log("*****************");
        console.log(loggedInRes.data.loggedIn);
        console.log("*****************");

        setLoggedIn(loggedInRes.data.loggedIn);
        setRole(loggedInRes.data.role);

    }

    useEffect(()=>{
        getLoggedIn()

    },[])


    return ( 
        <AuthContext.Provider value={{loggedIn,role,getLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContext;
export {AuthContextProvider};