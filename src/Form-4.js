import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Button from '@material-ui/core/Button';


const initialState = {
  _id: "",
     Address_line1:"",
      Region_state:"",
      Address_Line2:"",
      Postal_Code:"",
      Country:"",
      Town_City:"",
      Telephone:"",
      Uae_Address_line1:"",
      Uae_Region_state:"",
      Uae_Address_Line2:"",
      Uae_Postal_Code:"",
      Uae_Country:"",
      Uae_Telephone:"",
      Uae_Town_City:"",

      Address_line1Error:"",
      Region_stateError:"",
      Address_Line2Error:"",
      Postal_CodeError:"",
      CountryError:"",
      Town_CityError:"",
      TelephoneError:"",
      Uae_Address_line1Error:"",
      Uae_Region_stateError:"",
      Uae_Address_Line2Error:"",
      Uae_Postal_CodeError:"",
      Uae_CountryError:"",
      Uae_TelephoneError:"",
      Uae_Town_CityError:""
}

class Form4 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialState,
      Address_line1:this.props.formData4.Address_line1,
      Region_state:this.props.formData4.Region_state,
      Address_Line2:this.props.formData4.Address_Line2,
      Postal_Code:this.props.formData4.Postal_Code,
      Country:this.props.formData4.Country,
      Town_City:this.props.formData4.Town_City,
      Telephone:this.props.formData4.Telephone,
      Uae_Address_line1:this.props.formData4.Uae_Address_line1,
      Uae_Region_state:this.props.formData4.Uae_Region_state,
      Uae_Address_Line2:this.props.formData4.Uae_Address_Line2,
      Uae_Postal_Code:this.props.formData4.Uae_Postal_Code,
      Uae_Country:this.props.formData4.Uae_Country,
      Uae_Telephone:this.props.formData4.Uae_Telephone,
      Uae_Town_City:this.props.formData4.Uae_Town_City

    }

  }
  formChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };

  formSave = event => {
    event.preventDefault();
   
    const isValid = this.validate();
    if (isValid) {
      // console.log(this.state);
      this.setState(initialState);
      this.props.nextStep();
     
    }

    let data4 = {
      Address_line1:this.state.Address_line1,
      Region_state:this.state.Region_state,
      Address_Line2:this.state.Address_Line2,
      Postal_Code:this.state.Postal_Code,
      Country:this.state.Country,
      Town_City:this.state.Town_City,
      Telephone:this.state.Telephone,
      Uae_Address_line1:this.state.Uae_Address_line1,
      Uae_Region_state:this.state.Uae_Region_state,
      Uae_Address_Line2:this.state.Uae_Address_Line2,
      Uae_Postal_Code:this.state.Uae_Postal_Code,
      Uae_Country:this.state.Uae_Country,
      Uae_Telephone:this.state.Uae_Telephone,
      Uae_Town_City:this.state.Uae_Town_City
    }

    // console.log(this.props.name)
    // this.props.myData("data")

    this.props.myData4(data4);
  }

  validate = () => {

   let Address_line1Error="";
   let Region_stateError="";
   let Address_Line2Error="";
   let Postal_CodeError="";
   let CountryError="";
   let Town_CityError="";
   let TelephoneError="";
   let Uae_Address_line1Error="";
   let Uae_Region_stateError="";
   let Uae_Address_Line2Error="";
   let Uae_Postal_CodeError="";
   let Uae_CountryError="";
   let Uae_TelephoneError="";
   let Uae_Town_CityError=""

    if (!this.state.Address_line1) {
      Address_line1Error = " * This Field is Required "
    }

    if (!this.state.Region_state) {
      Region_stateError = " * This Field is Required "
    }

    if (!this.state.Address_Line2) {
      Address_Line2Error = " * This Field is Required "
    }

    if (!this.state.Postal_Code) {
      Postal_CodeError = " * This Field is Required "
    }
    if (!this.state.Country) {
      CountryError = " * This Field is Required ";
    }
    if (!this.state.Town_City) {
      Town_CityError = " * This Field is Required "
    }

    if (!this.state.Telephone) {
      TelephoneError = " * This Field is Required "
    }

    if (!this.state.Uae_Address_line1) {
      Uae_Address_line1Error = " * This Field is Required "
    }
    if (!this.state.Uae_Region_state) {
      Uae_Region_stateError = " * This Field is Required ";
    }
    if (!this.state.Uae_Address_Line2) {
      Uae_Address_Line2Error = " * This Field is Required "
    }
    if (!this.state.Uae_Postal_Code) {
      Uae_Postal_CodeError = " * This Field is Required ";
    }
    if (!this.state.Uae_Country) {
      Uae_CountryError = " * This Field is Required "
    }

    if (!this.state.Uae_Telephone) {
      Uae_TelephoneError = " * This Field is Required "
    }

    if (!this.state.Uae_Town_City) {
      Uae_Town_CityError = " * This Field is Required "
    }
   
    if (Address_line1Error || Region_stateError || Address_Line2Error || Postal_CodeError || CountryError
      || Town_CityError || TelephoneError || Uae_Address_line1Error || Uae_Region_stateError || Uae_Address_Line2Error || Uae_Postal_CodeError
      || Uae_CountryError || Uae_TelephoneError || Uae_Town_CityError 
    ) {
      this.setState({
        Address_line1Error, Region_stateError, Address_Line2Error, Postal_CodeError, CountryError,
        Town_CityError, TelephoneError, Uae_Address_line1Error, Uae_Region_stateError, Uae_Address_Line2Error, Uae_Postal_CodeError,
        Uae_CountryError, Uae_TelephoneError, Uae_Town_CityError
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
                  <h4 style={{ textAlign: 'left' }}>HOME COUNTRY</h4> <br />
                  <div className="row">
                    <div className="col-md-4">
                      <div className="p-20">
                        <form>
                          <div className="form-group">
                            <label className="float-left">Address Line1<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Address Line1" onChange={this.formChange}
                              value={this.state.Address_line1}
                              name="Address_line1" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Address_line1Error}</div>
                          </div>
                          <div className="form-group">
                            <label className="float-left"> Address Line2<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Address Line2" onChange={this.formChange}
                              value={this.state.Address_Line2}
                              name="Address_Line2" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Address_Line2Error}</div>
                          </div>
                          <div className="form-group">
                            <label className="float-left">Town/City<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Town/City" onChange={this.formChange}
                              value={this.state.Town_City}
                              name="Town_City" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Town_CityError}</div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-20">
                        <form>
                          <div className="form-group ">
                            <label className="float-left">Region/State<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Region/State" onChange={this.formChange}
                              value={this.state.Region_state}
                              name="Region_state" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Region_stateError}</div>
                          </div>
                          <div className="form-group ">
                            <label className="float-left">Postal Code<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Postal Code" onChange={this.formChange}
                              value={this.state.Postal_Code}
                              name="Postal_Code" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Postal_CodeError}</div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-20">
                        <form>
                          <div className="form-group m-b-0">
                            <label className="float-left">Telephone Number<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Telephone Number" onChange={this.formChange}
                              value={this.state.Telephone}
                              name="Telephone" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.TelephoneError}</div>
                          </div>
                          <div className="form-group">
                            <label className="float-left">Country<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Country" onChange={this.formChange}
                              value={this.state.Country}
                              name="Country" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.CountryError}</div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* end col */}
          </div> {/* end row */}
          <div className="row">
            <div className="col-12">
              <div className="card m-b-30">
                <div className="card-body">
                  <h4 style={{ textAlign: 'left' }}>UAE</h4> <br />
                  <div className="row">
                    <div className="col-md-4">
                      <div className="p-20">
                        <form>
                          <div className="form-group">
                            <label className="float-left">Address Line1<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Address Line1" onChange={this.formChange}
                              value={this.state.Uae_Address_line1}
                              name="Uae_Address_line1" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Uae_Address_line1Error}</div>
                          </div>
                          <div className="form-group">
                            <label className="float-left">Address Line2<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Address Line2" onChange={this.formChange}
                              value={this.state.Uae_Address_Line2}
                              name="Uae_Address_Line2" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Uae_Address_Line2Error}</div>
                          </div>
                          <div className="form-group">
                            <label className="float-left">Town/City<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Town/City" onChange={this.formChange}
                              value={this.state.Uae_Town_City}
                              name="Uae_Town_City" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Uae_Town_CityError}</div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-20">
                        <form>
                          <div className="form-group ">
                            <label className="float-left">Region/State<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Region/State" onChange={this.formChange}
                              value={this.state.Uae_Region_state}
                              name="Uae_Region_state" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Uae_Region_stateError}</div>
                          </div>
                          <div className="form-group ">
                            <label className="float-left">Postal Code<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Postal Code" onChange={this.formChange}
                              value={this.state.Uae_Postal_Code}
                              name="Uae_Postal_Code" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Uae_Postal_CodeError}</div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-20">
                        <form>
                          <div className="form-group m-b-0">
                            <label className="float-left">Telephone Number<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Telephone Number" onChange={this.formChange}
                              value={this.state.Uae_Telephone}
                              name="Uae_Telephone" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Uae_TelephoneError}</div>
                          </div>
                          <div className="form-group">
                            <label className="float-left">Country<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Country" onChange={this.formChange}
                              value={this.state.Uae_Country}
                              name="Uae_Country" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Uae_CountryError}</div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
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
                  {/* <div style={{ marginLeft: '900px' }}>
                    <a href="Form-4" className="btn btn-primary">« Previous</a>
                    <a href="Form-5" className="btn btn-primary">Next »</a>
                  </div> */}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>



        <Footer />
      </div>


    )
  }
}


export default Form4;