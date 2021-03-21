import jwt_decode from "jwt-decode";

export const isAuth = () => {


    const token = localStorage.getItem('token');
    
 

    if (token) {

        let decoded = jwt_decode(token);    
        let role =  decoded.role;

        if(role == 'root') {
    
            return true
        
        }
        
        return false
    }else{
        return false  
    }

    
    
    }