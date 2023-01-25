import React, { Component } from 'react';
import { PersonalInfo } from './components/PersonalInfo';
import { Education } from './components/Education';
import { ProfessionalExp } from './components/ProfessionalExp';
import "./App.css";
/* Basic Structure for reference
1. Personal info
	Name
	Date of Birth
	Country/City where you reside
  1.1 Contact Info
    E-mail
    Telefone
    Social Media
    [ADD option]
    Github
	
----

2. Education
	Basic Education
		Institution where you graduated
		Start / Finishing Dates
	Higher Education
		Institution
		Start / Finishing Dates
		[ADD Option]
	Certificates
		[input field for links or uploads]
		[ADD Option]

----

3. Professional
	Company Name
	Job-Title
	Activities(Optional)
	From - To Dates // Currently Employed Here Checkbox
	[ADD Option]
	

----
*/

class App extends Component {
  constructor(props) {

    super(props);

    this.state = {

    }
  }

  handleChange = (e) => {

  }

  onFormSubmit = (e) => {

  }

  render() {
    return (
      <div className="App">
        <form className="cvForm">
          <label>Personal Data</label>
          <input type="text" placeholder='Name'></input>
          <input type="text" placeholder='Title'></input>
          <input type="number" placeholder='Main Phone Number'></input>
          <input type="email" placeholder='E-Mail'></input>
          <input type="text" placeholder='Introduction...'></input>
          
        </form>
      </div>
    );
  }

}

export default App;
