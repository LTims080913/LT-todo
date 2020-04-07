import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TaskList = props => {
    return(
        <>
        {props.tasks.map(item => (
            <Todo item={item} toggleTask={props.toggleTask}/>
        ))}
       <button onClick={props.finishedTask}>Clear All</button>
        </>
    )
}

export default TaskList