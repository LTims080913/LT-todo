import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

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
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <p className="hide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue tempor mi, et efficitur risus porta a. Phasellus nisl leo, varius a pharetra at, maximus ut risus. Nullam lobortis ligula felis. Proin pretium nibh eu erat viverra, ac bibendum magna dapibus. Aliquam cursus nunc sed vulputate condimentum. Mauris at nunc tempus, pretium dolor sed, efficitur odio. Cras dignissim molestie massa, molestie sodales felis porttitor ut. Quisque aliquam scelerisque commodo. Sed nec lacus ligula. Vestibulum vitae dolor augue.

        Curabitur porttitor, ante at sagittis ornare, tortor risus volutpat nunc, a iaculis lacus ipsum eu nulla. Fusce eleifend nibh non cursus cursus. Sed luctus auctor quam a varius. Vestibulum facilisis vitae nisl quis mattis. Nunc maximus, leo vel convallis vulputate, quam massa eleifend odio, sit amet luctus nibh magna quis elit. Aenean venenatis pellentesque felis, non vulputate lorem euismod id. Ut quis facilisis mauris. Nam ultricies turpis sollicitudin tortor iaculis, at sagittis enim cursus. Vestibulum placerat massa in risus volutpat, vel sollicitudin justo posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue tempor mi, et efficitur risus porta a. Phasellus nisl leo, varius a pharetra at, maximus ut risus. Nullam lobortis ligula felis. Proin pretium nibh eu erat viverra, ac bibendum magna dapibus. Aliquam cursus nunc sed vulputate condimentum. Mauris at nunc tempus, pretium dolor sed, efficitur odio. Cras dignissim molestie massa, molestie sodales felis porttitor ut. Quisque aliquam scelerisque commodo. Sed nec lacus ligula. Vestibulum vitae dolor augue.
        Curabitur porttitor, ante at sagittis ornare, tortor risus volutpat nunc, a iaculis lacus ipsum eu nulla. Fusce eleifend nibh non cursus cursus. Sed luctus auctor quam a varius. Vestibulum facilisis vitae nisl quis mattis. Nunc maximus, leo vel convallis vulputate, quam massa eleifend odio, sit amet luctus nibh magna quis elit. Aenean venenatis pellentesque felis, non vulputate lorem euismod id. Ut quis facilisis mauris. Nam ultricies turpis sollicitudin tortor iaculis, at sagittis enim cursus. Vestibulum placerat massa in risus volutpat, vel sollicitudin justo posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue tempor mi, et efficitur risus porta a. Phasellus nisl leo, varius a pharetra at, maximus ut risus. Nullam lobortis ligula felis. 
        </p>
        <TodoForm addTask={this.addTask}/><TodoList 
        finishedTask={this.finishedTask} 
        todo={this.state.todo} 
        tasks={this.state.tasks}
        toggleTask={this.toggleTask}/>
      </div>
      
    );
  }
}

export default App;
