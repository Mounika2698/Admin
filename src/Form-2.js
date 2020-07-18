import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Button from '@material-ui/core/Button';




const initialState = {
  _id: "",
  Issuing_country:"",
  Issued_by:"",
  passport_expiry_date:"",
  Passport_number:"",
  Passport_issue_date:"",
  Visa_type:"",
  Visa_number:"",
  Visa_expiry_date:"",
  Current_sponsor:"",
  Visa_issue_date:"",
  Driving_license:"",
  Issue_date:"",
  Vehicle_type:"",
  Expiry_date:"",
  Issuing_countryError:"",
  Issued_byError:"",
  passport_expiry_dateError:"",
  Passport_numberError:"",
  Passport_issue_dateError:"",
  Visa_typeError:"",
  Visa_numberError:"",
  Visa_expiry_dateError:"",
  Current_sponsorError:"",
  Visa_issue_dateError:"",
  Driving_licenseError:"",
  Issue_dateError:"",
  Vehicle_typeError:"",
  Expiry_dateError:""
}

class Form2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialState,
      Issuing_country:this.props.formData2.Issuing_country,
      Issued_by: this.props.formData2.Issued_by,
      passport_expiry_date: this.props.formData2.passport_expiry_date,
      Passport_number: this.props.formData2.Passport_number,
      Passport_issue_date: this.props.formData2.Passport_issue_date,
      Visa_type: this.props.formData2.Visa_type,
      Visa_number: this.props.formData2.Visa_number,
      Visa_expiry_date: this.props.formData2.Visa_expiry_date,
      Current_sponsor: this.props.formData2.Current_sponsor,
      Visa_issue_date: this.props.formData2.Visa_issue_date
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
      this.props.nextStep();
    const isValid = this.validate();
     if(isValid) {
 
  // console.log(this.state);
    this.setState(initialState);
   
     }

    // console.log(this.props.name)

    let data2 = {
      Issuing_country: this.state.Issuing_country,
      Issued_by: this.state.Issued_by,
      passport_expiry_date: this.state.passport_expiry_date,
      Passport_number: this.state.Passport_number,
      Passport_issue_date: this.state.Passport_issue_date,
      Visa_type: this.state.Visa_type,
      Visa_number: this.state.Visa_number,
      Visa_expiry_date: this.state.Visa_expiry_date,
      Current_sponsor: this.state.Current_sponsor,
      Visa_issue_date: this.state.Visa_issue_date
    }

    // console.log(this.props.name)
    // this.props.myData("data")

    this.props.myData2(data2);
  }

  validate = () => {

  let Issuing_countryError="";
   let Issued_byError="";
   let passport_expiry_dateError ="";
   let Passport_numberError ="";
  let Passport_issue_dateError ="";
   let Visa_typeError ="";
  let Visa_numberError="";
  let Visa_expiry_dateError ="";
   let Current_sponsorError="";
  let Visa_issue_dateError="";
  let Driving_licenseError="";
  let Issue_dateError="";
   let Vehicle_typeError="";
   let Expiry_dateError=""

     if (!this.state.Issuing_country) {
          Issuing_countryError = " * This Field is Required "
        }
    
        if (!this.state.Issued_by) {
          Issued_byError = " * This Field is Required "
        }
    
        if (!this.state.passport_expiry_date) {
          passport_expiry_dateError = " * This Field is Required "
        }
     
        if (!this.state.Passport_number) {
          Passport_numberError = " * This Field is Required "
        }
        if (!this.state.Passport_issue_date) {
          Passport_issue_dateError = " * This Field is Required ";
        }
        if (!this.state.Visa_type) {
          Visa_typeError = " * This Field is Required "
        }
    
        if (!this.state.Visa_number) {
          Visa_numberError = " * This Field is Required "
        }
     
        if (!this.state.Visa_expiry_date) {
          Visa_expiry_dateError = " * This Field is Required "
        }
        if (!this.state.Current_sponsor) {
          Current_sponsorError = " * This Field is Required ";
        }
        if (!this.state.Vehicle_type) {
          Vehicle_typeError = " * This Field is Required "
        }
        if (!this.state.Visa_issue_date) {
          Visa_issue_dateError = " * This Field is Required ";
        }
        if (!this.state.Driving_license) {
          Driving_licenseError = " * This Field is Required "
        }
    
        if (!this.state.Issue_date) {
          Issue_dateError = " * This Field is Required "
        }
     
        if (!this.state.Expiry_date) {
          Expiry_dateError = " * This Field is Required "
        }
       
        if (Issuing_countryError || Issued_byError || passport_expiry_dateError || Passport_numberError || Passport_issue_dateError 
          || Visa_typeError || Visa_numberError || Visa_expiry_dateError || Current_sponsorError || Visa_issue_dateError ||Driving_licenseError
          ||Issue_dateError || Vehicle_typeError || Expiry_dateError){
          this.setState({ Issuing_countryError, Issued_byError, passport_expiry_dateError, Passport_numberError, Passport_issue_dateError,
            Visa_typeError,Visa_numberError,Visa_expiry_dateError,Current_sponsorError,Visa_issue_dateError,Driving_licenseError,
            Issue_dateError,Vehicle_typeError,Expiry_dateError});
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
                  <h4 style={{ textAlign: 'left' }}>PASSPORT </h4>
                  <br />
                  <div className="row">
                    <form action="#">
                      <div className="col-md-4">
                        <div className="p-20">

                          <div className="form-group">
                            <label className="float-left">Issuing Country<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Issuing Country"
                              onChange={this.formChange}
                              value={this.state.Issuing_country}
                              name="Issuing_country"
                              className="form-control" />
                              <div style={{color:"red"}}>{this.state.Issuing_countryError}</div>
                          </div>
                          <div className="form-group">
                            <label className="float-left">Passport Number<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Passport Number"
                              onChange={this.formChange}
                              value={this.state.Passport_number}
                              name="Passport_number"
                              className="form-control" />
                              <div style={{color:"red"}}>{this.state.Passport_numberError}</div>
                          </div>

                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="p-20">

                          <div className="form-group ">
                            <label className="float-left">Issued By<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Issued By"
                              onChange={this.formChange}
                              value={this.state.Issued_by}
                              name="Issued_by"
                              className="form-control" />
                              <div style={{color:"red"}}>{this.state.Issued_byError}</div>
                          </div>
                          <div className="form-group">
                            <label className="float-left">Passport Issue Date<span style={star}><b>*</b></span></label>
                            <input type="text" className="form-control"
                              onChange={this.formChange}
                              value={this.state.Passport_issue_date}
                              name="Passport_issue_date"
                              placeholder="mm/dd/yyyy" />
                           <div style={{color:"red"}}>{this.state.Passport_issue_dateError}</div>
                          </div>

                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="p-20">

                          <div className="form-group m-b-0">
                            <label className="float-left">Passport Expiry Date<span style={star}><b>*</b></span></label>
                            <input type="text" className="form-control"
                              onChange={this.formChange}
                              value={this.state.passport_expiry_date}
                              name="passport_expiry_date"
                              placeholder="mm/dd/yyyy" />
                              <div style={{color:"red"}}>{this.state.passport_expiry_dateError}</div>

                          </div>

                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* uae row */}
          <div className="row">
            <div className="col-12">
              <div className="card m-b-30">
                <div className="card-body">
                  <h4 style={{ textAlign: 'left' }}>UAE VISA </h4>
                  <br />
                  <div className="row">
                    <div className="col-md-4">
                      <div className="p-20">

                        <div className="form-group">
                          <label className="float-left">Visa Type<span style={star}><b>*</b></span></label>
                          <input type="text" placeholder="Visa Type"
                            onChange={this.formChange}
                            value={this.state.Visa_type}
                            name="Visa_type"
                            className="form-control" />
                             <div style={{color:"red"}}>{this.state.Visa_typeError}</div>
                        </div>
                        <div className="form-group">
                          <label className="float-left">Current Sponsor<span style={star}><b>*</b></span></label>
                          <input type="text" placeholder="Current Sponsor"
                            onChange={this.formChange}
                            value={this.state.Current_sponsor}
                            name="Current_sponsor"
                            className="form-control" />
                            <div style={{color:"red"}}>{this.state.Current_sponsorError}</div>
                        </div>

                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-20">
                        <div className="form-group">
                          <label className="float-left">Visa Number<span style={star}><b>*</b></span></label>
                          <input type="text" placeholder="Visa Number"
                            onChange={this.formChange}
                            value={this.state.Visa_number}
                            name="Visa_number"
                            className="form-control" />
                            <div style={{color:"red"}}>{this.state.Visa_numberError}</div>
                        </div>
                        <div className="form-group">
                          <label className="float-left">Visa Issue Date<span style={star}><b>*</b></span></label>
                          <input type="text" className="form-control"
                            onChange={this.formChange}
                            value={this.state.Visa_issue_date}
                            name="Visa_issue_date"
                            placeholder="mm/dd/yyyy" />
                            <div style={{color:"red"}}>{this.state.Visa_issue_dateError}</div>
                        
                        </div>

                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-20">

                        <div className="form-group">
                          <label className="float-left">Visa Expiry Date<span style={star}><b>*</b></span></label>
                          <input type="text" className="form-control"
                            onChange={this.formChange}
                            value={this.state.Visa_expiry_date}
                            name="Visa_expiry_date"
                            placeholder="mm/dd/yyyy" />
                            <div style={{color:"red"}}>{this.state.Visa_expiry_dateError}</div>
                        
                        </div>
                        <br />
                        <br />
                        <br />

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
              </div>
            </div> {/* end col */}
          </div> {/* end row */}
        </div> {/* end container */}

        {/* end wrapper */}

        <Footer />
      </div>
</div>

    )
  }
}


export default Form2;