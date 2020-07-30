import React, {Component} from "react"


class Card extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.cardInfo[0]);
    }
    render() {
        let card = this.props.cardInfo[0];
        return <div>
            <h2>{card.value} of {card.suit}</h2>
        </div>
    }
}

export default Card;