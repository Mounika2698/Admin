import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Button from '@material-ui/core/Button'

const initialState = {
         _id: "",
         First_name:"",
        Middle_name:"",
        Gender:"",
        Nationality:"",
        Marital_status:"",
        Religion:"",
        Last_name:"",
        Dob:"",
        Blood_group:"",
        Mother_name:"",
        Place_of_Birth:"",
        Home_language:"",
        Grandfather_name:"",
        Country_of_birth:"",
        Other_language:"",
        National_identifier:"",
        First_nameError:"",
        Middle_nameError:"",
        GenderError:"",
        NationalityError:"",
        Marital_statusError:"",
        ReligionError:"",
        Last_nameError:"",
        DobError:"",
        Blood_groupError:"",
        Mother_nameError:"",
        Place_of_BirthError:"",
        Home_languageError:"",
        Grandfather_nameError:"",
        Country_of_birthError:"",
        Other_languageError:"",
        National_identifierError:"",
   
}

class Form1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialState,
      First_name:this.props.formData.First_name,
      Middle_name:this.props.formData.Middle_name,
      Gender:this.props.formData.Gender,
      Nationality:this.props.formData.Nationality,
      Marital_status:this.props.formData.Marital_status,
      Religion:this.props.formData.Religion,
      Last_name:this.props.formData.Last_name,
      Dob:this.props.formData.Dob,
      Blood_group:this.props.formData.Blood_group,
      Mother_name:this.props.formData.Mother_name,
      Place_of_Birth:this.props.formData.Place_of_Birth,
      Home_language:this.props.formData.Home_language,
      Grandfather_name:this.props.formData.Grandfather_name,
      Country_of_birth:this.props.formData.Country_of_birth,
      Other_language:this.props.formData.Other_language,
      National_identifier:this.props.formData.National_identifier,

    }

  }
  formChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  formSave = event => {
    event.preventDefault();
  
    const isValid = this.validate();
     if(isValid) {
  // console.log(this.state);
    this.setState(initialState);
    this.props.nextStep();
   
}
    
    // console.log(this.props.name)
    
    let data = {
      First_name:this.state.First_name,
      Middle_name:this.state.Middle_name,
      Gender:this.state.Gender,
      Nationality:this.state.Nationality,
      Marital_status:this.state.Marital_status,
      Religion:this.state.Religion,
      Last_name:this.state.Last_name,
      Dob:this.state.Dob,
      Blood_group:this.state.Blood_group,
      Home_language:this.state.Home_language,
      Mother_name:this.state.Mother_name,
      Place_of_Birth:this.state.Place_of_Birth,
      Grandfather_name:this.state.Grandfather_name,
      Country_of_birth:this.state.Country_of_birth,
      Other_language:this.state.Other_language,
      National_identifier:this.state.National_identifier
    }

    // console.log(this.props.name)
    // this.props.myData("data")

    this.props.myData(data);
  }
