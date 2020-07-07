import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        // This is how you handle multiple onChange events. 
        // The keyword here is evt.target.NAME. This gets the NAME of the thing you want to change. 
        // State and the "name" prop must be the same.
        this.setState({ [evt.target.name]: evt.target.value })
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
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange} />


                    <button>Submit!</button>
                    <p>Name is: {this.state.username}</p>
                    <br />

                    <h1> Form with multiple inputs.</h1>

                    {/* Email textbox. */}
                    <input type="email"
                        name='email'
                        placeholder="Email!"
                        value={this.state.email}
                        onChange={this.handleChange}

                    />
                    {/* password textbox. */}
                    <input type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <p>Email and PW: {this.state.email} and {this.state.password} </p>

                </form>




            </div>
        )
    }
}

export default Form;