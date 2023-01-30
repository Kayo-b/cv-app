import { render } from '@testing-library/react';
import React, { Component } from 'react';

export class SkillsPreview extends Component {

    render() {

        return <li>{this.props.input}</li>
    }
}