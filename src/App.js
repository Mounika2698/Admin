import React, { Component } from 'react';
import Form1 from './Form-1';
import Form2 from './Form-2';
import Form3 from './Form-3';
import Form4 from './Form-4';
import Form5 from './Form-5';
import Form6 from './Form-6';
import Form7 from './Form-7';
import Form8 from './Form8';
import axios from 'axios';
import Candidate from './Candidate-list';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      data:[],
      data2:[],
      data3:[],
      data4:[],
      data5:[],
      data6:[],
      data7:[],
      form1:[],
      form2:[],
      form3:[],
      form4:[],
      form5:[],
      form6:[],
      form7:[],
      form8:[],
    

    }

  }

  allData = () => {
    this.setState({
      form8 :  {
        ...this.state.form1,
        ...this.state.form2,
        ...this.state.form3,
        ...this.state.form4,
        ...this.state.form5,
        ...this.state.form6,
        ...this.state.form7 }
    })
    // console.log(this.state.form8)
  }


  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  formChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
  //Form1
  create = (data) => {
    // console.log("form1 ---> ",data)

    axios.post("http://localhost:5000/Form1", data).then(res => {
      this.setState({

       form1: data
      })
      this.allData();

      console.log(res)
    })
  }

  // Form2
  create2 = (data2) => {
    // console.log(data2)
    axios.post("http://localhost:5000/Form2", data2).then(res => {
      this.setState({
        form2: data2
       })
       this.allData();
      console.log(res)
    })
  }

  // Form3
  create3 = (data3) => {
    // console.log(data3)
    axios.post("http://localhost:5000/Form3", data3).then(res => {
      this.setState({
        form3: data3
       })
       this.allData();
        console.log(res)
    })

  }

  // Form4
  create4 = (data4) => {
    // console.log(data4)
    axios.post("http://localhost:5000/Form4", data4).then(res => {
      this.setState({
        form4: data4
       })
       this.allData();
        console.log(res)
    })

  }

   // Form5
   create5 = (data5) => {
    // console.log(data5)
    axios.post("http://localhost:5000/Form5", data5).then(res => {
      this.setState({
        form5: data5
       })
       this.allData();
        console.log(res)
    })

  }

   // Form6
   create6 = (data6) => {
    // console.log(data6)
    axios.post("http://localhost:5000/Form6", data6).then(res => {
      this.setState({
        form6: data6
       })
       this.allData();
        console.log(res)
    })

  }

   // Form7
   create7 = (data7) => {
    // console.log("app->",data7)
    axios.post("http://localhost:5000/Form7", data7).then(res => {
      this.setState({
        form7: data7
       })
       this.allData();
        console.log(res)
    })

  }

  componentDidMount() {
    this.getAll();
    this.getAllForm2();
    this.getAllForm3();
    this.getAllForm4();
    this.getAllForm5();
    this.getAllForm6();
    this.getAllForm7();
  }

  getAll() {
    axios.get("http://localhost:5000/Form1").then(res => {
      // console.log(res.data)
      this.setState({
        data: res.data
      })
    })
  }
// Form2
  getAllForm2() {
    axios.get("http://localhost:5000/Form2").then(res => {
      // console.log(res.data)
      this.setState({
        data: res.data
      })
    })
  }

  // Form3
  getAllForm3() {
    axios.get("http://localhost:5000/Form3").then(res => {
      // console.log(res.data)
      this.setState({
        data: res.data
      })
    })
  }


// Form4
getAllForm4() {
  axios.get("http://localhost:5000/Form4").then(res => {
    // console.log(res.data)
    this.setState({
      data: res.data
    })
  })
}

// Form5
getAllForm5() {
  axios.get("http://localhost:5000/Form2").then(res => {
    // console.log(res.data)
    this.setState({
      data: res.data
    })
  })
}
// Form6
getAllForm6() {
  axios.get("http://localhost:5000/Form6").then(res => {
    // console.log(res.data)
    this.setState({
      data: res.data
    })
  })
}

