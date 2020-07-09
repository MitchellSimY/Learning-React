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
        // console.log(`Box information: ${box}`);
        this.setState(state => ({
            boxes: [...this.state.boxes, box]
        }));
        // console.log(`State: ${this.state.boxes}`);
        return false;
    }

    removeBox(id) {
        this.setState ({
            boxes: this.state.boxes.filter(box => box.id !== id)
        });

        return false;
    }

    renderBoxes() {
        return (
            <div>
                {this.state.boxes.map(boxes => (
                    <Box color={boxes.color}
                        height={boxes.height}
                        width={boxes.width}
                        removeBox={() => this.removeBox(boxes.id)}
                        key = {boxes.id}
                    />
                ))}
            </div>
        )
    }

    render() {
        return (
            <div>
                <NewBoxForm addBox={this.addBoxes} />
                {this.renderBoxes()}
            </div>
        )
    }
}

export default BoxList;