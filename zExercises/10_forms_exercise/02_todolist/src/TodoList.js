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
                        removeTodo={() => this.removeTodo(list.id)}
                    />
                ))}
            </div>
        )
    }

    editTodo() {

    }
    
    removeTodo(id) {
        this.setState({
            todoList: this.state.todoList.filter(list => list.id !== id)
        })
    }

    render() {
        return (
            <div>
                <h1>My Todo List!</h1>
                {this.renderList()}
                <NewToDoForm addListFunction={this.addList} />
            </div>
        )
    }
}

export default TodoList;