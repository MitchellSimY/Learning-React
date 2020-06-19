import React, { Component } from "react";
import ChangeColors from "./ChangeColors";
import "./Boxes.css";

class Boxes extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("boxes click");
    }

    render() {
        return ( 
            <div onClick={this.handleClick} className="BoxesStyle">
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
                <ChangeColors />
            </div>
        )
    }
} 

export default Boxes;