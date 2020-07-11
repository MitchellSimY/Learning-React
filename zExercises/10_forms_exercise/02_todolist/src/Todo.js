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
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleEvent.bind(this);
    }



    handleEvent(evt) {
        this.appearEditBox();
        
    }

    appearEditBox(todoDetails) {
        this.setState({
            isEditing: true
        })
        re
    }

    onSubmit(evt) {
        console.log(evt.target.name)
        this.setState({
            isEditing: false,

        })
    }

    handleChange(evt) {
        console.log("gang!");
        console.log(evt.target.name);
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    

    render() {
        
        return (
            <div>
                <h3><li>
                    {/* {this.state.todo} */}
                    {this.state.isEditing === false ? `${this.state.todo}` : <input type="text"
                        name="todo"
                        onChange={this.handleChange}
                    />}

                    {/* {this.state.isEditing === false ?
                        <button name="edit" onClick={this.handleEvent}>Edit!</button> :
                        <button name="done" onClick={this.onSubmit}>Done!</button>} */}

                    <button name="remove" onClick={this.props.removeTodo}>Remove!</button></li></h3>
            </div>
        )
    }
}

export default Todo;