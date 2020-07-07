import React, { Component } from "react"; import ShoppingListForm from "./ShoppingListForm";
import uuid from "uuid/v4";

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: "Milk", qty: "2 gallons", id: uuid() },
                { name: "Bread", qty: "2 loaves", id: uuid() }
            ]
        };
    }
    renderItems() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li>
                        {item.name}:{item.qty}
                    </li>
                ))}
            </ul>
        );
    }
    render() {
        return (
            <div>
                <h1>Shopping List</h1>
                {this.renderItems()}
            </div>
        );
    }
}
export default ShoppingList;
