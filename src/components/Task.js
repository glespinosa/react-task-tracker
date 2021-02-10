import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { ACTIONS } from '../reducer/TaskReducer'
import { TaskContext } from '../context/TaskContext'

function Task({ task }) {
    const [tasks, { deleteTask, toggleReminder }] = useContext(TaskContext)
    return (
        <div
            onDoubleClick={() => toggleReminder(task.id)}
            className={task.reminder ? 'task reminder' : 'task'}
        >
            <h3>
                {task.text}
                <FaTimes
                    onClick={() => deleteTask(task.id)}
                    style={{ color: 'red', cursor: 'pointer' }}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
