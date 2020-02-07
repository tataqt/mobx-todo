import { decorate, observable, computed, action } from "mobx";

class Store {
    tasks = [
        { id: 0, title: 'Create todo list', done: true },
        { id: 1, title: 'Add mobx', done: true },
        { id: 2, title: 'Pust to git', done: true },
        { id: 3, title: 'Check it!', done: false },
    ];

    setTask(payload) {
        this.tasks = payload;
    }

    get sortedTasks() {
        return this.tasks.slice().sort((a, b) => a.done === b.done ? 0 : b.done ? 1 : -1);
    }

    get activeTasks() {
        return this.tasks.filter(task => !task.done).length;
    }

    addTask = task => {
        let tasks = this.tasks;
        tasks.push({
            id: tasks.length || 0,
            title: task,
            done: false
        })
        this.setTask(tasks);
    }

    doneTask = (id) => {
        let tasks = this.tasks;
        const index = tasks.map(task => task.id).indexOf(id);
        tasks[index].done = true;
        this.setTask(tasks);
    }

    deleteTask = (id) => {
        let tasks = this.tasks.filter(task => task.id !== id);
        this.setTask(tasks);
    }
}

Store = decorate(Store, {
    tasks: observable,
    activeTasks: computed,
    sortedTasks: computed,
    addTask: action,
    deletetask: action,
    doneTask: action
});

export default new Store();