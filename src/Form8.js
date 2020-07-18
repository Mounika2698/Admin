import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Button from '@material-ui/core/Button'

class Form8 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.allData
    }
    // console.log(this.state.userData)
  }

  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };


  continue = () => {
    alert("Do u want to submit?")
    window.location.href = "/Dashboard"

  }

  render() {

    return (
      <div className="wrapper">
        <div className="container-fluid">
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
                      <div className="col-md-6">
                        <div className="p-20">
                          <h5><b>PERSONAL PARTICULARS</b></h5>
                          <p> <label>First name : </label>&nbsp; {this.state.userData.First_name} </p>
                          <p> <label>Middle name : </label>&nbsp; {this.state.userData.Middle_name}</p>
                          <p><label>Family Name / Last Name : </label>&nbsp;{this.state.userData.Last_name}</p>
                          <p><label>Mother's Name : </label>&nbsp; {this.state.userData.Mother_name} </p>
                          <p> <label>Grandfather's Name : </label>&nbsp;{this.state.userData.Grandfather_name}</p>
                          <p> <label>National Identifier : </label>&nbsp; {this.state.userData.National_identifier}</p>
                          <p><label>Gender : </label>&nbsp;{this.state.userData.Gender} </p>
                          <p> <label>Marital Status : </label>&nbsp;{this.state.userData.Marital_status}</p>
                          <p> <label>Date of Birth : </label>&nbsp;{this.state.userData.Dob}</p>
                          <p> <label>Place of Birth : </label>&nbsp;{this.state.userData.Place_of_Birth} </p>
                          <p><label>Country of Birth : </label>&nbsp;{this.state.userData.Country_of_birth}</p>
                          <p><label>Nationality : </label>&nbsp;{this.state.userData.Nationality} </p>
                          <p> <label>Religion : </label>&nbsp;{this.state.userData.Religion}</p>
                          <p> <label>Blood Group : </label>&nbsp;{this.state.userData.Blood_group}</p>
                          <p><label>Home Language : </label>&nbsp;{this.state.userData.Home_language}</p>
                          <p> <label>Other Language : </label>&nbsp;{this.state.userData.Other_language}</p>
                          <br></br>
                          {/* Form2 */}
                          <h5><b>PASSPORT</b></h5>
                          <p> <label>Issuing Country : </label>&nbsp;{this.state.userData.Issuing_country}</p>
                          <p> <label>Passport Number : </label>&nbsp; {this.state.userData.Passport_number}</p>
                          <p><label>Issued By : </label>&nbsp;{this.state.userData.Issued_by}</p>
                          <p><label>Passport Issue Date : </label>&nbsp;{this.state.userData.Passport_issue_date} </p>
                          <p> <label>Passport Expiry Date : </label>&nbsp;{this.state.userData.passport_expiry_date}</p>
                          <br></br>
                          <h5><b>UAE VISA</b></h5>
                          <p> <label>Visa Type : </label>&nbsp;{this.state.userData.Visa_type}</p>
                          <p><label>Current Sponsor : </label>&nbsp;{this.state.userData.Current_sponsor}</p>
                          <p> <label>Visa Number : </label>&nbsp;{this.state.userData.Visa_number}</p>
                          <p> <label>Visa Issue Date : </label>&nbsp;{this.state.userData.Visa_issue_date}</p>
                          <p> <label>Visa Expiry Date : </label>&nbsp; {this.state.userData.Visa_expiry_date}</p>

                          {/* Form3 */}
                          <h5><b>UAE DRIVING LICENSE</b></h5>

                          <p><label>Driving License : </label>&nbsp;{this.state.userData.Driving_license}</p>
                          <p><label>Vehicle Type : </label>&nbsp;{this.state.userData.Vehicle_type} </p>
                          <p> <label>Issue Date : </label>&nbsp;{this.state.userData.Issue_date}</p>
                          <p> <label>Expiry Date : </label>&nbsp;{this.state.userData.Expiry_date}</p>
                          <br></br>

                          <h5><b>FAMILY SPONSORSHIP DETAILS</b></h5>
                          <p><label>Name : </label>&nbsp; {this.state.userData.Name1}</p>
                          <p> <label>Age : </label>&nbsp;{this.state.userData.Age1}</p>
                          <p><label>Relation : </label>&nbsp; {this.state.userData.Relation1}</p>
                          <p> <label>Citizenship : </label>&nbsp;{this.state.userData.Citizenship1}</p>
                          <p><label>Name : </label>&nbsp; {this.state.userData.Name2}</p>
                          <p> <label>Age : </label>&nbsp;{this.state.userData.Age2}</p>
                          <p><label>Relation : </label>&nbsp; {this.state.userData.Relation2}</p>
                          <p> <label>Citizenship : </label>&nbsp;{this.state.userData.Citizenship2}</p>
                          <p><label>Name : </label>&nbsp;{this.state.userData.Name3}</p>
                          <p> <label>Age : </label>&nbsp;{this.state.userData.Age3}</p>
                          <p><label>Relation : </label>&nbsp; {this.state.userData.Relation3}</p>
                          <p> <label>Citizenship : </label>&nbsp;{this.state.userData.Citizenship3}</p>
                          <p><label>Name : </label>&nbsp; {this.state.userData.Name4}</p>
                          <p> <label>Age : </label>&nbsp;{this.state.userData.Age4}</p>
                          <p><label>Relation : </label>&nbsp; {this.state.userData.Relation4}</p>
                          <p> <label>Citizenship : </label>&nbsp;{this.state.userData.Citizenship4}</p>
                          <br></br>
                          <h5><b>HOME COUNTRY</b></h5>

                          <p><label>Address Line1 : </label>&nbsp;{this.state.userData.Address_line1}</p>
                          <p><label>Address Line2 : </label>&nbsp;{this.state.userData.Address_Line2} </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="p-20">

                          <p> <label>Town/City : </label>&nbsp;{this.state.userData.Town_City}</p>
                          <p> <label>Region/State : </label>&nbsp;{this.state.userData.Region_state}</p>
                          <p><label>Postal Code : </label>&nbsp;{this.state.userData.Postal_Code}</p>
                          <p> <label>Telephone Number : </label>&nbsp;{this.state.userData.Telephone}</p>
                          <p><label>Country : </label>&nbsp; {this.state.userData.Country}</p>
                          <br></br>
                          <h5>UAE </h5>
                          <p> <label>Address Line1 : </label>&nbsp;{this.state.userData.Uae_Address_line1}</p>
                          <p><label>Address Line2 : </label>&nbsp;{this.state.userData.Uae_Address_Line2}</p>
                          <p> <label>Town/City : </label>&nbsp;{this.state.userData.Uae_Town_City}</p>
                          <p><label>Region/State : </label>&nbsp;{this.state.userData.Uae_Region_state}</p>
                          <p> <label>Postal Code : </label>&nbsp;{this.state.userData.Uae_Postal_Code}</p>
                          <p><label>Telephone Number : </label>&nbsp; {this.state.userData.Uae_Telephone}</p>
                          <p> <label>Country : </label>&nbsp;{this.state.userData.Uae_Country}</p>

                          {/* Form5 */}
                          <h5><b>QUALIFICATAION</b></h5>
                          <p><label>1 : </label>&nbsp;{this.state.userData.Qualification1}</p>
                          <p> <label>2 : </label>&nbsp;{this.state.userData.Qualification2}</p>
                          <p> <label>3 : </label>&nbsp;{this.state.userData.Qualification3}</p>
                          <br></br>
                          <h5><b>SCHOOL/INSTITUTION/UNIVERSITY</b> </h5>
                          <p><label>1 : </label>&nbsp;{this.state.userData.School1}</p>
                          <p><label>2 : </label>&nbsp;{this.state.userData.School2}</p>
                          <p><label>3 : </label>&nbsp;{this.state.userData.School3}</p>

                          <br></br>
                          <h5><b>DATE COMPLETED </b></h5>
                          <p><label>1 : </label>&nbsp;{this.state.userData.Date1}</p>
                          <p><label>2 : </label>&nbsp;{this.state.userData.Dat2}</p>
                          <p><label>3 : </label>&nbsp;{this.state.userData.Date3}</p>
                          {/* Form6 */}
                          <br></br>
                          <h5><b>WORK EXPERIENCE</b></h5>
                          <br></br>
                          <p> <label>Company Name : </label>&nbsp;{this.state.userData.Company_name}</p>
                          <p><label>Industry : </label>&nbsp; {this.state.userData.Industry}</p>
                          <p> <label>Designation : </label>&nbsp;{this.state.userData.Designation}</p>
                          <p> <label>Reason of Leaving : </label>&nbsp;{this.state.userData.Reason_of_leaving}</p>
                          <p><b><label>Duration : </label>&nbsp;</b></p>
                          <p><b>{this.state.userData.Start_date}</b></p>
                          <p> <b>{this.state.userData.End_date}</b></p>
                          <br></br>
                          <p> <label>Company Name : </label>&nbsp;{this.state.userData.Company_name2}</p>
                          <p><label>Industry : </label>&nbsp; {this.state.userData.Industry2}</p>
                          <p> <label>Designation : </label>&nbsp;{this.state.userData.Designation2}</p>
                          <p> <label>Reason of Leaving : </label>&nbsp;{this.state.userData.Reason_of_leaving2}</p>
                          <p><b><label>Duration : </label>&nbsp;</b></p>
                          <p><label>Start date : </label>&nbsp;{this.state.userData.Start_date2}</p>
                          <p><label>End date : </label>&nbsp;{this.state.userData.End_date2}</p>

                          {/* Form7 */}
                          <h5><b>CURRENT SALARY PACKAGE</b></h5>
                          <br></br>
                          <p><label>Basic : </label>&nbsp;{this.state.userData.Current_basic}</p>
                          <p><label>Housing : </label>&nbsp;{this.state.userData.Current_Housing}</p>
                          <p> <label>Transportation : </label>&nbsp;{this.state.userData.Current_Total_package}</p>
                          <p> <label>Other Allowances : </label>&nbsp;{this.state.userData.Current_Other_allowances}</p>
                          <p><label>Total Package : </label>&nbsp; {this.state.userData.Current_Total_package}</p>
                          <p> <label>Expected Date of Joining : </label>&nbsp;{this.state.userData.Current_Expected_Date_of_Joining}</p>
                          <br></br>
                          <h5><b>EXPECTED SALARY PACKAGE</b></h5>
                          <br></br>
                          <p><label>Basic : </label>&nbsp;{this.state.userData.Expected_basic}</p>
                          <p><label>Housing : </label>&nbsp;{this.state.userData.Expected_Housing}</p>
                          <p> <label>Transportation : </label>&nbsp;{this.state.userData.Expected_Transportation}</p>
                          <p> <label>Other Allowances : </label>&nbsp;{this.state.userData.Expected_Other_allowances}</p>
                          <p><label>Total Package : </label>&nbsp;{this.state.userData.Expected_Total_package}</p>
                          <p> <label>Expected Date of Joining : </label>&nbsp;{this.state.userData.Expected_Expected_Date_of_Joining}</p>

                        </div>
                      </div> {/* end col */}
                    </div> {/* end row */}
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
                        onClick={this.continue}
                      >Confirm</Button>
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
      </div >

    )
  }
}

export default Form8;

