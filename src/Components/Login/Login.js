import React from 'react';
import { Form } from 'react-bootstrap';
import {  useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const { signInUsingGoogle,handleEmailChange,processLogin, handlePasswordChange,handleRegistration} = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <Form onSubmit={handleRegistration}>
            <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
          </div>
          <button onClick={processLogin} type="submit" className="btn btn-primary">
          Login
        </button>
        </div> 
            </Form>
          
            <button   onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;