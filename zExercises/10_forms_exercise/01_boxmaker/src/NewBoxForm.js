import React, { Component } from "react";

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "",
            height: "",
            color: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBox(this.state);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Box Maker!</h1>
                    <label>Width: </label>
                    <input type="text" name="width"
                        value={this.state.width}
                        onChange={this.handleChange}></input><br></br>

                    <label>Height: </label>
                    <input type="text" name="height"
                        value={this.state.height}
                        onChange={this.handleChange}></input><br></br>

                    <label>Color: </label>
                    <input type="text" name="color"
                        value={this.state.color}
                        onChange={this.handleChange}></input>

                    <button>Add new box!</button>
                </form>
                {this.state.color}

                
            </div>
        )
    }
}

export default NewBoxForm;