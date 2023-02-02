import React, { Component } from 'react';

export class PersonalData extends Component {

    personalData = 
    
    <div className="subDiv">
    <input  onChange={this.props.input} id={this.props.id} className="personalData" name="name" type="text" placeholder="Name"></input>
    <input  onChange={this.props.input} id={this.props.id} className="personalData" name="title" type="text" placeholder='Title'></input>
    <input  onChange={this.props.input} id={this.props.id} className="personalData" name="number" type="number" placeholder='Phone Number'></input>
    <input  onChange={this.props.input} id={this.props.id} className="personalData" name="email" type="email" placeholder='E-Mail'></input>
    <input  onChange={this.props.input} id={this.props.id} className="personalData" name="location" type="text" placeholder='Location...'></input>
    <input  onChange={this.props.input} id={this.props.id} className="personalData" name="social" type="text" placeholder='Social Media'></input>
    <input  onChange={this.props.input} id={this.props.id} className="personalData" name="github" type="text" placeholder='GitHub'></input>
    <textarea  onChange={this.props.input} id={this.props.id} className="personalData" name="description" type="text" placeholder='Introduction...'></textarea> 
    </div>
    
    
    
    
    // <div>
    //     <li>Company: {this.props.input.company}</li>
    //     <li>Title: {this.props.input.title}</li>
    //     <li>From: {this.props.input.from}</li>
    //     <li>To: {this.props.input.to}</li>
    //     <li>Description: {this.props.input.description}</li></div>
    

    render() {

        return this.personalData;
    }
}