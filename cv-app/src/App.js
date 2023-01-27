import React, { Component } from 'react';
import { PersonalInfo } from './components/PersonalInfo';
import { Education } from './components/Education';
import { ProfessionalExp } from './components/ProfessionalExp';
import { Skills } from './components/Skills';
import "./styles/App.css";
import uniqid from 'uniqid';

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
  constructor() {

    super();

    this.state = {
        addSkill: [<Skills input={this.handleChange} id={uniqid()}/>],
        skill: {
          input:"",
        },
        skills: [],
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.state.skills.map(item => {
      if(item.id === e.target.id) {
        let index = this.state.skills.indexOf(item)
        let temp = this.state.skills
        temp[index].input = e.target.value
        
        this.setState( {
          skills: temp
        })
        
      } else
      this.setState({ 
        skill: {
          input: e.target.value,
          id: e.target.id
        },
        skills: this.state.skills.concat(this.state.skill)
    })
    })

    

  }

  onFormSubmit = (e) => {

  }

  addButton = (value,e) => {
    e.preventDefault();
    this.setState({ 
        addSkill: this.state.addSkill.concat(value),
        skill: {
          input:"",
          id: e.target.id
        },
        skills: this.state.skills.concat(this.state.skill)
    })


  }

  personalData = <div className="formDiv">
            <input type="text" placeholder='Name'></input>
            <input type="text" placeholder='Title'></input>
            <input type="number" placeholder='Phone Number'></input>
            <input type="email" placeholder='E-Mail'></input>
            <input type="text" placeholder='Location'></input>
            <input type="text" placeholder='Introduction...'></input>
            <p></p>
  </div>

  education = <div className="formDiv">
          <input type="text" placeholder='Title'></input>
          <input type="text" placeholder='Institution/Organization'></input>
          <input type="number" placeholder='From'></input>
          <input type="number" placeholder='To'></input>
          <input type="text" placeholder='Description'></input>
          <button>Add</button>
          <p></p>
  </div>

  professionalExp =           <div>
    <input type="text" placeholder="Company's Name"></input>
    <input type="text" placeholder='Title'></input>
    <input type="number" placeholder='From'></input>
    <input type="number" placeholder='To'></input>
    <input type="text" placeholder='Duties'></input> </div>

  professionalExpContainer = <div className="formDiv">
          {this.professionalExp}
          <button>Add</button>
          <p></p>
  </div>
  
    

  
  // skillsContainer = <div className="formDiv">
  //         <div><input type="text" placeholder="5 most relevant skills"></input> </div>
  // </div>

// skills = [<Skills />]

  render() {
    const { addSkill, skillInput } = this.state
    return (
      <div className="App">
        <form className="cvForm">
        <label>Personal Data</label>
          {this.personalData}
        <label>Education</label>
          {this.education}
        <label>Professional Experience</label>
          {this.professionalExpContainer} 
        <label>Skills</label>
         {/* {this.skills} */}
         {addSkill}
         <button className="add" onClick={(e) => this.addButton(<Skills input={this.handleChange} id={uniqid()}/>, e)}>Add</button>
         {console.log(this.state.skills)}
          
          
        </form>
      </div>
    );
  }

}

export default App;
 