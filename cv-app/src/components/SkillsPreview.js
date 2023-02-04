import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "../styles/SkillsPreviewStyle.css"

export class SkillsPreview extends Component {

    render() {

        return <div id="skillsPreview">{this.props.input}</div>
    }
}