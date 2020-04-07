import React from 'react';
import Styled from "styled-components"

/**** Styles ****/

/* first I wanted to give your input some space and make it a bit bigger*/

const AwesomeInput = Styled.input `
margin: 3%;
padding: .5% 3%;
width: "50";
height: "15";
border-radius: 15px;
`

/* then I gave your button a bit of styling */

const AwesomeButton = Styled.button `
background: linear-gradient(21deg, rgba(115,226,15,1) 0%, rgba(9,28,121,1) 49%, rgba(0,168,255,1) 100%);
box-shadow: 5px 5px 8px royalBlue;
padding: .5% 1%;
color: white;
border-radius: 5px;
font-size: .8em;
`

/* Then I went to your list to style that! */
/***********/



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
            <AwesomeInput
                type ="text"
                value = {this.state.todo}
                name = "item"
                onChange = {this.handleChanges}
                />

            <AwesomeButton>Submit</AwesomeButton>
            
        </form>
    )
}
}
export default TodoForm
 