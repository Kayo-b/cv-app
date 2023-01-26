import React, { Component } from 'react';


export class Skills extends Component {

    constructor(props) {
        super(props)
    }

    render(props) {
       const skillsContainer = <div className="formDiv">
<div><input type="text" placeholder="5 most relevant skills" onChange={this.props.input}></input> </div>
</div>

        const skillArray = []
        skillArray.push(skillsContainer)
        return(
            skillArray
            
        )
    }
}
