import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Button from '@material-ui/core/Button';


const initialState = {
  _id: "",
      Company_name:"",
      Industry:"",
      Designation:"",
      Reason_of_leaving:"",
      Start_date:"",
      End_date:"",
      Company_name2:"",
      Industry2:"",
      Reason_of_leaving2:"",
      Designation2:"",
      Start_date2:"",
      End_date2:"",

      Company_nameError:"",
      IndustryError:"",
      DesignationError:"",
      Reason_of_leavingError:"",
      Start_dateError:"",
      End_dateError:"",
      Company_name2Error:"",
      Industry2Error:"",
      Reason_of_leaving2Error:"",
      Designation2Error:"",
      Start_date2Error:"",
      End_date2Error:""
}


class Form6 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialState,
      Company_name: this.props.formData6.Company_name,
      Industry: this.props.formData6.Industry,
      Designation: this.props.formData6.Designation,
      Reason_of_leaving: this.props.formData6.Reason_of_leaving,
      Start_date: this.props.formData6.Start_date,
      End_date: this.props.formData6.End_date,
      Company_name2: this.props.formData6.Company_name2,
      Industry2: this.props.formData6.Industry2,
      Reason_of_leaving2: this.props.formData6.Reason_of_leaving2,
      Designation2: this.props.formData6.Designation2,
      Start_date2: this.props.formData6.Start_date2,
      End_date2: this.props.formData6.End_date2
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
    let data6 = {
      Company_name: this.state.Company_name,
      Industry: this.state.Industry,
      Designation: this.state.Designation,
      Reason_of_leaving: this.state.Reason_of_leaving,
      Start_date: this.state.Start_date,
      End_date: this.state.End_date,
      Company_name2: this.state.Company_name2,
      Industry2: this.state.Industry2,
      Reason_of_leaving2: this.state.Reason_of_leaving2,
      Designation2: this.state.Designation2,
      Start_date2: this.state.Start_date2,
      End_date2: this.state.End_date2

    }

    // console.log(this.props.name)
    // this.props.myData("data")

    this.props.myData6(data6);

  }


  validate = () => {

    let Company_nameError="";
    let IndustryError="";
    let DesignationError="";
    let Reason_of_leavingError="";
    let Start_dateError="";
    let End_dateError="";
    let Company_name2Error="";
    let Industry2Error="";
    let Reason_of_leaving2Error="";
    let Designation2Error="";
    let Start_date2Error="";
    let End_date2Error=""

     if (!this.state.Company_name) {
      Company_nameError = " * This Field is Required "
     }
 
     if (!this.state.Industry) {
      IndustryError = " * This Field is Required "
     }
 
     if (!this.state.Designation) {
      DesignationError = " * This Field is Required "
     }
 
     if (!this.state.Reason_of_leaving) {
      Reason_of_leavingError = " * This Field is Required "
     }
     if (!this.state.Start_date) {
      Start_dateError = " * This Field is Required ";
     }
     if (!this.state.End_date) {
      End_dateError = " * This Field is Required "
     }
 
     if (!this.state.Company_name2) {
      Company_name2Error = " * This Field is Required "
     }
 
     if (!this.state.Industry2) {
      Industry2Error = " * This Field is Required "
     }
     if (!this.state.Reason_of_leaving2) {
      Reason_of_leaving2Error = " * This Field is Required ";
     }
     if (!this.state.Designation2) {
      Designation2Error = " * This Field is Required "
     }
     if (!this.state.Start_date2) {
      Start_date2Error = " * This Field is Required ";
     }
     if (!this.state.End_date2) {
      End_date2Error = " * This Field is Required "
     }

    
     if (Company_nameError || IndustryError || DesignationError || Reason_of_leavingError || Start_dateError
       || End_dateError || Company_name2Error || Industry2Error || Reason_of_leaving2Error || Designation2Error || Start_date2Error
       || End_date2Error 
     ) {
       this.setState({
        Company_nameError, IndustryError, DesignationError, Reason_of_leavingError, Start_dateError,
        End_dateError, Company_name2Error, Industry2Error, Reason_of_leaving2Error, Designation2Error, Start_date2Error,
        End_date2Error
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
                  <h4>WORK EXPERIENCE </h4>
                  <br />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="p-20">
                        <form action="#">
                          <div className="form-group">
                            <label className="float-left" >Company Name<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Company Name " onChange={this.formChange}
                              value={this.state.Company_name} name="Company_name" className="form-control" />
                               <div style={{ color: "red" }}>{this.state.Company_nameError}</div>
                          </div>

                          <div className="form-group">
                            <label className="float-left">Industry<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Industry" onChange={this.formChange}
                              value={this.state.Industry} name="Industry" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.IndustryError}</div>
                          </div>
                          <div className="form-group">
                            <label className="float-left">Designation<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Designation" onChange={this.formChange}
                              value={this.state.Designation} name="Designation" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.DesignationError}</div>
                          </div>
                          <div className="form-group ">
                            <label className="float-left">Reason of Leaving
                            (resignation/
                            termination/ other -
                        specify)<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Reason of Leaving" onChange={this.formChange}
                              value={this.state.Reason_of_leaving} name="Reason_of_leaving" className="form-control" />
                         <div style={{ color: "red" }}>{this.state.Reason_of_leavingError}</div>
                          </div>
                          <div className="form-group m-b-0">
                            <label className="float-left">Duration<span style={star}><b>*</b></span></label>
                            <div className="input-daterange input-group" id="date-range">
                              <input type="text" className="form-control col-6" onChange={this.formChange}
                                value={this.state.Start_date} name="Start_date" placeholder="Start Date" />
                                
                              <input type="text" className="form-control col-6" onChange={this.formChange}
                                value={this.state.End_date} name="End_date" placeholder="End Date" />
                                <div style={{ color: "red" }}>{this.state.End_dateError}</div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-20">
                        <form action="#">
                          <div className="form-group">
                            <label ><br /></label>
                            <input type="text" placeholder="Company Name" onChange={this.formChange}
                              value={this.state.Company_name2} name="Company_name2" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Company_name2Error}</div>
                          </div>
                          <div className="form-group">
                            <label><br /></label>
                            <input type="text" placeholder="Industry" onChange={this.formChange}
                              value={this.state.Industry2} name="Industry2" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Industry2Error}</div>
                          </div>
                          <div className="form-group">
                            <label><br /></label>
                            <input type="text" placeholder="Designation" onChange={this.formChange}
                              value={this.state.Designation2} name="Designation2" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Designation2Error}</div>
                          </div>
                          <div className="form-group">
                            <label><br /></label>
                            <input type="text" placeholder="Reason of Leaving" onChange={this.formChange}
                              value={this.state.Reason_of_leaving2} name="Reason_of_leaving2" className="form-control" />
                        <div style={{ color: "red" }}>{this.state.Reason_of_leaving2Error}</div>
                          </div>
                          <div className="form-group m-b-0">
                            <label><br /></label>
                            <div className="input-daterange input-group" id="datepicker">
                              <input type="text" className="form-control col-6" onChange={this.formChange}
                                value={this.state.Start_date2} name="Start_date2" placeholder="Start Date" />
                                
                              <input type="text" className="form-control  col-6" onChange={this.formChange}
                                value={this.state.End_date2} name="End_date2" placeholder="End Date" />
                                <div style={{ color: "red" }}>{this.state.End_date2Error}</div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div> {/* end col */}
                  </div> {/* end row */}
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
                </div>
              </div>
            </div> {/* end col */}
          </div> {/* end row */}
          {/* end container */}
        </div>
        {/* end wrapper */}


        <Footer />
      </div>


    )
  }
}


export default Form6;