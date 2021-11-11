// import { Route,BrowserRouter, Switch } from 'react-router';
import {  Route,BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Bikes from './Components/Bikes/Bikes';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Purchase from './Components/Purchase/Purchase';
import Register from './Components/Register/Register';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
   <h2>welcome</h2>
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
