import React from 'react';
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
import store from "./store/index";
import { observer } from 'mobx-react';

class App extends React.Component {
  render() {
    const { sortedTasks, activeTasks } = store;

    return (
      <div className="container">
        <ul className="collection with-header">
          <li className="collection-header blue darken-2"><h1>Active task: {activeTasks}</h1></li>
          {
            sortedTasks.map(task =>
              <Task
                doneTask={() => store.doneTask(task.id)}
                deleteTask={() => store.deleteTask(task.id)}
                task={task} key={task.id}
              />
            )
          }
        </ul>
        <TaskInput addTask={v => store.addTask(v)} />
      </div>
    )
  }
}

export default observer(App);