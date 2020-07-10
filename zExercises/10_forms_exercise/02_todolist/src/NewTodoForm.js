import React, {Component} from "react";

class NewTodoForm extends Component {
    render() {
        return(
            <form>
                <input type = "text" 
                name="todo"
                /> 
                <button>Add</button>
            </form>
        )
    }
}

export default NewTodoForm;