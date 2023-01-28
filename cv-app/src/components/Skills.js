import React, { Component } from 'react';


export class Skills extends Component {

    constructor(props) {
        super(props)
    }

    render(props) {
       const skillsContainer = <div className="formDiv">
<div><input className="input" type="text" placeholder="5 most relevant skills" onChange={this.props.input} id={this.props.id}></input> </div>
</div>

        const skillArray = []
        skillArray.push(skillsContainer)
        return(
            skillsContainer
            
        )
    }
}
