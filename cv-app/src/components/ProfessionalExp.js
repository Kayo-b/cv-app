import React, { Component } from 'react';

export class ProfessionalExp extends Component {

    constructor(props) {

        super(props);

        this.state = {
            
        }
    }

    professionalExp = <div className="subDiv">
    <input  onChange={this.props.input} id={this.props.id} className="profExp" name="company" type="text" placeholder="Company's Name"></input>
    <input  onChange={this.props.input} id={this.props.id} className="profExp" name="title" type="text" placeholder='Title'></input>
    <input  onChange={this.props.input} id={this.props.id} className="profExp" name="from" type="text" placeholder='From' onFocus={e => e.target.type = "date"} onBlur={ e => e.target.type = "text"}></input>
    <input  onChange={this.props.input} id={this.props.id} className="profExp" name="to" type="text" placeholder='To' onFocus={e => e.target.type = "date"} onBlur={ e => e.target.type = "text"}></input>
    <textarea  onChange={this.props.input} id={this.props.id} className="profExp" name="description" type="text" placeholder='Job Description...'></textarea>
    </div>

//   professionalExpContainer = <div className="formDiv">
//           {this.professionalExp}
//           <p></p>
//   </div>

    render() {


   const professionalExpContainer = 
    <div className="formDiv" id={this.props.id}>
     {this.professionalExp}
        <p></p>
    </div>

        return(professionalExpContainer)
    }
}