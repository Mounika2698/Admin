import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Button from '@material-ui/core/Button'


const initialState = {
  _id: "",
  Current_basic:"",
  Current_Transportation: "",
  Current_Total_package: "",
  Current_Housing: "",
  Current_Other_allowances:"",
  Current_Expected_Date_of_Joining:"",
  Expected_basic: "",
  Expected_Transportation:"",
  Expected_Total_package:"",
  Expected_Housing: "",
  Expected_Other_allowances:"",
  Expected_Expected_Date_of_Joining:"",

  Current_basicError:"",
  Current_TransportationError: "",
  Current_Total_packageError: "",
  Current_HousingError: "",
  Current_Other_allowancesError:"",
  Current_Expected_Date_of_JoiningError:"",
  Expected_basicError:"",
  Expected_TransportationError:"",
  Expected_Total_packageError:"",
  Expected_HousingError:"",
  Expected_Other_allowancesError:"",
  Expected_Expected_Date_of_JoiningError:""

}


class Form7 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialState,
      Current_basic: this.props.formData7.Current_basic,
      Current_Transportation: this.props.formData7.Current_Transportation,
      Current_Total_package: this.props.formData7.Current_Total_package,
      Current_Housing: this.props.formData7.Current_Housing,
      Current_Other_allowances: this.props.formData7.Current_Other_allowances,
      Current_Expected_Date_of_Joining: this.props.formData7.Current_Expected_Date_of_Joining,
      Expected_basic: this.props.formData7.Expected_basic,
      Expected_Transportation: this.props.formData7.Expected_Transportation,
      Expected_Total_package: this.props.formData7.Expected_Total_package,
      Expected_Housing: this.props.formData7.Expected_Housing,
      Expected_Other_allowances: this.props.formData7.Expected_Other_allowances,
      Expected_Expected_Date_of_Joining: this.props.formData7.Expected_Expected_Date_of_Joining
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
    let data7 = {
      Current_basic: this.state.Current_basic,
      Current_Transportation: this.state.Current_Transportation,
      Current_Total_package: this.state.Current_Total_package,
      Current_Housing: this.state.Current_Housing,
      Current_Other_allowances: this.state.Current_Other_allowances,
      Current_Expected_Date_of_Joining: this.state.Current_Expected_Date_of_Joining,
      Expected_basic: this.state.Expected_basic,
      Expected_Transportation: this.state.Expected_Transportation,
      Expected_Total_package: this.state.Expected_Total_package,
      Expected_Housing: this.state.Expected_Housing,
      Expected_Other_allowances: this.state.Expected_Other_allowances,
      Expected_Expected_Date_of_Joining: this.state.Expected_Expected_Date_of_Joining

    }
