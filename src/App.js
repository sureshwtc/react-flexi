import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Flexi from './components/Flexi.js';
const flexiConfig = {
  items: [
    {
      name: "person_name",
      label: "Person's Name",
      type: "TextField"
    },
    {
      name: "states",
      label: "Person's state",
      type: "DropDown",
      values: ["Maharashtra", "Kerala", "Tamil Nadu"]
    },{
      multiFieldSet:true,
      items: [
         {
          name: "employee.father_name",
          label: "Employee Father Name",
          type: "TextField"
        },
        {
          name: "employee.mother_name",
           label: "Employee Mother Name",
          type: "TextField"
        },{
      multiFieldSet:true,
      items: [
        {
          name: "employee.grand_father_name",
          label: "Employee Grand Father Name",
          type: "TextField"
        },
        {
          name: "employee.grand_mother_name",
           label: "Employee Grand Mother Name",
          type: "TextField"
        }]
    }]
    },{
      multiFieldSet:true,
      items: [
        {
          name: "designation",
          label: "Designation Name",
          type: "TextField"
        },
        {
          name: "job_location",
          label: "Job Location",
          type: "DropDown",
          values: ["Maharashtra", "Kerala", "Tamil Nadu"]
        }]
    },
  ]
}; 

class App extends Component {
  constructor(props) {
		super(props);
	 this.onFlexiSubmit = this.onFlexiSubmit.bind(this);
    }
  onFlexiSubmit(data){
    console.log("Form Data:",data)
  }
  render() {
    return (
      <div className="App">  
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <Flexi config={flexiConfig} onSubmit={this.onFlexiSubmit} />
      
      </div>
    );
  }
}

export default App;
