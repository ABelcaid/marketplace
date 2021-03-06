import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/admin/login/login';
import AddAdmin from './components/admin/addAdmin/AddAdmin';
import UpdatePassword from "./components/admin/login/UpdatePassword";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
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
import SellerManagement from "./components/admin/addSeller/SellerManagement";
import DelevryMan from "./components/admin/addDelevryMan/DelevryMan";
import AddAds from "./components/admin/addAds/AddAds";
import AddOrder from "./components/admin/addOrder/addOrder";
import Auction from "./components/home/Auction";
import AddAuction from "./components/admin/addAuction/AddAuction";

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

            
            
            {
                userRole == "seller" && <>
                    <Route path='/productsManagement' exact component={ProductManagement} />
                    <Route path='/dashboard' exact component={DashboardHome} />
                    <Route path='/accountType' exact component={AccountType} />
                    <Route path='/statistic' exact component={Statistic} />
                    <Route path='/auction' exact component={Auction} />
                    

                </>
            }



            {
                userRole == "buyer"  && <>
                    <Route path='/dashboard' exact component={DashboardHome} />
                    <Route path='/auction' exact component={Auction} />

                </>
            }
            

            {
                role == "root" && <>
                    <Route path='/admin/addAdmin' exact component={AddAdmin} />
                    <Route path='/admin/updatePassword' exact component={UpdatePassword} />
                    <Route path='/admin/sellerValidation' exact component={AddSeller} />
                    <Route path='/admin/sellerManagement' exact component={SellerManagement}/>
                    <Route path='/admin/delevryManManagement' exact component={DelevryMan}/>
                    <Route path='/admin/adsManagement' exact component={AddAds}/>
                    <Route path='/admin/orderManagement' exact component={AddOrder}/>
                    <Route exact path="/admin/AddAuction" component={AddAuction} />
                </>
            }
            {
                role == "admin" && <>
                    <Route path='/admin/updatePassword' exact component={UpdatePassword} />
                    <Route path='/admin/sellerManagement' exact component={SellerManagement}/>
                    <Route path='/admin/delevryManManagement' exact component={DelevryMan}/>
                    <Route path='/admin/adsManagement' exact component={AddAds}/>
                    <Route path='/admin/orderManagement' exact component={AddOrder}/>
                </>
            }

            

            </Switch>
        </BrowserRouter>
    )
}

export default Router;