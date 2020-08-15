import React, { Component } from "react";
import { Link } from "react-router-dom";

class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { query: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(evt) {
        this.setState({
            query: evt.target.value
        })
    }

    handleClick() {
        // Do something.
        alert("Saved food to Database!");
        // Redirect
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h1>Search for a food</h1>
                {/* Essentially in here, there's an input.
                The input is then saved into the state, and the state is given 
                a search in the LINK tag. */}
                <input type="text" placeholder="Search for a food"
                    value={this.state.query} onChange={this.handleChange} />
                <Link to={`/food/${this.state.query}`}>GOGOGO!</Link>
                <button onClick={this.handleClick}>Save New Food!</button>
            </div>
        )
    }
}

export default FoodSearch;