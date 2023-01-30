import React, { Component } from 'react';
import { PersonalInfo } from './components/PersonalInfo';
import { Education } from './components/Education';
import { ProfessionalExp } from './components/ProfessionalExp';
import { ProfPreview } from './components/ProfPreview';
import { Skills } from './components/Skills';
import { SkillsPreview } from './components/SkillsPreview';
import "./styles/App.css";
import uniqid from 'uniqid';
import { useState } from 'react';


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
        skillsArr: [{
          input:"",
          id:  this.firstId.id
        }],

        addProf:[<ProfessionalExp input={this.handleChange} id={this.firstId.id}/>],
        profExp: {
          id: this.firstId.id,
          company:"",
          title:"",
          from: null,
          to: null,
          description:""
        },
        profExpArr: []
        
    }
  }

  handleChange = (e) => {
    // e.preventDefault();
    let CheckForId = () => {
      var ret = false

      switch(e.target.className) {

      case "input":

      this.state.skillsArr.map(item => {
        if(item.id === e.target.id) {
          let index = this.state.skillsArr.indexOf(item);
          let temp = this.state.skillsArr;
          temp[index].input = e.target.value;
          this.setState( {
            skill: {
              input: e.target.value,
              
            },
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
      // console.log(this.state.skill.input)
      }
      break;

      case "profExp":

        this.state.profExpArr.map(item => {
          if(item.id === e.target.id) {
            
            let index = this.state.profExpArr.indexOf(item)
            let temp = this.state.profExpArr[index]
            temp[e.target.name] = e.target.value
            let substituteArr = this.state.profExpArr
            substituteArr.splice(index, 1, temp)
            
            this.setState( {
              profExp: temp,
              profExpArr: substituteArr
          })
         
            ret = true
          } 
        })
        
        if(ret === false) {
          const { name, value } = e.target
            this.setState( {
            
              profExp: {
                id: e.target.id,
                company:"",
                title:"",
                from: null,
                to: null,
                description:"",
                [name]: value
              },

              profExpArr: this.state.profExpArr.concat( {
                
                id: e.target.id,
                company:"",
                title:"",
                from: null,
                to: null,
                description:"",
                [name]: value
                
              })
          })
         
          }

        break;

        default:
          console.log("default")
      }
    }
    
    CheckForId();

  }

  // let teste = {A:2,B:3}
  // console.log(teste[Object.keys(teste)[Object.keys(teste).indexOf("A")]] = 5)
  // console.log(teste)

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
          addProf: this.state.addProf.concat(value),
          profExp: {
            id: value.props.id,
            company:"",
            title:"",
            from: null,
            to: null,
            description:""
          },
          profExpArr: this.state.profExpArr.concat({id: value.props.id,
            company:"",
            title:"",
            from: null,
            to: null,
            description:""})
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
         {console.log(this.state.input)}
          
          
        </form>

        <div className="preview">
          <label>Professional Experience</label><br></br>
          {this.state.profExpArr.map(item => {return <ProfPreview input={item}/>})}
          <label>Skills</label>
          {this.state.skillsArr.map(item => {return <SkillsPreview input={item.input}/>})}
        </div>
        
      </div>
      
    );
  }

}

export default App;
 