// Form7
getAllForm7() {
  axios.get("http://localhost:5000/Form7").then(res => {
    console.log(res.data) 
    this.setState({
      data: res.data
    })
  })
}




  render() {
    const { step } = this.state;
    const {
      // Form1
      First_name,
      Middle_name,
      Gender,
      Nationality,
      Marital_status,
      Religion,
      Last_name,
      Dob,
      Blood_group,
      Mother_name,
      Place_of_Birth,
      Home_language,
      Grandfather_name,
      Country_of_birth,
      Other_language,
      National_identifier,
      // Form2
      Issuing_country,
      Issued_by,
      passport_expiry_date,
      Passport_number,
      Passport_issue_date,
      Visa_type,
      Visa_number,
      Visa_expiry_date,
      Current_sponsor,
      Visa_issue_date,
      Driving_license,
      Issue_date,
      Vehicle_type,
      Expiry_date,
      // Form3
      Name1,
      Age1,
      Relation1,
      Citizenship1,
      Name2,
      Age2,
      Relation2,
      Citizenship2,
      Name3,
      Age3,
      Relation3,
      Citizenship3,
      Name4,
      Age4,
      Relation4,
      Citizenship4,
      // Form4
      Address_line1,
      Region_state,
      Address_Line2,
      Postal_Code,
      Country,
      Town_City,
      Telephone,
      Uae_Address_line1,
      Uae_Region_state,
      Uae_Address_Line2,
      Uae_Postal_Code,
      Uae_Country,
      Uae_Telephone,
      Uae_Town_City,

      // Form5
      Qualification1,
      Qualification2,
      Qualification3,
      School1,
      School2,
      School3,
      Date1,
      Date2,
      Date3,

      // Form6
      Company_name,
      Industry,
      Designation,
      Reason_of_leaving,
      Start_date,
      End_date,
      Company_name2,
      Industry2,
      Designation2,
      Start_date2,
      End_date2,
      
      //Form7

      Current_basic,
      Current_Transportation,
      Current_Total_package,
      Current_Housing,
      Current_Other_allowances,
      Current_Expected_Date_of_Joining,
      Expected_basic,
      Expected_Transportation,
      Expected_Total_package,
      Expected_Housing,
      Expected_Other_allowances,
      Expected_Expected_Date_of_Joining
    } = this.state;


    const values = {
      // Form1
      First_name,
      Middle_name,
      Gender,
      Nationality,
      Marital_status,
      Religion,
      Last_name,
      Dob,
      Blood_group,
      Mother_name,
      Place_of_Birth,
      Home_language,
      Grandfather_name,
      Country_of_birth,
      Other_language,
      National_identifier,
      // Form2
      Issuing_country,
      Issued_by,
      passport_expiry_date,
      Passport_number,
      Passport_issue_date,
      Visa_type,
      Visa_number,
      Visa_expiry_date,
      Current_sponsor,
      Visa_issue_date,
      Driving_license,
      Issue_date,
      Vehicle_type,
      Expiry_date,
      // Form3
      Name1,
      Age1,
      Relation1,
      Citizenship1,
      Name2,
      Age2,
      Relation2,
      Citizenship2,
      Name3,
      Age3,
      Relation3,
      Citizenship3,
      Name4,
      Age4,
      Relation4,
      Citizenship4,
      Address_line1,
      Region_state,
      // Form4
      Address_Line2,
      Postal_Code,
      Country,
      Town_City,
      Telephone,
      Uae_Address_line1,
      Uae_Region_state,
      Uae_Address_Line2,
      Uae_Postal_Code,
      Uae_Country,
      Uae_Telephone,
      Uae_Town_City,
      // Form5
      Qualification1,
      Qualification2,
      Qualification3,
      School1,
      School2,
      School3,
      Date1,
      Date2,
      Date3,

      // Form6
      Company_name,
      Industry,
      Designation,
      Reason_of_leaving,
      Start_date,
      End_date,
      Company_name2,
      Industry2,
      Designation2,
      Start_date2,
      End_date2,

      //Form 7
    
      Current_basic,
      Current_Transportation,
      Current_Total_package,
      Current_Housing,
      Current_Other_allowances,
      Current_Expected_Date_of_Joining,
      Expected_basic,
      Expected_Transportation,
      Expected_Total_package,
      Expected_Housing,
      Expected_Other_allowances,
      Expected_Expected_Date_of_Joining
    };

    
  
    switch (step) {
      case 1:
        return (
          <Form1 myData={this.create}
            nextStep={this.nextStep}
            handleChange={this.formChange}
            values={values}
            formData = {this.state.form1}
          />
        );
      case 2:
        return (
          <Form2 myData2={this.create2}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.formChange}
            values={values}
            formData2 = {this.state.form2}
          />
        );
      case 3:
        return (
          <Form3 myData3={this.create3}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.formChange}
            values={values}
            formData3 = {this.state.form3}
          />
        );
      case 4:
        return (
          <Form4 myData4={this.create4}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.formChange}
            values={values}
            formData4= {this.state.form4}
          />
        );
      case 5:
        return (
          <Form5 myData5={this.create5}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.formChange}
            values={values}
            formData5 = {this.state.form5}
          />
       
        );
      case 6:
        return (
          <Form6 myData6={this.create6}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.formChange}
            values={values}
            formData6 = {this.state.form6}
          />
        );
        case 7:
          return (
            <Form7 myData7={this.create7}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.formChange}
            values={values}
            formData7 = {this.state.form7}
          />
          );
          case 8:
            return (
              <Form8 allData={this.state.form8}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.formChange}
              values={values}
            />
            );
      default:
    
    }

    return(
      <Candidate-list allData={this.state.form8} />
     )
  }
}

export default App;

