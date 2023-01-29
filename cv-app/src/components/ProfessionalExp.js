import React, { Component } from 'react';

export class ProfessionalExp extends Component {

    constructor(props) {

        super(props);

        this.state = {
            
        }
    }

    professionalExp =           <div>
    <input  onChange={this.props.input} id={this.props.id} className="profExp" name="company" type="text" placeholder="Company's Name"></input>
    <input  onChange={this.props.input} id={this.props.id} className="profExp" name="title" type="text" placeholder='Title'></input>
    <input  onChange={this.props.input} id={this.props.id} className="profExp" name="from" type="date" placeholder='From'></input>
    <input  onChange={this.props.input} id={this.props.id} className="profExp" name="to" type="date" placeholder='To'></input>
    <input  onChange={this.props.input} id={this.props.id} className="profExp" name="description" type="text" placeholder='Duties'></input> </div>

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