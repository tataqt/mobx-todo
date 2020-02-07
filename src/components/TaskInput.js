import React, { Component } from 'react';

class TaskInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    addTask = () => {
        const { input } = this.state;
        if (input) {
            this.props.addTask(input);
            this.setState({ input: `` })
        }
    }

    handleEnter = event => {
        if (event.key === 'Enter') this.addTask();
    }

    inputChange = event => {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        const { input } = this.state;
        
        return (
            <>
                <input
                    placeholder="Enter your task"
                    type="text"
                    value={input}
                    onChange={this.inputChange}
                    onKeyPress={this.handleEnter}
                />
                <button className="waves-effect waves-light btn" onClick={this.addTask}>Add task</button>
            </>
        );
    }
}

export default TaskInput;