import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Button from '@material-ui/core/Button';

const initialState = {
  _id: "",
  Qualification1:"",
  Qualification2:"",
  Qualification3:"",
  School1:"",
  School2:"",
  School3:"",
  Date1:"",
  Date2:"",
  Date3:"",

  Qualification1Error:"",
  Qualification2Error:"",
  Qualification3Error:"",
  School1Error:"",
  School2Error:"",
  School3Error:"",
  Date1Error:"",
  Date2Error:"",
  Date3Error:""
}


class Form5 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialState,
      Qualification1:this.props.formData5.Qualification1,
      Qualification2:this.props.formData5.Qualification2,
      Qualification3:this.props.formData5.Qualification3,
      School1:this.props.formData5.School1,
      School2:this.props.formData5.School2,
      School3:this.props.formData5.School3,
      Date1: this.props.formData5.Date1,
      Date2: this.props.formData5.Date2,
      Date3: this.props.formData5.Date3
    }
  }


  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };


  formChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  formSave = event => {
    event.preventDefault();
   
    const isValid = this.validate();
    if (isValid) {
      // console.log(this.state);
      this.setState(initialState);
      this.props.nextStep();
     
    }
    // console.log(this.props.name)
    let data5 = {
      Qualification1: this.state.Qualification1,
      Qualification2: this.state.Qualification2,
      Qualification3: this.state.Qualification3,
      School1: this.state.School1,
      School2: this.state.School2,
      School3: this.state.School3,
      Date1: this.state.Date1,
      Date2: this.state.Date2,
      Date3: this.state.Date3

    }

    // console.log(this.props.name)
    // this.props.myData("data")
    this.props.myData5(data5);

  }

  validate = () => {
   let Qualification1Error="";
   let Qualification2Error="";
   let Qualification3Error="";
   let School1Error="";
   let School2Error="";
   let School3Error="";
   let Date1Error="";
   let Date2Error="";
   let Date3Error=""
 
     if (!this.state.Qualification1) {
      Qualification1Error = " * This Field is Required "
     }
 
     if (!this.state.Qualification2) {
      Qualification2Error = " * This Field is Required "
     }
 
     if (!this.state.Qualification3) {
      Qualification3Error = " * This Field is Required "
     }
 
     if (!this.state.School1) {
      School1Error = " * This Field is Required "
     }
     if (!this.state.School2) {
      School2Error = " * This Field is Required ";
     }
     if (!this.state.School3) {
      School3Error = " * This Field is Required "
     }
 
     if (!this.state.Date1) {
      Date1Error = " * This Field is Required "
     }
 
     if (!this.state.Date2) {
      Date2Error = " * This Field is Required "
     }
     if (!this.state.Date3) {
      Date3Error = " * This Field is Required ";
     }
    
    
     if (Qualification1Error || Qualification2Error || Qualification3Error || School1Error || School2Error
       || School3Error || Date1Error || Date2Error || Date3Error 
     ) {
       this.setState({
        Qualification1Error, Qualification2Error, Qualification3Error, School1Error, School2Error,
        School3Error, Date1Error, Date2Error, Date3Error
       });
       return false;
     }
     return true;
 
   }
 
  render() {
    const star = {
      color:"red"
    }
    return (
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
                  <br />
                  <div className="row">
                    <div className="col-md-4">
                      <div className="p-20">
                        <form action="#">
                          <h5 style={{ textAlign: 'center' }}>QUALIFICATAION <br />
                      (Secondary/Diploma/
                      Degree)<span style={star}><b>*</b></span></h5>
                          <div className="form-group">
                            <input type="text" placeholder="Enter your Qualification" onChange={this.formChange}
                              value={this.state.Qualification1} name="Qualification1" className="form-control" />
                          </div>
                          <div style={{ color: "red" }}>{this.state.Qualification1Error}</div>
                          <div className="form-group">
                            <input type="text" placeholder="Enter your Qualification" onChange={this.formChange}
                              value={this.state.Qualification2} name="Qualification2" className="form-control" />
                          </div>
                          <div style={{ color: "red" }}>{this.state.Qualification2Error}</div>
                          <div className="form-group m-b-0">
                            <input type="text" placeholder="Enter your Qualification" onChange={this.formChange}
                              value={this.state.Qualification3} name="Qualification3" className="form-control" />
                          </div>
                          <div style={{ color: "red" }}>{this.state.Qualification3Error}</div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-20">
                        <form action="#">
                          <h5 style={{ textAlign: 'center' }}>SCHOOL/INSTITUTION/UNIVERSITY<span style={star}><b>*</b></span></h5>
                          <br />
                          <div className="form-group">
                            <input type="text" placeholder="School/Institution/University" onChange={this.formChange}
                              value={this.state.School1} name="School1" className="form-control" />
                                <div style={{ color: "red" }}>{this.state.School1Error}</div>
                          </div>
                          <div className="form-group">
                            <input type="text" placeholder="School/Institution/University" onChange={this.formChange}
                              value={this.state.School2} name="School2" className="form-control" />
                                <div style={{ color: "red" }}>{this.state.School2Error}</div>
                          </div>
                          <div className="form-group m-b-0">
                            <input type="text" placeholder="School/Institution/University" onChange={this.formChange}
                              value={this.state.School3} name="School3" className="form-control" />
                                <div style={{ color: "red" }}>{this.state.School3Error}</div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-20">
                        <form action="#">
                          <h5 style={{ textAlign: 'center' }}>DATE COMPLETED<span style={star}><b>*</b></span></h5>
                          <br />
                          <div className="form-group">
                            <input type="text" placeholder="dd-mm-yyyy" onChange={this.formChange}
                              value={this.state.Date1} name="Date1" className="form-control" />
                               <div style={{ color: "red" }}>{this.state.Date1Error}</div>
                          </div>
                          <div className="form-group">
                            <input type="text" placeholder="dd-mm-yyyy" onChange={this.formChange}
                              value={this.state.Date2} name="Date2" className="form-control" />
                               <div style={{ color: "red" }}>{this.state.Date2Error}</div>
                          </div>
                          <div className="form-group m-b-0">
                            <input type="text" placeholder="dd-mm-yyyy" onChange={this.formChange}
                              value={this.state.Date3} name="Date3" className="form-control" />
                               <div style={{ color: "red" }}>{this.state.Date3Error}</div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div style={{marginLeft:"900px"}}>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >Back</Button>

                  <Button
                    color="primary"
                    variant="contained"
                    onClick={this.formSave}
                  >Continue</Button>
                </div>
                <br></br>
              </div>
            </div> {/* end col */}
          </div> {/* end row */}
        </div> {/* end container */}

        {/* end wrapper */}

</div>
        <Footer />
      </div>


    )
  }
}


export default Form5;