import React, {Component} from "react";
import NewToDoForm from "./NewTodoForm";

class TodoList extends Component {
    render() {
        return( 
            <div>
                <p>TodoList Component</p>
                <NewToDoForm />
            </div>
        )
    }
}

export default TodoList;