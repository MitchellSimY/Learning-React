import React, {Component} from 'react';
import axios from 'axios';

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        // Always initialize it into something.
        // Without this - there would be errors.
        // Why? Because the componentDidMount is rednered afterwards.   
        this.state = {quote: ""}
    }

    componentDidMount () {
        //load data
        axios.get("https://api.github.com/zen").then(response => {
            console.log(response.data);
            this.setState({
                quote: response.data
            });
        })

        // set state with data.

    }

    render() {
        return (
            <div>
                <h1>Quote: </h1>
                <p>{this.state.quote}</p>
            </div>
        )
    }
}

export default ZenQuote;