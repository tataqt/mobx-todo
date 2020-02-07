import React from 'react';

const Task = ({ task, ...props }) => {
    const ActionButton = () => (
        <>
            {
                task.done ?
                    <span className="teal-text text-accent-2" onClick={props.deleteTask}>&#10008;</span> :
                    <span className="red-text text-accent-1" onClick={props.doneTask}>&#10004;</span>
            }
        </>
    )

    const className = `collection-item ${!task.done ? 'grey' : ''}`

    return (
        <div>
            <li className={className}>{task.title} <ActionButton /></li>
        </div>
    );
}

export default Task;