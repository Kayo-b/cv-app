import React, { Component } from 'react';

export class Education extends Component {

    constructor(props) {

        super(props);

        this.state = {
            
        }
    }

    educationalHistory =           
    <div>
    <input  onChange={this.props.input} id={this.props.id} className="educHist" name="institution" type="text" placeholder="Institution"></input>
    <input  onChange={this.props.input} id={this.props.id} className="educHist" name="title" type="text" placeholder='Title'></input>
    <input  onChange={this.props.input} id={this.props.id} className="educHist" name="from" type="date" placeholder='From'></input>
    <input  onChange={this.props.input} id={this.props.id} className="educHist" name="to" type="date" placeholder='To'></input>
    <input  onChange={this.props.input} id={this.props.id} className="educHist" name="description" type="text" placeholder='Introduction...'></input> 
    </div>

    render() {


   const educationContainer = 
    <div className="formDiv" id={this.props.id}>
     {this.educationalHistory}
        <p></p>
    </div>

        return(educationContainer)
    }
}