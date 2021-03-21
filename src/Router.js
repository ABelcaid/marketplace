import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/admin/login/login';
import DashBordAdmin from './components/admin/sideBar/SideBarAdmin';
import AddAdmin from './components/admin/addAdmin/AddAdmin';
import UpdatePassword from "./components/admin/login/UpdatePassword";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import SideBarAdmin from "./components/admin/sideBar/SideBarAdmin";

function Router(){

    const loggedIn = useContext (AuthContext);
    const isLoggedIn = loggedIn.loggedIn;
    const role = loggedIn.role;

   

    return (

        <BrowserRouter>
            <Switch>
            <Route exact path="/admin" component={Login} />

            {
                role == "root" && <>
                    <Route path='/admin/addAdmin' exact component={AddAdmin} />
                    <Route path='/admin/updatePassword' exact component={UpdatePassword} />

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