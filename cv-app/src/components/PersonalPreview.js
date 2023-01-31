import React, { Component } from 'react';

export class PersonalPreview extends Component {
    render() {
        return <div>
        <li>Name: {this.props.input.name}</li>
        <li>Title: {this.props.input.title}</li>
        <li>Phone Number: {this.props.input.number}</li>
        <li>E-Mail: {this.props.input.email}</li>
        <li>Location: {this.props.input.location}</li>
        <li>Introduction: {this.props.input.description}</li>
        </div>
    }
}