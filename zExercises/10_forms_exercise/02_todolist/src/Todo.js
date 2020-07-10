import React, { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: `${this.props.todo}`,
            id: `${this.props.key}`
        }
    }

    render() {
        return (
            <div>
                <h2><li>{this.state.todo}</li></h2>
                
            </div>
        )
    }
}

export default Todo;