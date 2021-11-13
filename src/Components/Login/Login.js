import React,{useState} from 'react';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const {user,loginUser} =useAuth();
  const [loginData, setLoginData] = useState({});
  const location =useLocation();
  const history= useHistory();
  const handleOnChange = e =>{
const field = e.target.name;
const value = e.target.value;
const newLoginData = { ...loginData };
newLoginData[field] = value;
setLoginData(newLoginData);
console.log(field ,value)

  }
  const handleLoginSubmit = e => {
    loginUser(loginData.email, loginData.password1 ,location, history);
    e.preventDefault();
    
  }
  return (
    <div>
   <form onSubmit={handleLoginSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" 
    name="email"
    onBlur={handleOnChange}
    class="form-control" id="exampleInputEmail1"/>
   
  </div>
  <div class="mb-3">
    <label for="Password1" class="form-label">Password</label>
    <input type="password1"  name="password1"
    onBlur={handleOnChange} class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">login</button>
  <br/>
  <NavLink to="/login">New user?please Register</NavLink>
</form>
{user?.email && <div class="alert alert-success" role="alert">
  ypu are successfully login!
</div>}
    </div>
  );
};

export default Login;