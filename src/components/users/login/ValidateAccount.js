import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ValidateAccount = () => {

    const {token} = useParams();

    useEffect(()=>{

        axios.put(`http://localhost:8080/activateAccount/${token}`)
        .then(function (response) {
         
          console.log(response.data);
        
        }).catch(function (err) {
          console.log(err);
      });
      
      },[])

    return ( 
        <>
        <h1>your account is valid, you can login now  </h1>
        </>
     );
}
 
export default ValidateAccount;