// console.log()
    // console.log(this.props.name)
    // this.props.myData("data")

    this.props.myData7(data7);

  }

  validate = () => {

    let Current_basicError="";
    let Current_TransportationError= "";
    let Current_Total_packageError= "";
    let Current_HousingError="";
    let Current_Other_allowancesError="";
    let Current_Expected_Date_of_JoiningError="";
    let Expected_basicError="";
    let Expected_TransportationError="";
    let Expected_Total_packageError="";
    let Expected_HousingError="";
    let Expected_Other_allowancesError="";
    let Expected_Expected_Date_of_JoiningError=""
 
     if (!this.state.Current_basic) {
      Current_basicError = " * This Field is Required "
     }
 
     if (!this.state.Current_Transportation) {
      Current_TransportationError = " * This Field is Required "
     }
 
     if (!this.state.Current_Total_package) {
      Current_Total_packageError = " * This Field is Required "
     }
 
     if (!this.state.Current_Housing) {
      Current_HousingError = " * This Field is Required "
     }
     if (!this.state.Current_Other_allowances) {
      Current_Other_allowancesError = " * This Field is Required ";
     }
     if (!this.state.Current_Expected_Date_of_Joining) {
      Current_Expected_Date_of_JoiningError = " * This Field is Required "
     }
 
     if (!this.state.Expected_basic) {
      Expected_basicError = " * This Field is Required "
     }
 
     if (!this.state.Expected_Transportation) {
      Expected_TransportationError = " * This Field is Required "
     }
     if (!this.state.Expected_Total_package) {
      Expected_Total_packageError = " * This Field is Required ";
     }
     if (!this.state.Expected_Housing) {
      Expected_HousingError = " * This Field is Required "
     }
     if (!this.state.Expected_Other_allowances) {
      Expected_Other_allowancesError = " * This Field is Required ";
     }
     if (!this.state.Expected_Expected_Date_of_Joining) {
      Expected_Expected_Date_of_JoiningError = " * This Field is Required "
     }
 
    
     if (Current_basicError || Current_TransportationError || Current_Total_packageError || Current_HousingError || Current_Other_allowancesError
       || Current_Expected_Date_of_JoiningError || Expected_basicError || Expected_TransportationError || Expected_Total_packageError || Expected_HousingError || Expected_Other_allowancesError
       || Expected_Expected_Date_of_JoiningError 
     ) {
       this.setState({
        Current_basicError, Current_TransportationError, Current_Total_packageError, Current_HousingError, Current_Other_allowancesError,
        Current_Expected_Date_of_JoiningError, Expected_basicError, Expected_TransportationError, Expected_Total_packageError, Expected_HousingError, Expected_Other_allowancesError,
        Expected_Expected_Date_of_JoiningError
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
                  <h3>Renumeration</h3>
                  <h5>CURRENT SALARY PACKAGE</h5> <br />
                  <div className="row">
                    <div className="col-md-4">
                      <div className="p-20">
                        <form action="#">
                          <div className="form-group">
                            <label className="float-left">Basic<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Basic" onChange={this.formChange}
                              value={this.state.Current_basic} name="Current_basic" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Current_basicError}</div>
                          </div>
                          <div className="form-group">
                            <label className="float-left">Housing<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Housing" onChange={this.formChange}
                              value={this.state.Current_Housing} name="Current_Housing" className="form-control" />
                              <div style={{ color: "red" }}>{this.state.Current_HousingError}</div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-20">
                        <form action="#">
                          <div className="form-group">
                            <label className="float-left"> Transportation<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Transportation" onChange={this.formChange}
                              value={this.state.Current_Transportation} name="Current_Transportation" className="form-control" />
                        <div style={{ color: "red" }}>{this.state.Current_TransportationError}</div>
                          </div>
                          <div className="form-group">
                            <label className="float-left">Other Allowances<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Other Allowances" onChange={this.formChange}
                              value={this.state.Current_Other_allowances} name="Current_Other_allowances" className="form-control" />
                         <div style={{ color: "red" }}>{this.state.Current_Other_allowancesError}</div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-20">
                        <form action="#">
                          <div className="form-group m-b-0">
                            <label className="float-left">Total Package<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Total Package" onChange={this.formChange}
                              value={this.state.Current_Total_package} name="Current_Total_package" className="form-control" />
                        <div style={{ color: "red" }}>{this.state.Current_Total_packageError}</div>
                          </div>
                          <div className="form-group ">
                            <label className="float-left">Expected Date of
                        Joining<span style={star}><b>*</b></span></label>
                            <input type="text" className="form-control" onChange={this.formChange}
                              value={this.state.Current_Expected_Date_of_Joining} name="Current_Expected_Date_of_Joining" placeholder="mm/dd/yyyy" />
                           <div style={{ color: "red" }}>{this.state.Current_Expected_Date_of_JoiningError}</div>
                            <div className="input-group-append bg-custom b-0" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card m-b-30">
                <div className="card-body">
                  <h5>EXPECTED SALARY PACKAGE</h5> <br />
                  <div className="row">
                    <form action="#">
                      <div className="col-md-4">
                        <div className="p-20">

                          <div className="form-group">
                            <label className="float-left">Basic<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Basic" onChange={this.formChange}
                              value={this.state.Expected_basic} name="Expected_basic" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Expected_basicError}</div>
                          </div>
                          <div className="form-group">
                            <label className="float-left">Housing<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Housing" onChange={this.formChange}
                              value={this.state.Expected_Housing} name="Expected_Housing" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Expected_HousingError}</div>
                          </div>

                        </div>
                      </div> {/* end col */}
                      <div className="col-md-4">
                        <div className="p-20">

                          <div className="form-group">
                            <label className="float-left"> Transportation<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Transportation" onChange={this.formChange}
                              value={this.state.Expected_Transportation} name="Expected_Transportation" className="form-control" />
                         <div style={{ color: "red" }}>{this.state.Expected_TransportationError}</div>
                          </div>
                          <div className="form-group">
                            <label className="float-left">Other Allowances<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Other Allowances" onChange={this.formChange}
                              value={this.state.Expected_Other_allowances} name="Expected_Other_allowances" className="form-control" />
                      <div style={{ color: "red" }}>{this.state.Expected_Other_allowancesError}</div>
                          </div>


                        </div>
                      </div> {/* end col */}
                      <div className="col-md-4">
                        <div className="p-20">

                          <div className="form-group m-b-0">
                            <label className="float-left">Total Package<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Total Package" onChange={this.formChange}
                              value={this.state.Expected_Total_package} name="Expected_Total_package" className="form-control" />
                         <div style={{ color: "red" }}>{this.state.Expected_Total_packageError}</div>
                          </div>
                          <div className="form-group">
                            <label className="float-left">Expected Date of
                        Joining<span style={star}><b>*</b></span></label>
                            <input type="text" placeholder="Expected date " onChange={this.formChange}
                              value={this.state.Expected_Expected_Date_of_Joining} name="Expected_Expected_Date_of_Joining" className="form-control" />
                          <div style={{ color: "red" }}>{this.state.Expected_Expected_Date_of_JoiningError}</div>
                          </div>

                        </div>
                      </div>
                    </form>

                  </div>
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
                  {/* end col */}
                  {/* end row */}
                  {/* <div style={{marginLeft: '900px'}}>
              <a href="form-mask7.html" className="btn btn-primary">« Previous</a>
              <a href="Dashboard" onClick={this.myFunc} className="btn btn-primary">Finish »</a>
            
            </div> */}

                </div>


              </div>
            </div>
          </div> {/* end col */}
        </div> {/* end row */}
        {/* end wrapper */}


        <Footer />
      </div>


    )
  }
}


export default Form7;