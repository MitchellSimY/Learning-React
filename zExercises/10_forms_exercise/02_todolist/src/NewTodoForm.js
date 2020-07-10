import React, { Component } from "react";

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();

        this.props.addListFunction(this.state);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>New Todo!</label> <br></br>
                <input type="text"
                    name="todo"
                    value={this.state.todo}
                    onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default NewTodoForm;