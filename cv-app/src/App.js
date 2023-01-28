import React, { Component } from 'react';
import { PersonalInfo } from './components/PersonalInfo';
import { Education } from './components/Education';
import { ProfessionalExp } from './components/ProfessionalExp';
import { Skills } from './components/Skills';
import "./styles/App.css";
import uniqid from 'uniqid';


class App extends Component {
  constructor() {

    super();
    this.firstId = {id: uniqid()}
    this.state = {

        addSkill: [<Skills input={this.handleChange} id={this.firstId.id}/>],
        skill: {
          input:"",
          id:  this.firstId.id
        },
        skillsArr: [],

        addProf:[<ProfessionalExp id={this.firstId.id}/>],
        profExp: {
          id: this.firstId.id,
          title:"",
          company:"",
          from: null,
          to: null,
          description:""
        },
        profExpArr: []
        
    }
  }

  handleChange = (e) => {
    // e.preventDefault();
    let checkForId = () => {
      var ret = false

      switch(e.target.className) {

        case "input":

      this.state.skillsArr.map(item => {
        if(item.id === e.target.id) {
          let index = this.state.skillsArr.indexOf(item);
          let temp = this.state.skillsArr;
          temp[index].input = e.target.value;
          this.setState( {
            skillsArr: temp
          })
          ret = true
        } 
      })
      if(ret === false) {
        console.log(e.target.value)
        this.setState({ 
          skill: {
            input: e.target.value,
            id: e.target.id
          },
          
          skillsArr: this.state.skillsArr.concat({
            input: e.target.value,
            id: e.target.id 
          })
      })
      console.log(this.state.skill.input)
      }
      break;

      case "profExp":
        this.state.profExpArr.map(item => {
          if(item.id === e.target.id) {
            let tempTitle = e.target.name
            console.log(e.target.name)
            // let index = this.state.profExpArr.indexOf(item);
            // let temp = this.state.profExpArr;
            // temp[index].input = e.target.value;
            // this.setState( {
            //   profExpArr: temp
            // })
            ret = true
          } 
        })
        
        if(ret === false) {

          this.setState({

            profExp: {
              tempName: e.target.value,
              id: e.target.id
            },
            
            profExpArr: this.state.profExpArr.concat({
              company: e.target.value,
              id: e.target.id 
            })
        })
        console.log(this.state.profExpArr.company)
        }
        break;

        default:
          console.log("default")
      }

      
    }
    checkForId();

  }

  onFormSubmit = (e) => {

  }

  addButton = (tag, value,e) => {
    e.preventDefault();

    switch(tag) {

      case "addSkills":

        this.setState({ 
          addSkill: this.state.addSkill.concat(value),
          skill: {
            input:"",
            id: value.props.id
          },
          skillsArr: this.state.skillsArr.concat({
            input:"",
            id: value.props.id
          })
      });
      break;

      case "addProf":

        this.setState({ 
          addProf: this.state.addProf.concat(value)
        })

        break;
      
      default:
        console.log("default")

    }
    


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

  // professionalExp =           <div>
  //   <input type="text" placeholder="Company's Name"></input>
  //   <input type="text" placeholder='Title'></input>
  //   <input type="number" placeholder='From'></input>
  //   <input type="number" placeholder='To'></input>
  //   <input type="text" placeholder='Duties'></input> </div>

  // professionalExpContainer = <div className="formDiv">
  //         {this.professionalExp}
  //         <button>Add</button>
  //         <p></p>
  // </div>
  
    

  
  // skillsContainer = <div className="formDiv">
  //         <div><input type="text" placeholder="5 most relevant skills"></input> </div>
  // </div>

// skills = [<Skills />]

  render() {
    const { addSkill, addProf } = this.state
    return (
      <div className="App">
        <form className="cvForm">
        <label>Personal Data</label>
          {this.personalData}
        <label>Education</label>
          {this.education}
        <label>Professional Experience</label>
          {addProf}
          <button className="addProf" onClick={(e) => this.addButton("addProf",<ProfessionalExp input={this.handleChange} id={uniqid()}/>, e)}>Add</button>
          {console.log(this.state.profExpArr)}
        <label>Skills</label>
         {addSkill}
         <button className="addSkills" onClick={(e) => this.addButton("addSkills", <Skills input={this.handleChange} id={uniqid()}/>, e)}>Add</button>
         {console.log(this.state.skillsArr)}
          
          
        </form>
      </div>
    );
  }

}

export default App;
 