validate = () => {

  let First_nameError ="";
   let Middle_nameError = "";
   let  GenderError ="";
   let  NationalityError ="";
   let  Marital_statusError = "";
   let  ReligionError ="";
   let Last_nameError ="";
   let DobError ="";
   let Blood_groupError ="";
   let Mother_nameError ="";
   let Place_of_BirthError ="";
   let Home_languageError ="";
   let Grandfather_nameError ="";
   let Country_of_birthError ="";
   let Other_languageError ="";
   let National_identifierError ="";

   if (!this.state.First_name) {
        First_nameError = " * This Field is Required "
      }
  
      if (!this.state.Middle_name) {
        Middle_nameError = " * This Field is Required "
      }
  
      if (!this.state.Gender) {
        GenderError = " * This Field is Required "
      }
   
      if (!this.state.Nationality) {
        NationalityError = " * This Field is Required "
      }
      if (!this.state.Marital_status) {
        Marital_statusError = " * This Field is Required ";
      }
      if (!this.state.Religion) {
        ReligionError = " * This Field is Required "
      }
  
      if (!this.state.Last_name) {
        Last_nameError = " * This Field is Required "
      }
   
      if (!this.state.Dob) {
        DobError = " * This Field is Required "
      }
      if (!this.state.Blood_group) {
        Blood_groupError = " * This Field is Required ";
      }
      if (!this.state.Mother_name) {
        Mother_nameError = " * This Field is Required "
      }
      if (!this.state.Place_of_Birth) {
        Place_of_BirthError = " * This Field is Required ";
      }
      if (!this.state.Home_language) {
        Home_languageError = " * This Field is Required "
      }
  
      if (!this.state.Grandfather_name) {
        Grandfather_nameError = " * This Field is Required "
      }
   
      if (!this.state.Country_of_birth) {
        Country_of_birthError = " * This Field is Required "
      }
      if (!this.state.Other_language) {
        Other_languageError = " * This Field is Required ";
      }
      if (!this.state.National_identifier) {
        National_identifierError = "* This Field is Required ";
      }
  
      if (First_nameError || Middle_nameError || GenderError || NationalityError || Marital_statusError 
        || ReligionError || Last_nameError || DobError || Blood_groupError || Mother_nameError ||Place_of_BirthError
        ||Home_languageError || Grandfather_nameError || Country_of_birthError || Other_languageError || National_identifierError
        ) {
        this.setState({ First_nameError, Middle_nameError, GenderError, NationalityError, Marital_statusError,
          ReligionError,Last_nameError,DobError,Blood_groupError,Mother_nameError,Place_of_BirthError,
          Home_languageError,Grandfather_nameError,Country_of_birthError,Other_languageError,National_identifierError});
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
        <div className="container-fluid">
          <Header />
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
                  <h4 style={{ textAlign: 'left' }} > PERSONAL PARTICULARS</h4>
                  <br />
                  <div>
                    <div className="row">
                      <form autoComplete="off">
                        <div className="col-md-4">
                          <div className="p-20">
                            <div className="form-group">
                              <label className="float-left" >First Name<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="First Name"
                                onChange={this.formChange}
                                value={this.state.First_name}
                                name="First_name" className="form-control" />
                                <div style={{color:"red"}}>{this.state.First_nameError}</div>
                            </div>
                            <div className="form-group">
                              <label className="float-left">Middle Name<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="Middle Name" onChange={this.formChange}
                                value={this.state.Middle_name}
                                name="Middle_name"
                                className="form-control" />
                                 <div style={{color:"red"}}>{this.state.Middle_nameError}</div>
                            </div>
                            <div className="form-group">
                              <label className="float-left">Family Name / Last Name<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="Family Name / Last Name" onChange={this.formChange}
                                value={this.state.Last_name}
                                name="Last_name" className="form-control" />
                                 <div style={{color:"red"}}>{this.state.Last_nameError}</div>
                            </div>
                            <div className="form-group">
                              <label className="float-left">Mother's Name<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="Mother's Name" onChange={this.formChange}
                                value={this.state.Mother_name}
                                name="Mother_name" className="form-control" />
                                 <div style={{color:"red"}}>{this.state.Mother_nameError}</div>
                            </div>
                            <div className="form-group m-b-0">
                              <label className="float-left">Grandfather's Name(UAE
                          Nationals)<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="Grandfather's Name" onChange={this.formChange}
                                value={this.state.Grandfather_name}
                                name="Grandfather_name" className="form-control" />
                                 <div style={{color:"red"}}>{this.state.Grandfather_nameError}</div>
                            </div>
                            <div className="form-group m-b-0">
                              <label className="float-left">National Identifier
                          (only for UAE)<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="Blood Group" onChange={this.formChange}
                                value={this.state.National_identifier}
                                name="National_identifier" className="form-control" />
                                 <div style={{color:"red"}}>{this.state.National_identifierError}</div>
                            </div>                           
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="p-20">
                            <div className="form-group">
                              <label className="float-left"> Gender<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="Gender" onChange={this.formChange}
                                value={this.state.Gender}
                                name="Gender" className="form-control" />
                                 <div style={{color:"red"}}>{this.state.GenderError}</div>
                            </div>
                            <div className="form-group">
                              <label className="float-left">Marital Status<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="Marital Status" onChange={this.formChange}
                                value={this.state.Marital_status}
                                name="Marital_status" className="form-control" />
                                 <div style={{color:"red"}}>{this.state.Marital_statusError}</div>
                            </div>
                            <div className="form-group">
                              <label className="float-left">Date of Birth<span style={star}><b>*</b></span></label>
                              <input type="text" className="form-control" placeholder="mm/dd/yyyy"
                                onChange={this.formChange}
                                value={this.state.Dob}
                                name="Dob" />
                                 <div style={{color:"red"}}>{this.state.DobError}</div>

                            </div>
                            <div className="form-group">
                              <label className="float-left">Place of Birth (Place, State)<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="Place of Birth" onChange={this.formChange}
                                value={this.state.Place_of_Birth}
                                name="Place_of_Birth" className="form-control" />
                                 <div style={{color:"red"}}>{this.state.Place_of_BirthError}</div>
                            </div>
                            <div className="form-group">
                              <label className="float-left">Country of Birth<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="Country of Birth" onChange={this.formChange}
                                value={this.state.Country_of_birth}
                                name="Country_of_birth" className="form-control" />
                                 <div style={{color:"red"}}>{this.state.Country_of_birthError}</div>
                            </div>

                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="p-20">

                            <div className="form-group">
                              <label className="float-left">Nationality<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="Nationality" onChange={this.formChange}
                                value={this.state.Nationality}
                                name="Nationality" className="form-control" />
                                 <div style={{color:"red"}}>{this.state.NationalityError}</div>
                            </div>
                            <div className="form-group">
                              <label className="float-left">Religion<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="Religion" onChange={this.formChange}
                                value={this.state.Religion}
                                name="Religion" className="form-control" />
                                 <div style={{color:"red"}}>{this.state.ReligionError}</div>
                            </div>
                            <div className="form-group">
                              <label className="float-left">Blood Group<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="Blood Group" onChange={this.formChange}
                                value={this.state.Blood_group}
                                name="Blood_group" className="form-control" />
                                 <div style={{color:"red"}}>{this.state.Blood_groupError}</div>
                            </div>
                            <div className="form-group ">
                              <label className="float-left">Home Language<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="Home Language" onChange={this.formChange}
                                value={this.state.Home_language}
                                name="Home_language" className="form-control" />
                                 <div style={{color:"red"}}>{this.state.Home_languageError}</div>
                            </div>
                            <div className="form-group">
                              <label className="float-left" >Other Language<span style={star}><b>*</b></span></label>
                              <input type="text" placeholder="Other Language" onChange={this.formChange}
                                value={this.state.Other_language}
                                name="Other_language" className="form-control" />
                                 <div style={{color:"red"}}>{this.state.Other_languageError}</div>
                            </div>

                            <br />
                            <br />
                            <div style={{ marginLeft: '100px' }}>
                              <Button
                                color="primary"
                                variant="contained"
                                onClick={this.formSave}
                              >Continue</Button>

                              {/* <a href="Dashboard" className="btn btn-primary">« Previous</a>
                            <a href="Form-2" className="btn btn-primary">Next »</a> */}
                            </div>
                            <br></br>
                          </div>
                        </div>
                      </form>
                      {/* end col */}
                    </div>

                  </div> {/* end row */}
                </div>
              </div>
            </div> {/* end col */}
          </div> {/* end row */}
        </div> {/* end container */}
        <Footer />
      </div>

    )
  }
}

export default Form1;

