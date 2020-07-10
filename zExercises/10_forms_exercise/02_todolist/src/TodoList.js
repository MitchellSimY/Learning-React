import React, {Component} from "react";
import NewToDoForm from "./NewTodoForm";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: []
        };

        this.addList = this.addList.bind(this);
    }


    addList(list) {
        // console.log(`Adding todo! ${list.todo}`);
        
    
    }

    renderList() {

    }

    render() {
        return( 
            <div>
                <p>TodoList Component</p>
                <NewToDoForm addListFunction={this.addList}/>
            </div>
        )
    }
}

export default TodoList;