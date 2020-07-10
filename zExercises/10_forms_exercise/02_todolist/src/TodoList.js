import React, { Component } from "react";
import NewToDoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: []
        };

        this.addList = this.addList.bind(this);
    }


    addList(incomingList) {
        // console.log(`Adding todo! ${list.todo}`);
        // console.log(`Adding todo! ${list.id}`);

        this.setState(state => ({
            todoList: [...this.state.todoList, incomingList]
        }))

        return false;
    }

    renderList() {
        return (
            <div>
                {this.state.todoList.map(list => (
                    <Todo todo={list.todo}
                        key={list.id}
                    />
                ))}
            </div>
        )
    }

    render() {
        return (
            <div>
                <p>TodoList Component</p>
                
                {this.renderList()}
                <NewToDoForm addListFunction={this.addList} />
            </div>
        )
    }
}

export default TodoList;