import React from 'react';



class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }

handleChanges = e => {
     this.setState({ todo: e.target.value });
};
submitTodo = e => {
    e.preventDefault();
    this.setState({  todo: '' });
    this.props.addTask(e, this.state.todo)


}

render() {
    return(
        <form onSubmit={this.submitTodo}>
            <input
                type ="text"
                value = {this.state.todo}
                name = "item"
                onChange = {this.handleChanges}
                />

            <button>Submit</button>
            
        </form>
    )
}
}
export default TodoForm
 