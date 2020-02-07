import React from 'react';
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 0, title: 'Create todo list', done: true },
        { id: 1, title: 'Add mobx', done: false },
        { id: 2, title: 'pust to git', done: false },
      ]
    }
  }

  doneTask = (id) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    })
  }

  deleteTask = (id) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    });
  }

  addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        title: task,
        done: false
      })
      return tasks;
    })
  }

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    return (
      <div className="container">
        <ul className="collection with-header">
          <li className="collection-header blue darken-2"><h1>Active task: {activeTasks.length}</h1></li>
          {
            [...doneTasks, ...activeTasks].map(task =>
              <Task
                doneTask={() => this.doneTask(task.id)}
                deleteTask={() => this.deleteTask(task.id)}
                task={task} key={task.id}
              />
            )
          }
        </ul>
        <TaskInput addTask={this.addTask} />
      </div>
    )
  }
}

export default App;
