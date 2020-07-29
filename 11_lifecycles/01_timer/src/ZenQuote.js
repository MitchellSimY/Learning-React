import React, {Component} from 'react';
import axios from 'axios';

class ZenQuote extends Component {
    componentDidMount () {
        //load data
        axios.get("https://api.github.com/zen").then(response => {
            console.log(response);
        })

        // set state with data.

    }

    render() {
        return (
            <div>
                <h1>Quote: </h1>
                {/* <p>{this.state.quote}</p> */}
            </div>
        )
    }
}

export default ZenQuote;