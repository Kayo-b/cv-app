import React, { Component } from 'react';
import "../styles/EducPreviewStyle.css"

export class EducPreview extends Component {
    render() {
        if(this.props.input) {
            return <div id="educContainer">        
            <div>{this.props.input.title}</div>
            <div>{this.props.input.institution}</div>
            <div id="dates">{this.props.input.from} {this.props.input.to}</div>
            </div>
        }
        if(this.props.emptyInput) {
            return <div id="educContainer">        
            <div>{this.props.emptyInput.title}</div>
            <div>{this.props.emptyInput.institution}</div>
            <div id="dates">{this.props.emptyInput.from} {this.props.emptyInput.to}</div>
            </div>
        }
        return

    }
}