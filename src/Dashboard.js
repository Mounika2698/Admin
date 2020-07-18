import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import MasterForm from './App';

class Dashboard extends Component{
    render(){
        return(
<div>
<Header /> 
{/* <MasterForm /> */}
<div className="wrapper">

  <div className="container-fluid">
  
    {/* Page-Title */}
    <div className="row">
      <div className="col-sm-12">
      </div>
    </div>
    <br />
    {/* end page title end breadcrumb */}
    <div className="row">
      {/* Column */}
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="card m-b-30">
          <div className="card-body">
            <div className="d-flex flex-row">
              <div className="col-3 align-self-center">
                <div className="round">
                  <i className="mdi mdi-webcam" />
                </div>
              </div>
              <div className="col-6 align-self-center text-center">
                <div className="m-l-10">
                  <p className="mb-0 text-muted bold">New Candidates</p>                                                                 
                </div>
              </div>
              <div className="col-3 align-self-end align-self-center">
                <h6 className="m-0 float-right text-center text-success"> <i className="mdi mdi-arrow-up" /> <span>30</span></h6>
              </div> 
            </div>
          </div>
        </div>
      </div>
      {/* Column */}
      {/* Column */}
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="card m-b-30">
          <div className="card-body">
            <div className="d-flex flex-row">
              <div className="col-3 align-self-center">
                <div className="round">
                  <i className="mdi mdi-account-multiple-plus" />
                </div>
              </div>
              <div className="col-6 text-center align-self-center">
                <div className="m-l-10 ">
                  <p className="mb-0 text-muted">New Request</p>
                </div>
              </div>
              <div className="col-3 align-self-end align-self-center">
                <h6 className="m-0 float-right text-center text-success"> <i className="mdi mdi-arrow-up" /> <span>23</span></h6>
              </div>                                                    
            </div>
          </div>
        </div>
      </div>
      {/* Column */}
      {/* Column */}
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="card m-b-30">
          <div className="card-body">
            <div className="d-flex flex-row">
              <div className="col-3 align-self-center">
                <div className="round ">
                  <i className="mdi mdi-basket" />
                </div>
              </div>
              <div className="col-6 align-self-center text-center">
                <div className="m-l-10 ">
                  <p className="mb-0 text-muted">Total Candidates</p>
                </div>
              </div>
              <div className="col-3 align-self-end align-self-center">
                <h6 className="m-0 float-right text-center text-success"> <i className="mdi mdi-arrow-up" /> <span>50</span></h6>
              </div> 
            </div>
          </div>
        </div>
      </div>
      {/* Column */}
      {/* Column */}
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="card m-b-30">
          <div className="card-body">
            <div className="d-flex flex-row">
              <div className="col-3 align-self-center">
                <div className="round">
                  <i className="mdi mdi-rocket" />
                </div>
              </div>
              <div className="col-6 align-self-center text-center">
                <div className="m-l-10">
                  <p className="mb-0 text-muted">Total Request</p>
                </div>
              </div>
              <div className="col-3 align-self-end align-self-center">
                <h6 className="m-0 float-right text-center text-success"> <i className="mdi mdi-arrow-up" /> <span>32</span></h6>
              </div> 
            </div>
          </div>
        </div>
      </div>
      {/* Column */}
    </div>
    <div className="row">
      <div className="col-md-12 col-lg-12 col-xl-8">
        <div className="card m-b-30">
          <div className="card-body">
            <h5 className="header-title pb-3 mt-0">Overview</h5>
            <br />
            <div id="chartContainer" style={{height: '300px', width: '100%;'}}></div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-12 col-xl-4">
        <div className="card m-b-30">
          <div className="card-body">
            {/* <a href="" class="btn btn-primary btn-sm float-right">More Info</a> */}
            <h5 className="header-title mt-0 pb-3">Location wise Candidates</h5>
            <ul className="list-unstyled list-inline text-center">
              <li className="list-inline-item">
                <p><i className="mdi mdi-checkbox-blank-circle text-primary mr-2" />Canada</p> 
              </li>
              <li className="list-inline-item">
                <p><i className="mdi mdi-checkbox-blank-circle text-info mr-2" />USA</p>
              </li>
              <li className="list-inline-item">
                <p><i className="mdi mdi-checkbox-blank-circle text-greylight mr-2" />London</p>    
              </li>
            </ul> 
            <div id="morris-donut-chart" style={{height: '345px'}} />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 col-lg-12 col-xl-8 align-self-center">
        <div className="card bg-white m-b-30">
          <div className="card-body new-user">
            <h5 className="header-title mb-4 mt-0">Members Profiles</h5>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th className="border-top-0" style={{width: '60px'}}>Member</th>
                    <th className="border-top-0">Name</th>
                    <th className="border-top-0">Country</th>
                    <th className="border-top-0">City</th>
                    <th className="border-top-0">Degree</th>                                    
                    <th className="border-top-0">Applied Job</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img className="rounded-circle" src="assets/images/users/avatar-2.jpg" alt="user" width={40} /> </td>
                    <td>
                      <a href="javascript:void(0);">Ruby T. Curd</a>
                    </td>
                    <td>                                                                
                      <img src="assets/images/flags/us_flag.jpg" alt="" style={{width: '30px'}} />
                    </td>
                    <td>Chennai</td>
                    <td>BE</td>                                   
                    <td>
                      Software Developer
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img className="rounded-circle" src="assets/images/users/avatar-3.jpg" alt="user" width={40} /> </td>
                    <td>
                      <a href="javascript:void(0);">William A. Johnson</a>
                    </td>
                    <td>                                                                
                      <img src="assets/images/flags/french_flag.jpg" alt="" style={{width: '30px'}} />
                    </td>
                    <td>Bangalore</td>
                    <td>B.Tech</td>                                   
                    <td>
                      Front end Engineer
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img className="rounded-circle" src="assets/images/users/avatar-4.jpg" alt="user" width={40} /> </td>
                    <td>
                      <a href="javascript:void(0);">Bobby M. Gray</a>
                    </td>
                    <td>                                                                
                      <img src="assets/images/flags/spain_flag.jpg" alt="" style={{width: '30px'}} />
                    </td>
                    <td>Delhi</td>
                    <td>B.com</td>                                   
                    <td>
                      Node developer
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img className="rounded-circle" src="assets/images/users/avatar-5.jpg" alt="user" width={40} /> </td>
                    <td>
                      <a href="javascript:void(0);">Robert N. Carlile</a>
                    </td>
                    <td>                                                                
                      <img src="assets/images/flags/russia_flag.jpg" alt="" style={{width: '30px'}} />
                    </td>
                    <td>Australia</td>
                    <td>BE</td>                                   
                    <td>
                      Front end developer
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img className="rounded-circle" src="assets/images/users/avatar-6.jpg" alt="user" width={40} /> </td>
                    <td>
                      <a href="javascript:void(0);">Ruby T. Curd</a>
                    </td>
                    <td>                                                                
                      <img src="assets/images/flags/italy_flag.jpg" alt="" style={{width: '30px'}} />
                    </td>
                    <td>Pune</td>
                    <td>M.com</td>                                   
                    <td>
                      Software Engineer
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-12 col-xl-4">
        <div className="card bg-white m-b-30">
          <div className="card-body new-user">
            <h5 className="header-title mt-0 mb-4">New Users</h5>
            <ul className="list-unstyled mb-0 pr-3" id="boxscroll2" tabIndex={1} style={{overflow: '', outline: 'none'}}>
             
              <li className="p-3">
                <div className="media">
                  <div className="thumb float-left">
                    <a href="#">
                      <img className=" rounded-circle" src="assets/images/users/avatar-4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="media-body">
                    <p className="media-heading mb-0">William A. Johnson <i className="fa fa-circle text-success mr-1 pull-right" /></p>
                    <small className="pull-right text-muted">Now</small>
                    <small className="text-muted">California</small>
                  </div>
                </div>
              </li>
              <li className="p-3">
                <div className="media">
                  <div className="thumb float-left">
                    <a href="#">
                      <img className=" rounded-circle" src="assets/images/users/avatar-3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="media-body">                                                    
                    <p className="media-heading mb-0">Robert N. Carlile<i className="fa fa-circle text-danger mr-1 pull-right" /></p>
                    <small className="pull-right text-muted">10 min ago</small>
                    <small className="text-muted">India</small>                                                   
                  </div>
                </div>
              </li>
              <li className="p-3">
                <div className="media">
                  <div className="thumb float-left">
                    <a href="#">
                      <img className=" rounded-circle" src="assets/images/users/avatar-3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="media-body">                                                    
                    <p className="media-heading mb-0">Robert N. Carlile<i className="fa fa-circle text-danger mr-1 pull-right" /></p>
                    <small className="pull-right text-muted">10 min ago</small>
                    <small className="text-muted">India</small>                                                   
                  </div>
                </div>
              </li>
              <li className="p-3">
                <div className="media">
                  <div className="thumb float-left">
                    <a href="#">
                      <img className=" rounded-circle" src="assets/images/users/avatar-3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="media-body">                                                    
                    <p className="media-heading mb-0">Robert N. Carlile<i className="fa fa-circle text-danger mr-1 pull-right" /></p>
                    <small className="pull-right text-muted">10 min ago</small>
                    <small className="text-muted">India</small>                                                   
                  </div>
                </div>
              </li>
              <li className="p-3">
                <div className="media">
                  <div className="thumb float-left">
                    <a href="#">
                      <img className=" rounded-circle" src="assets/images/users/avatar-2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="media-body">
                    <p className="media-heading mb-0">Bobby M. Gray <i className="fa fa-circle text-success mr-1 pull-right" /></p>
                    <small className="pull-right text-muted">Now</small>
                    <small className="text-muted">Australia</small>
                  </div>
                </div>
              </li>
              <li className="p-3">
                <div className="media">
                  <div className="thumb float-left">
                    <a href="#">
                      <img className=" rounded-circle" src="assets/images/users/avatar-1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="media-body">
                    <p className="media-heading mb-0">Ruby T. Curd <i className="fa fa-circle text-danger mr-1 pull-right" /></p>
                    <small className="pull-right text-muted">36 min ago</small>
                    <small className="text-muted">New Zealand</small>
                  </div>
                </div>
              </li>
              <li className="p-3">
                <div className="media">
                  <div className="thumb float-left">
                    <a href="#">
                      <img className=" rounded-circle" src="assets/images/users/avatar-6.jpg" alt="" />
                    </a>
                  </div>
                  <div className="media-body">
                    <p className="media-heading mb-0">Robert N. Carlile <i className="fa fa-circle text-success mr-1 pull-right" /></p>
                    <small className="pull-right text-muted">Now</small>
                    <small className="text-muted">India</small>
                  </div>
                </div>
              </li>
              <li className="p-3">
                <div className="media">
                  <div className="thumb float-left">
                    <a href="#">
                      <img className=" rounded-circle" src="assets/images/users/avatar-4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="media-body">
                    <p className="media-heading mb-0">Bobby M. Gray<i className="fa fa-circle text-danger mr-1 pull-right" /></p>
                    <small className="pull-right text-muted">58 min ago</small>
                    <small className="text-muted">Australia</small>
                  </div>
                </div>
              </li>
            </ul>                                    
          </div>                                
        </div>
      </div>
    </div>
    <Footer />
  </div> {/* end container */}
</div>



</div>
        )
    }
}


export default Dashboard;