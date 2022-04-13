import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CustomerForm from './components/CustomerFolder/CustomerForm';

import LoginPage from './components/LoginPage';
import SubscriberForm from './components/SubscriberFolder/SubscriberForm';
import UpdateSubscriberForm from './components/SubscriberFolder/UpdateSubscriberForm';
//import SubscriberLoginPage from './components/SubscriberFolder/SubscriberLoginPage';
import SubscriberOptions from './components/SubscriberFolder/SubscriberOptions';
 import AddItemSub from './components/SubscriberFolder/AddItemSub';
 import ModifyItemSub from './components/SubscriberFolder/ModifyItemSub';
 import FeedbackSub from './components/SubscriberFolder/FeedbackSub';
 import AccountInfo from './components/CustomerFolder/AccountInfo';
 import AccountInfoSub from './components/SubscriberFolder/AccountInfoSub';
 import UpdateCustForm from './components/CustomerFolder/UpdateCustForm';
 import Cart from './components/CustomerFolder/CustomerCart';
 import CustomerCart from './components/CustomerFolder/CustomerCart';
 //import AccountInfoSubUpdate from './components/SubscriberFolder/AccountInfoSubUpdate';
 import ForgotPassword from './components/ForgotPassword';
 import Subcategory from './components/Subcategory';
 import ConfirmOrder from './components/CustomerFolder/ConfirmOrder';
 import UserLogout from './components/UserLogout';
 import OrderAndPayement from './components/CustomerFolder/OrderAndPayement';
 import UpdateForOrder from './components/CustomerFolder/UpdateForOrder';
 import SubCategoryWiseItems from './components/SubCategoryWiseItems';
 import YourOrders from './components/CustomerFolder/YourOrders';
 import Admin from './components/AdminFolder/Admin';
 import FeedbackRating from './components/CustomerFolder/FeedbackRating';
 import SearchBarPage from './components/SearchBarPage';
 import StateItems from './components/StateItems';
import AdminDashboard from './components/AdminFolder/AdminDashboard';
import Product from './components/AdminFolder/Product';
import Order from './components/AdminFolder/Order';
import AboutUs from './components/AboutUs';
import ConnectUs from './components/ConnectUs';
import FeedbackInfo from './components/AdminFolder/FeedbackInfo';
//  import AddressInfo from './components/AccountInfo';
function App() {
  return (
    <div>
      {/* this is visible to every page <h5>hii!!</h5> */}
     
      <Router>
                <Switch>
                    <Route path="/" exact component={Header}/>
                    <Route path="/cart" exact component={Cart}/>
                    <Route path="/CustomerCart" exact component={CustomerCart}/>
                    <Route path="/custForm" exact component={CustomerForm}/> 
                    <Route path="/ConfirmOrder" exact component={ConfirmOrder}/> 
                    <Route path="/LoginPage" exact component={LoginPage}/>
                    {/* <Route path="/subscriberLoginPage" exact component={SubscriberLoginPage}/> */}
                    <Route path="/subscriberRegistr" exact component={SubscriberForm}/>
                    <Route path="/optionsToSubscriber" exact component={SubscriberOptions}/>
                    <Route path="/addItembySubscr" exact component={AddItemSub}/>
                    <Route path="/forgotPassword" exact component={ForgotPassword}/>
                    <Route path="/modifyItembySubscr/:id" exact component={ModifyItemSub}/>
                    <Route path="/feedbackForSubscr" exact component={FeedbackSub}/> 
                    <Route path="/accountInfo/:id" exact component={AccountInfo}/>   {/*//1 */}
                    <Route path="/accountInfoSub/:id" exact component={AccountInfoSub}/> {/*//2 */}
                   {/* <Route path="/subscriberAccoInfo/edit/:id" exact component={AccountInfoSubUpdate}/>  */}
                   <Route path="/subscriberAccoInfo/edit/:id" exact component={UpdateSubscriberForm}/>
                   <Route path="/customerAccoInfo/edit/:id" exact component={UpdateCustForm}/>
                   <Route path="/subcategory/:id" exact component={Subcategory}/>
                   <Route path="/userLogout" exact component={UserLogout}/>
                   <Route path="/OrderAndPayement" exact component={OrderAndPayement}/>
                   {/* <Route path="/updateForOrder/edit/:id" exact component={UpdateForOrder}/> */}
                   <Route path="/updateForOrder/edit" exact component={UpdateForOrder}/>
                   <Route path="/subCategoryWiseItems/:id" exact component={SubCategoryWiseItems}/>
                   <Route path="/yourorder" exact component={YourOrders}/>
                   <Route path="/admin" exact component={Admin}/>
                   <Route path="/product" exact component={Product}/>
                   <Route path="/order" exact component={Order}/>
                   <Route path="/feedbackInfo" exact component={FeedbackInfo}/>
                   
                   <Route path="/admindash" exact component={AdminDashboard}/>
                   <Route path="/feedback" exact component={FeedbackRating}/>
                   <Route path="/searchBarPage" exact component={SearchBarPage}/>
                   <Route path="/stateItems" exact component={StateItems}/>
                   <Route path="/aboutUs" exact component={AboutUs}/>
                   <Route path="/connectUs" exact component={ConnectUs}/>
                   
                </Switch>
      </Router>
      
    </div>
  );
}

export default App;
