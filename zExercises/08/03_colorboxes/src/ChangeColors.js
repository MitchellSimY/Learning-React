import React, { Component } from "react";

class ChangeColors extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            width: '215px',
            height: '215px',
            float: 'left'
        }
    }

    handleClick() {
        this.ChangingColors();
    }

    ChangingColors() {
        this.setState(currentState => ({
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`
        }))
    }

    render() {
        return (
            <div style={this.state} onClick={this.handleClick} />
        )
    }
}

export default ChangeColors;