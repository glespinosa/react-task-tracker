import React, { useState } from 'react'
import Task from './Task'
function Tasks({ tasks }) {
    return (
        <>
            {tasks.map((task, index) => (
                <Task key={task.id} task={task} />
            ))}
        </>
    )
}

export default Tasks
