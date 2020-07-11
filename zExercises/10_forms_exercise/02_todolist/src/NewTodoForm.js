import React, { Component } from "react";
import { uuid } from 'uuidv4';

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

        let id = uuid();
        const newTodoListItem = {...this.state,id};

        this.props.addListFunction(newTodoListItem);
    }

    handleChange(evt) {
        console.log("gang");
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
                    onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default NewTodoForm;