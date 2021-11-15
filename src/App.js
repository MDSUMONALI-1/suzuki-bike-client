// import { Route,BrowserRouter, Switch } from 'react-router';

import {  Route,BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import AddOne from './Components/AddOne/AddOne';
import Bikes from './Components/Bikes/Bikes';
import AdminRoute from './Components/Dashboard/AdminRoute/AdminRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import MyOrder from './Components/MyOrder/MyOrder';
import NotFound from './Components/NotFound/NotFound';
import Pay from './Components/Pay/Pay';
import Feedback from './Components/Feedback/Feedback';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Purchase from './Components/Purchase/Purchase';
import Register from './Components/Register/Register';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/bikes">
            <Bikes></Bikes>
            </Route>
            <PrivateRoute path="/purchase/:bikeId">
            <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
            <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/reviews">
            <Feedback></Feedback>
            </PrivateRoute>
           
            <PrivateRoute path="/pay">
            <Pay></Pay>
            </PrivateRoute>
            <AdminRoute path="/makeadmin">
            <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path="/addone">
            <AddOne></AddOne>
            </AdminRoute>
            <AdminRoute path="/manageproducts">
            <ManageProducts></ManageProducts>
            </AdminRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
