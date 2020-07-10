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
                <h3><li>{this.state.todo}
                <button>Edit!</button>
                <button>Remove!</button></li></h3>
            </div>
        )
    }
}

export default Todo;