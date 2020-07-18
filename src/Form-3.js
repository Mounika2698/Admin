import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Button from '@material-ui/core/Button';

const initialState = {
  _id: "",
  Driving_license: "",
  Issue_date: "",
  Vehicle_type: "",
  Expiry_date: "",
  Name1: "",
  Age1: "",
  Relation1: "",
  Citizenship1: "",
  Name2: "",
  Age2: "",
  Relation2: "",
  Citizenship2: "",
  Name3: "",
  Age3: "",
  Relation3: "",
  Citizenship3: "",
  Name4: "",
  Age4: "",
  Relation4: "",
  Citizenship4: "",

  Driving_licenseError: "",
  Issue_dateError: "",
  Vehicle_typeError: "",
  Expiry_dateError: "",
  Name1Error: "",
  Age1Error: "",
  Relation1Error: "",
  Citizenship1Error: "",
  Name2Error: "",
  Age2Error: "",
  Relation2Error: "",
  Citizenship2Error: "",
  Name3Error: "",
  Age3Error: "",
  Relation3Error: "",
  Citizenship3Error: "",
  Name4Error: "",
  Age4Error: "",
  Relation4Error: "",
  Citizenship4Error: ""

}

class Form3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialState,
      Driving_license: this.props.formData3.Driving_license,
      Issue_date: this.props.formData3.Issue_date,
      Vehicle_type: this.props.formData3.Vehicle_type,
      Expiry_date: this.props.formData3.Expiry_date,
      Name1: this.props.formData3.Name1,
      Age1: this.props.formData3.Age1,
      Relation1: this.props.formData3.Relation1,
      Citizenship1: this.props.formData3.Citizenship1,
      Name2: this.props.formData3.Name2,
      Age2: this.props.formData3.Age2,
      Relation2: this.props.formData3.Relation2,
      Citizenship2: this.props.formData3.Citizenship2,
      Name3: this.props.formData3.Name3,
      Age3: this.props.formData3.Age3,
      Relation3: this.props.formData3.Relation3,
      Citizenship3: this.props.formData3.Citizenship3,
      Name4: this.props.formData3.Name4,
      Age4: this.props.formData3.Age4,
      Relation4: this.props.formData3.Relation4,
      Citizenship4: this.props.formData3.Citizenship4
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

    let data3 = {
      Driving_license: this.state.Driving_license,
      Issue_date: this.state.Issue_date,
      Vehicle_type: this.state.Vehicle_type,
      Expiry_date: this.state.Expiry_date,
      Name1: this.state.Name1,
      Age1: this.state.Age1,
      Relation1: this.state.Relation1,
      Citizenship1: this.state.Citizenship1,
      Name2: this.state.Name2,
      Age2: this.state.Age2,
      Relation2: this.state.Relation2,
      Citizenship2: this.state.Citizenship2,
      Name3: this.state.Name3,
      Age3: this.state.Age3,
      Relation3: this.state.Relation3,
      Citizenship3: this.state.Citizenship3,
      Name4: this.state.Name4,
      Age4: this.state.Age4,
      Relation4: this.state.Relation4,
      Citizenship4: this.state.Citizenship4
    }

    // console.log(this.props.name)
    // this.props.myData("data")
    // console.log(data3)

    this.props.myData3(data3);

  }


  validate = () => {

    let Driving_licenseError = "";
    let Issue_dateError = "";
    let Vehicle_typeError = "";
    let Expiry_dateError = "";
    let Name1Error = "";
    let Age1Error = "";
    let Relation1Error = "";
    let Citizenship1Error = "";
    let Name2Error = "";
    let Age2Error = "";
    let Relation2Error = "";
    let Citizenship2Error = "";
    let Name3Error = "";
    let Age3Error = "";
    let Relation3Error = "";
    let Citizenship3Error = "";
    let Name4Error = "";
    let Age4Error = "";
    let Relation4Error = "";
    let Citizenship4Error = ""

    if (!this.state.Driving_license) {
      Driving_licenseError = " * This Field is Required "
    }

    if (!this.state.Issue_date) {
      Issue_dateError = " * This Field is Required "
    }

    if (!this.state.Vehicle_type) {
      Vehicle_typeError = " * This Field is Required "
    }

    if (!this.state.Expiry_date) {
      Expiry_dateError = " * This Field is Required "
    }
    if (!this.state.Name1) {
      Name1Error = " * This Field is Required ";
    }
    if (!this.state.Age1) {
      Age1Error = " * This Field is Required "
    }

    if (!this.state.Relation1) {
      Relation1Error = " * This Field is Required "
    }

    if (!this.state.Citizenship1) {
      Citizenship1Error = " * This Field is Required "
    }
    if (!this.state.Name2) {
      Name2Error = " * This Field is Required ";
    }
    if (!this.state.Age2) {
      Age2Error = " * This Field is Required "
    }
    if (!this.state.Relation2) {
      Relation2Error = " * This Field is Required ";
    }
    if (!this.state.Citizenship2) {
      Citizenship2Error = " * This Field is Required "
    }

    if (!this.state.Name3) {
      Name3Error = " * This Field is Required "
    }

    if (!this.state.Age3) {
      Age3Error = " * This Field is Required "
    }
    if (!this.state.Relation3) {
      Relation3Error = " * This Field is Required ";
    }
    if (!this.state.Citizenship3) {
      Citizenship3Error = "* This Field is Required ";
    }
    if (!this.state.Name4) {
      Name4Error = " * This Field is Required "
    }
    if (!this.state.Age4) {
      Age4Error = " * This Field is Required ";
    }
    if (!this.state.Relation4) {
      Relation4Error = "* This Field is Required ";
    }
    if (!this.state.Citizenship4) {
      Citizenship4Error = "* This Field is Required ";
    }



    if (Driving_licenseError || Issue_dateError || Vehicle_typeError || Expiry_dateError || Name1Error
      || Age1Error || Relation1Error || Citizenship1Error || Name2Error || Age2Error || Relation2Error
      || Citizenship2Error || Name3Error || Age3Error || Relation3Error || Citizenship3Error || Name4Error ||
      Age4Error || Relation4Error || Citizenship4Error
    ) {
      this.setState({
        Driving_licenseError, Issue_dateError, Vehicle_typeError, Expiry_dateError, Name1Error,
        Age1Error, Relation1Error, Citizenship1Error, Name2Error, Age2Error, Relation2Error,
        Citizenship2Error, Name3Error, Age3Error, Relation3Error, Citizenship3Error, Name4Error, Age4Error, Relation4Error, Citizenship4Error
      });
      return false;
    }
    return true;

  }

  render() {
    const star = {
      color: "red"
    }
    return (
      <div className="wrapper">
        <Header />
        <br />
        <div className="container-fluid">
          {/* Page-Title */}
          <div>
            <div className="row">
              <div className="col-12">
                <div className="card m-b-10">
                  <div className="card-body">
                    <h4 style={{ textAlign: 'left' }}>UAE DRIVING LICENSE</h4>
                    <br />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="p-20">
                          <div className="form-group">
                            <label className="float-left">Driving License<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Driving License" onChange={this.formChange}
                              value={this.state.Driving_license} name="Driving_license" className="form-control" />
                          </div>
                          <div style={{ color: "red" }}>{this.state.Driving_licenseError}</div>
                          <div className="form-group">
                            <label className="float-left">Vehicle Type<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Vehicle Type" onChange={this.formChange}
                              value={this.state.Vehicle_type} name="Vehicle_type" className="form-control" />
                          </div>
                          <div style={{ color: "red" }}>{this.state.Vehicle_typeError}</div>
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-md-6">
                        <div className="p-20">
                          <div className="form-group">
                            <label className="float-left">Issue Date<span style={star}><b>*</b></span></label>
                            <input type="text" className="form-control" onChange={this.formChange}
                              value={this.state.Issue_date} name="Issue_date" placeholder="mm/dd/yyyy" />
                            <div style={{ color: "red" }}>{this.state.Issue_dateError}</div>
                          </div>
                          <div className="form-group m-b-0">
                            <label className="float-left">Expiry Date<span style={star}><b>*</b></span></label>
                            <input type="text" className="form-control" onChange={this.formChange}
                              value={this.state.Expiry_date} name="Expiry_date" placeholder="mm/dd/yyyy" />
                            <div style={{ color: "red" }}>{this.state.Expiry_dateError}</div>
                          </div>
                          <br />
                        </div>
                      </div>
                      {/* end col */}
                      {/* end col */}
                    </div>{/* end row */}
                  </div>
                </div>
              </div> {/* end col */}
            </div> {/* end row */}
            <div className="row">
              <div className="col-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <h4 style={{ textAlign: 'left' }}>FAMILY SPONSORSHIP DETAILS</h4>
                    <br />
                    <form action method="post">
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label className="float-left">Name<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Name1} name="Name1" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Name1Error}</div>
                        </div>
                        <div className="form-group col-md-3">
                          <label className="float-left">Age<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Age1} name="Age1" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Age1Error}</div>
                        </div>
                        <div className="form-group col-md-3">
                          <label className="float-left">Relation<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Relation1} name="Relation1" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Relation1Error}</div>
                        </div>
                        <div className="form-group col-md-3">
                          <label className="float-left">Citizenship<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Citizenship1} name="Citizenship1" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Citizenship1Error}</div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label className="float-left">Name<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Name2} name="Name2" className="form-control" id="customFieldName" />
                          <div style={{ color: "red" }}>{this.state.Name2Error}</div>
                        </div>
                        <div className="form-group col-md-3">
                          <label className="float-left">Age<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Age2} name="Age2" className="form-control"  />
                          <div style={{ color: "red" }}>{this.state.Age2Error}</div>
                        </div>
                        <div className="form-group col-md-3">
                          <label className="float-left">Relation<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Relation2} name="Relation2" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Relation2Error}</div>
                        </div>
                        <div className="form-group col-md-3">
                          <label className="float-left">Citizenship<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Citizenship2}
                            name="Citizenship2" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Citizenship2Error}</div>
                        </div>
                      </div>
                      <div className="form-row" id="itemRows">
                        <div className="form-group col-md-3">
                          <label className="float-left">Name<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Name3} name="Name3" className="form-control" />

                          <div style={{ color: "red" }}>{this.state.Name3Error}</div></div>
                        <div className="form-group col-md-3">
                          <label className="float-left">Age<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Age3} name="Age3" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Age3Error}</div>
                        </div>
                        <div className="form-group col-md-3">
                          <label className="float-left">Relation<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Relation3} name="Relation3" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Relation3Error}</div>
                        </div>
                        <div className="form-group col-md-3">
                          <label className="float-left">Citizenship<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Citizenship3} name="Citizenship3" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Citizenship3Error}</div>
                        </div>
                      </div>
                      <div className="form-row" id="itemRows">
                        <div className="form-group col-md-3">
                          <label className="float-left">Name<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Name4} name="Name4" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Name4Error}</div>
                        </div>
                        <div className="form-group col-md-3">
                          <label className="float-left">Age<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Age4} name="Age4" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Age4Error}</div>
                        </div>
                        <div className="form-group col-md-3">
                          <label className="float-left">Relation<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Relation4} name="Relation4" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Relation4Error}</div>
                        </div>
                        <div className="form-group col-md-3">
                          <label className="float-left">Citizenship<span style={star}><b>*</b></span></label>
                          <input type="text" onChange={this.formChange}
                            defaultValue={this.state.Citizenship4} name="Citizenship4" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Citizenship4Error}</div>
                        </div>
                      </div>
                      {/* <a href="javascript:void(0);" onclick="addRow(this.form)" className = "float-left">Add</a> */}
                    </form>
                    <br></br>
                    <div style={{ marginLeft: "900px" }}>
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

                  {/* <div style={{ marginLeft: '1000px' }}>
                    <a href="Form-2" className="btn btn-primary">« Previous</a>
                    <a href="Form-4" className="btn btn-primary">Next »</a>
                  </div> */}

                </div>
              </div> {/* end col */}

            </div>
            {/* end container */}
          </div>
        </div>


        <Footer />
      </div>


    )
  }
}


export default Form3;