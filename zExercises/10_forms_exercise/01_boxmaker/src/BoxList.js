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
        console.log(box);
        this.setState(state => ({
            boxes: [this.state.boxes, box]
        }));
        console.log(this.state.boxes);
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
                

            </div>
        )
    }
}

export default BoxList;