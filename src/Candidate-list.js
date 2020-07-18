import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Footer from './Footer';


class Candidate extends Component{

  constructor(props) {
    super(props);
    this.state = {
      findData: this.props.sendData
    }
    console.log(this.state.findData)
    // console.log(this.state.userData)
  }

    render(){
        return(
<div className="wrapper">
    <Header />

  <div className="container-fluid">
    {/* Page-Title */}
    <div className="row">
      <div className="col-sm-12">
        <div className="page-title-box">
          <div className="btn-group pull-right">
          </div>
        </div>
      </div>
    </div>
    {/* end page title end breadcrumb */}
    <div className="row">
      <div className="col-12">
        <div className="card m-b-30">
          <div className="card-body">
            <h4>CANDIDATES LIST</h4>
            <br />
          
            <br /><table id="datatable-buttons" className="table table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>City</th>
                  <th>Degree</th>
                  <th>Applied Job</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td> <img className="rounded-circle" src="assets/images/users/avatar-3.jpg" width="50px" height="50px" style={{borderRadius: '30px'}} /></td>
        <td></td>
                  <td>Chennai</td>
                  <td>BE</td>
                  <td>
                    Front end Engineer
                  </td>
                </tr> 
                <tr>
                  <td>2</td>
                  <td> <img className="rounded-circle" src="assets/images/users/avatar-3.jpg" width="50px" height="50px" style={{borderRadius: '30px'}} /></td>
                  <td> William A. Johnson</td>
                  <td>Bnagalore</td>
                  <td>B.Tech</td>
                  <td>
                    Software Developer
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td> <img className="rounded-circle" src="assets/images/users/avatar-3.jpg" width="50px" height="50px" style={{borderRadius: '30px'}} /></td>
                  <td>Bobby M. Gray</td>
                  <td>Delhi</td>
                  <td>B.com</td>
                  <td>
                    Project Trainee
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td> <img className="rounded-circle" src="assets/images/users/avatar-3.jpg" width="50px" height="50px" style={{borderRadius: '30px'}} /></td>
                  <td>Robert N. Carlile</td>
                  <td>Hydrabad</td>
                  <td>M.com</td>
                  <td>
                    App Developer
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td> <img className="rounded-circle" src="assets/images/users/avatar-3.jpg" width="50px" height="50px" style={{borderRadius: '30px'}} /></td>
                  <td>Ruby T. Curd</td>
                  <td>Chennai</td>
                  <td>BE</td>
                  <td>
                    Software Developer
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td> <img className="rounded-circle" src="assets/images/users/avatar-3.jpg" width="50px" height="50px" style={{borderRadius: '30px'}} /></td>
                  <td>Ruby</td>
                  <td>Erode</td>
                  <td>B.Tech</td>
                  <td>
                    Front end Developer
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> {/* end col */}
    </div> {/* end row */}
  </div>{/* container fluid */}
 {/* Page content Wrapper */}
{/* content */}


  <Footer />
</div>


        )
    }
}


export default Candidate;