import React, { Component } from 'react';
import { PersonalData } from './components/PersonalData';
import { PersonalPreview } from './components/PersonalPreview';
import { Education } from './components/Education';
import { EducPreview } from './components/EducPreview';
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
//---Skill States---//
        addSkill: [<Skills input={this.handleChange} id={this.firstId.id}/>],
        skill: {
          input:"",
          id:  this.firstId.id
        },
        skillsArr: [{
          input:"",
          id:  this.firstId.id
        }],
//---Professional Experience States---//
        addProf: [<ProfessionalExp input={this.handleChange} id={this.firstId.id}/>],
        profExp: {
          id: this.firstId.id,
          company:"",
          title:"",
          from: null,
          to: null,
          description:""
        },
        profExpArr: [],
//---Educational History States---//
        addEduc: [<Education input={this.handleChange} id={this.firstId.id}/>],
        educHist: {
          id: this.firstId.id,
          title:"",
          institution:"",
          from: null,
          to: null,
          description:""
        },
        educHistArr: [],
//---Personal Info States---//
        addPersonalData: [<Education input={this.handleChange} id={this.firstId.id}/>],
        personalData: {
          id: this.firstId.id,
          name:"",
          title:"",
          number:"",
          email:"",
          location:"",
          social: "",
          github: "",
          description:""
        },
        personalDataArr: {
          id: this.firstId.id,
          name:"John Pastrami",
          title:"Software Engineer",
          number:"45 112 34109931",
          email:"jpastrami@mail.com",
          location:"Berlin",
          social: "linkedin.com/johnpasta",
          github: "jp-strami.github.io",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        }
        
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

        case "educHist":

        this.state.educHistArr.map(item => {
          if(item.id === e.target.id) {
            
            let index = this.state.educHistArr.indexOf(item)
            let temp = this.state.educHistArr[index]
            temp[e.target.name] = e.target.value
            let substituteArr = this.state.educHistArr
            substituteArr.splice(index, 1, temp)
            
            this.setState( {
              educHist: temp,
              educHistArr: substituteArr
          })
         
            ret = true
          } 
        })
        
        if(ret === false) {
          const { name, value } = e.target
            this.setState( {
            
              educHist: {
                id: e.target.id,
                institution:"",
                title:"",
                from: null,
                to: null,
                description:"",
                [name]: value
              },

              educHistArr: this.state.educHistArr.concat( {
                
                id: e.target.id,
                institution:"",
                title:"",
                from: null,
                to: null,
                description:"",
                [name]: value
                
              })
          })
         
          }

        break;

        case "personalData":
          const { name, value } = e.target
          let newStateObj = this.state.personalDataArr
          newStateObj[name] = value
            this.setState( {

              personalData: newStateObj,

              personalDataArr:  newStateObj

          })

          break;

        default:
          console.log("default")
      }
    }
    
    CheckForId();

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
          addProf: this.state.addProf.concat(value),
          profExp: {
            id: value.props.id,
            company:"",
            title:"",
            from: null,
            to: null,
            description:""
          },
          profExpArr: this.state.profExpArr.concat({
            id: value.props.id,
            company:"",
            title:"",
            from: null,
            to: null,
            description:""
          })
        })
        break;

        case "addEduc":

        this.setState({ 
          addEduc: this.state.addEduc.concat(value),
          educHist: {
            id: value.props.id,
            title:"",
            institution:"",
            from: null,
            to: null,
            description:""
          },
          educHistArr: this.state.educHistArr.concat({
            id: value.props.id,
            title:"",
            institution:"",
            from: null,
            to: null,
            description:""
          })
        })
        break;
      
      default:
        console.log("default")

    }
    


  }

  render() {
    const { addSkill, addProf, addEduc, personalDataArr } = this.state
    return (
      <div className="App">
        <form className="cvForm">
        <div className="inputBlocks">
          <h3>Personal Data</h3>
          {<PersonalData input={this.handleChange} id={uniqid()}/>}
        </div>
        <div className="inputBlocks">
          <h3>Education</h3>
          {addEduc}
          <button className="addEduc" onClick={(e) => this.addButton("addEduc",<Education input={this.handleChange} id={uniqid()}/>, e)}><span>Add</span></button>
        </div>
        <div className="inputBlocks">
          <h3>Professional Experience</h3>
          {addProf}
          <button className="addProf" onClick={(e) => this.addButton("addProf",<ProfessionalExp input={this.handleChange} id={uniqid()}/>, e)}><span>Add</span></button>
        </div>
        <div className="inputBlocksX">
          <h3>Skills</h3>
          {addSkill}
          <button className="addSkills" onClick={(e) => this.addButton("addSkills", <Skills input={this.handleChange} id={uniqid()}/>, e)}><span>Add</span></button>
        </div>
        
         
          
          
      </form>
      
{/* --------- CV Preview Element ---------- */}

        <div className="preview">
            <PersonalPreview input={personalDataArr}/>
          <div  id="prevBody">
            <div  id="prevSideBar">
              <h3 className="sideBar">Education</h3>
              <EducPreview emptyInput={this.state.educHistArr}/>
              {this.state.educHistArr.map(item => {return <EducPreview input={item}/>})}
              <h3 className="sideBarSkills">Skills</h3>
              {this.state.skillsArr.map(item => {return <SkillsPreview input={item.input}/>})}
            </div>
            <div id="profileExpContainer"> 
              <div id="mainProfContainer">
                <h3 className="bodyTitle">Profile</h3>
                {<ProfPreview profile={personalDataArr.description}/>}
              </div>
              <div id="mainExpContainer">
                <h3 className="bodyTitle">Experience</h3>
                {this.state.profExpArr.map(item => {return <ProfPreview input={item}/>})}     
              </div>
            </div>
          </div>
        </div>    
      </div>
      
    );
  }

}

export default App;
 