import React, {Component } from 'react';
import './App.css';
import logo from './logo.png';


class Login extends Component{
  render(){
      return(
        <div>
  <div className="accountbg" />
  <div className="wrapper-page">
    <div className="card">
      <div className="card-body">
        <h3 className="text-center mt-0 m-b-15">
          <a href="App" className="logo logo-admin"><img src={logo} height={50} alt="logo" /></a>
        </h3>
        <div className="p-3">
          <form className="form-horizontal m-t-20" action="Dashboard">
            <div className="form-group row">
              <div className="col-12">
                <input className="form-control" type="text" required placeholder="Username" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-12">
                <input className="form-control" type="password" required placeholder="Password" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-12">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
              </div>
            </div>
            <div className="form-group text-center row m-t-20">
              <div className="col-12">
                <button className="btn btn-danger btn-block waves-effect waves-light" type="submit">Log In</button>
              </div>
            </div>
            {/* <div class="form-group m-t-10 mb-0 row">
                          <div class="col-sm-7 m-t-20">
                              <a href="pages-recoverpw.html" class="text-muted"><i class="mdi mdi-lock"></i> <small>Forgot your password ?</small></a>
                          </div>
                          <div class="col-sm-5 m-t-20">
                              <a href="pages-register.html" class="text-muted"><i class="mdi mdi-account-circle"></i> <small>Create an account ?</small></a>
                          </div>
                      </div> */}
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
      )
  }
}

export default Login;
