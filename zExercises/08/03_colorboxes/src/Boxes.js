import React, { Component } from "react";
import ChangeColors from "./ChangeColors";
import "./Boxes.css";

class Boxes extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {
        numBoxes: 18,
    }

    handleClick() {
        console.log("boxes click");
    }

    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => <ChangeColors />)
        return (
            <div onClick={this.handleClick} className="BoxesStyle">
                {boxes}
            </div>
        )
    }
}

export default Boxes;