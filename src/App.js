import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

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
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList finishedTask={this.finishedTask} todo={this.state.todo} tasks={this.state.tasks}/>
        
      </div>
    );
  }
}

export default App;
