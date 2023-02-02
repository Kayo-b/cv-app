import React, { Component } from 'react';
import "../styles/ProfPreviewStyle.css"

export class ProfPreview extends Component { 

    render() {
        if(this.props.profile) {
            return <div id="profile">{this.props.profile}</div>
        }
        if(this.props.input) {
            return <div id="profContainer">
        
            <div>Company: {this.props.input.company}</div>
            <div>Title: {this.props.input.title}</div>
            <div id="profDates">
                <div>From: {this.props.input.from}</div>
                <div>To: {this.props.input.to}</div>
            </div>
            
            <div>Description: {this.props.input.description}</div>
            </div>
        }

       return
    }
}