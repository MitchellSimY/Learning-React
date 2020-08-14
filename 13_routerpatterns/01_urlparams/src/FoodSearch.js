import React, { Component } from "react";

class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { query: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            query: evt.target.value;
        })
    }

    render() {
        return (
            <div>
            <h1>Search for a food</h1>
                <input type="text" placeholder="Search for a food" 
                value={this.state.query} onChange={this.handleChange} />
            </div>
        )
    }
}

export default FoodSearch;