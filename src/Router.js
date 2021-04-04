import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/admin/login/login';
import AddAdmin from './components/admin/addAdmin/AddAdmin';
import UpdatePassword from "./components/admin/login/UpdatePassword";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import SideBarAdmin from "./components/admin/sideBar/SideBarAdmin";
import Home from "./components/home/Home";
import Register from "./components/users/login/Register";
import LoginUser from "./components/users/login/LoginUser";
import ValidateAccount from "./components/users/login/ValidateAccount";
import AddSeller from "./components/admin/addSeller/AddSeller";
import ProductManagement from "./components/users/dashbord/ProductManagement";
import DashboardHome from "./components/users/dashbord/DashboardHome";
import AccountType from "./components/users/dashbord/AccountType";
import Statistic from "./components/users/dashbord/Statistic";
import ProductsByCategory from "./components/home/ProductsByCategory";
import ProductDetails from "./components/home/ProductDetails";
import Cart from "./components/home/Cart";

function Router(){

    const loggedIn = useContext (AuthContext);
    const userLoggedIn = useContext (AuthContext);

    const isLoggedIn = loggedIn.loggedIn;


    const role = loggedIn.role;
    const userRole = userLoggedIn.userRole;
   

    return (

        <BrowserRouter>
            <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={LoginUser} />
            <Route exact path="/admin" component={Login} />
            <Route exact path="/validateAccount/:token" component={ValidateAccount} />
            <Route exact path="/products/:category" component={ProductsByCategory} />
            <Route exact path="/product/:idProduct" component={ProductDetails} />
            <Route exact path="/cart" component={Cart} />
            
            {
                userRole == "seller" && <>
                    <Route path='/productsManagement' exact component={ProductManagement} />
                    <Route path='/dashboard' exact component={DashboardHome} />
                    <Route path='/accountType' exact component={AccountType} />
                    <Route path='/statistic' exact component={Statistic} />
                    
                    

                </>
            }



            {
                userRole == "buyer"  && <>
                    <Route path='/dashboard' exact component={DashboardHome} />

                </>
            }
            

            {
                role == "root" && <>
                    <Route path='/admin/addAdmin' exact component={AddAdmin} />
                    <Route path='/admin/updatePassword' exact component={UpdatePassword} />
                    <Route path='/admin/sellerManagement' exact component={AddSeller} />

                    
                </>
            }
            {
                role == "admin" && <>
                    <Route path='/admin/normalAdmin' exact component={SideBarAdmin} />
                    <Route path='/admin/updatePassword' exact component={UpdatePassword} />

                </>
            }

            

            </Switch>
        </BrowserRouter>
    )
}

export default Router;