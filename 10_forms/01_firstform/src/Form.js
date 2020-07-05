import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Null"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({ username: evt.target.value })
    }

    handleSubmit(evt) {
        console.log("tst");
        alert(`You typed: ${this.state.username}`)
        this.setState({ username: "" })
    }

    render() {
        return (
            <div>
                <h1>Form demo</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.handleChange} />
                    <input type="email" placeholder="Email!" />
                    <input type="password" placeholder="Password" />

                    <button>Submit!</button>
                </form>

                <p>Name is: {this.state.username}</p>


            </div>
        )
    }
}

export default Form;