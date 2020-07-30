import React, {Component} from "react"


class Card extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.cardInfo[0]);
    }
    render() {
        let card = this.props.cardInfo[0];
        return <div>
            <img src={card.image} />
        </div>
    }
}

export default Card;