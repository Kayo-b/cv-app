import React, { Component } from 'react';

export class EducPreview extends Component {
    render() {
        return <div>        <li>Institution: {this.props.input.institution}</li>
        <li>Title: {this.props.input.title}</li>
        <li>From: {this.props.input.from}</li>
        <li>To: {this.props.input.to}</li>
        <li>Description: {this.props.input.description}</li></div>
    }
}