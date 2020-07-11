import React, { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: `${this.props.todo}`,
            id: `${this.props.key}`,
            isEditing: false
        }
        this.handleEvent = this.handleEvent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleEvent.bind(this);
    }

    handleEvent(evt) {
        this.setState({
            isEditing: true
        })
        this.appearEditBox();
    }

    appearEditBox() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    name="todo"
                    onChange={this.handleChange}/>
                <button>Done!</button>
            </form>

        )
    }

    handleSubmit(evt) {
        let editedTodoName = evt.target.todo.value;
        console.log(editedTodoName);
        this.setState({
            isEditing: false,
        })
        this.props.editTodo(editedTodoName);
    }


    todoDisplay() {
        return (
            <div>
                <h3><li>
                    {this.state.todo}{this.state.isEditing === false ?
                        <button name="edit" onClick={this.handleEvent}>Edit!</button> : this.appearEditBox()}

                    <button name="remove" onClick={this.props.removeTodo}>Remove!</button></li> </h3>

            </div>
        )
    }


    render() {
        return (
            <div>
                {this.state.isEditing === false ? this.todoDisplay() : this.appearEditBox()}
            </div>
        )
    }
}

export default Todo;