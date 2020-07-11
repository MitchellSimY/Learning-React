import React, { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: `${this.props.todo}`,
            id: `${this.props.key}`
        }
    }

    handleEvent(evt) {

    }

    render() {
        return (
            <div>
                <h3><li>{this.state.todo}
                    <button name="edit" onClick={this.handleEvent}>Edit!</button>
                    <button name="remove" onClick={this.props.removeTodo}>Remove!</button></li></h3>
            </div>
        )
    }
}

export default Todo;