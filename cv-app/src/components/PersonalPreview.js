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
            <div id="ppPhone">{this.props.input.number}<div id="telIcon"></div></div>
            <div id="ppEmail">{this.props.input.email}<div id="mailIcon"></div></div>
            <div id="ppLocation">{this.props.input.location}<div id="locationIcon"></div></div>
            <div id="ppSocial">{this.props.input.social}<div id="socialIcon"></div></div>
            <div id="ppGit">{this.props.input.github}<div id="gitIcon"></div></div>    
        </div>
        </div>
        </div>
        
        
    }
}