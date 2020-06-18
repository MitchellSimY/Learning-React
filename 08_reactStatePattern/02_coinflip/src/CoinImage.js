import React, { Component } from "react";
import "./CoinImage.css";

class CoinImage extends Component {
    
    render() {
        return (
            <div className="CoinImage">
                <img src={`https://tinyurl.com/react-coin-${this.props.coinState}-jpg`} />

            </div>
        )
    }
}

export default CoinImage;