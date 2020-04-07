import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
/* import './components/Todo.css' */
import './App.css'
import Styled from 'styled-components'
import Background from "./images/pexels-photo-3630026.jpeg"



/****Styles****/

/* first i created a App.css file to do a reset and imported it */

/* next i created a div to hold and import your image */

const ImageBackground = Styled.div `
display: flex;
justify-content:center;
background-image: url(${Background});
background-size:cover;
height: 100vh;
`
/* then I created another div to hold and justify your text */
const ContainerDiv = Styled.div`
display:flex;
flex-direction: column;
text-align: center;
width: 80%;
`
/* Wanted to give your header some space */

const ExcellentHeader = Styled.h1 `
padding: 8%;
margin-bottom: 5%;
color: white;
font-size: 1.5em;
`
/* next I went into your form to style it a bit. */

/************/

const tasks = [
    {
      task: 'Do Homework',
      id: 8092013,
      completed: false
    },
    {
      task: 'Clean Kitchen',
      id: 10151990,
      completed: false
    },
    {
      task: 'Walk Dogs',
      id: 9302010,
      completed: false
    },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };
  toggleTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map( task => {
        if (taskId === task.id) {
          return {
            ...task, 
            finished: !task.finished
          };
        }
        return task;
      })
    })
  }
  finishedTask = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(item => !item.finished)
    })
  }
  render() {
    return (
      <ImageBackground>
        <ContainerDiv>
        <ExcellentHeader>Welcome to your Todo App!</ExcellentHeader>
        
        <TodoForm addTask={this.addTask}/><TodoList 
        finishedTask={this.finishedTask} 
        todo={this.state.todo} 
        tasks={this.state.tasks}
        toggleTask={this.toggleTask}/>
        </ContainerDiv>
      </ImageBackground>
      
    );
  }
}

export default App;
