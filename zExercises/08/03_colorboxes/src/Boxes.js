import React, { Component } from "react";
import ChangeColors from "./ChangeColors";
import "./Boxes.css";

class Boxes extends Component {
    static defaultProps = {
        numBoxes: 35,
    }

    handleClick() {
        console.log("boxes click");
    }

    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => <ChangeColors />)
        return (
            <div className="BoxesStyle">
                {boxes}
            </div>
        )
    }
}

export default Boxes;