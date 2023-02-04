import React, { Component } from 'react';
import "../styles/ProfPreviewStyle.css"

export class ProfPreview extends Component { 

    render() {

        let toFunc = () => {
            if(this.props.input.from) {
                return " to"
            }
        }
        if(this.props.profile) {
            return <div id="profile">{this.props.profile}</div>
        }
        if(this.props.input) {
            return <div id="profContainer">
        
            <div id="companyName">{this.props.input.company}</div>
            <div id="jobTitle">{this.props.input.title}</div>
            <div id="profDates">
                <div>{this.props.input.from} {toFunc()}</div>
                <div>{this.props.input.to}</div>
            </div>
            
            <div id="profDescription">{this.props.input.description}</div>
            </div>
        }

       return
    }
}