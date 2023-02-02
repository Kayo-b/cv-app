import React, { Component } from 'react';

export class Education extends Component {

    constructor(props) {

        super(props);

        this.state = {
            
        }
    }

    educationalHistory =           
    <div className="subDiv">
    <input  onChange={this.props.input} id={this.props.id} className="educHist" name="institution" type="text" placeholder="Institution"></input>
    <input  onChange={this.props.input} id={this.props.id} className="educHist" name="title" type="text" placeholder='Title'></input>
    <input  onChange={this.props.input} id={this.props.id} className="educHist" name="from" type="text" placeholder='From' onFocus={e => e.target.type = "date"} ></input>
    <input  onChange={this.props.input} id={this.props.id} className="educHist" name="to" type="text" placeholder='To' onFocus={e => e.target.type = "date"} ></input>
    {/* {<textarea  onChange={this.props.input} id={this.props.id} className="educHist" name="description" type="text" placeholder='Introduction...'></textarea> } */}
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