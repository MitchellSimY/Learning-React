import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.addBoxes = this.addBoxes.bind(this);
    }

    addBoxes(box) {
        this.setState(state => ({
            boxes: [...state.boxes, box]
        }));
        return false;
    }

    renderBoxes() {
        return (
            <div>
                {this.state.boxes.map(boxes => (
                   <Box /> 
                ))}
            </div>
        )
    }

    render() {
        return (
            <div>
                <NewBoxForm addBox={this.addBoxes} />
                {this.renderBoxes}
                {this.state.boxes.color}
                {this.state.boxes.height}
                {this.state.boxes.width}

            </div>
        )
    }
}

export default BoxList;