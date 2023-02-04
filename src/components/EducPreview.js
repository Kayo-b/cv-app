import React, { Component } from 'react';
import "../styles/EducPreviewStyle.css"

export class EducPreview extends Component {
    render() {
        
        let toFunc = () => {
            if(this.props.input.from) {
                return " to "
            }
        }
        if(this.props.input) {
            return <div id="educContainer">    
            <div>{this.props.input.institution}</div>    
            <div>{this.props.input.title}</div>
            <div id="dates">{this.props.input.from}{toFunc()}{this.props.input.to}</div>
            </div>
        }

    }
}