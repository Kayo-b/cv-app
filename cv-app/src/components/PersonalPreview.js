import React, { Component } from 'react';
import "../styles/PersonalPreviewStyle.css"

export class PersonalPreview extends Component {
    render() {
        return  <div id="mainPersonalContainer">        
        
        <div id="personalInfoHeader">
        <div id="mainHeader">
            <div id="ppName">{this.props.input.name}</div>
            <div id="ppTitle">{this.props.input.title}</div>
        </div>
        <div id="sideHeader">
            <div id="ppPhone">Phone Number: {this.props.input.number}</div>
            <div id="ppEmail">E-Mail: {this.props.input.email}</div>
            <div id="ppLocation">Location: {this.props.input.location}</div>
            <div id="ppSocial">Social: {this.props.input.social}</div>
            <div id="ppGit">GitHub: {this.props.input.github}</div>    
        </div>
        </div>
        </div>
        
        
    }
}