import React, { Component } from "react";

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: `${this.props.color}`,
            width: `${this.props.width}em`,
            height: `${this.props.height}em`
            
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(evt) {
    //     this.props.removeBox(this.state);
    //     return false;
    // }

    render() {
        return (
            <div style={this.state} key={this.props.key}>
            <p onClick={this.props.removeBox}>x</p></div>
        )
    }
}

export default Box;