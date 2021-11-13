import React, { useState } from 'react';


import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const {user, registerUser,isLoading } = useAuth();

  const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
      if (loginData.password1 !== loginData.password2) {
          alert('Your password did not match');
          return
      }
      registerUser(loginData.email, loginData.password1, loginData.name, history);
      e.preventDefault();
  }
  return (
    <div>
      <h2>Register</h2>
      {!isLoading &&<form onSubmit={handleLoginSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" 
    name="email"
    onBlur={handleOnBlur}
    class="form-control" id="exampleInputEmail1"/>
   
  </div>
  <div class="mb-3">
    <label for="Password1" class="form-label">Password</label>
    <input type="password1"  name="password1"
    onBlur={handleOnBlur} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="Password2" class="form-label">Password</label>
    <input type="password2"  name="password2"
    onBlur={handleOnBlur} class="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" class="btn btn-primary">Register</button>
  <br/>
  <NavLink to="/register">Already register?please login</NavLink>
</form>}
{isLoading &&<div class="spinner-border text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>}

    </div>
  );
};

export default Register;