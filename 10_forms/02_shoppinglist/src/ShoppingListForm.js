import React, { Component } from "react";

class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            qty: ""
        };
    }


    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    
    render() {
        return (
            <form>
                <label>Name: </label>
                <input id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange} />
                
                <br></br>
                
                <label>Quantity: </label>
                <input id="qty"
                    name="qty"
                    value={this.state.qty}
                    onChange={this.handleChange} />

            </form>
        )
    }
}

export default ShoppingListForm;