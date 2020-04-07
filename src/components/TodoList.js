import React from 'react';
import Todo from './Todo';
import Styled from "styled-components"
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

/**** Styles ****/

/* I wanted to give a quick style to your clear button */

const TaskButton = Styled.button`
margin: 0 auto;
border-radius: 5px;
width: 10%;
height: 25px;
box-shadow: 5px 5px 8px black;
` 
/* onward to todo! */
/********/



const TaskList = props => {
    return(
        <>
        {props.tasks.map(item => (
            <Todo item={item} toggleTask={props.toggleTask}/>
        ))}
       <TaskButton onClick={props.finishedTask}>Clear All</TaskButton>
        </>
    )
}

export default TaskList