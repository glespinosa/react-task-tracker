import React, { useState } from 'react'

function AddTask({ addTask }) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submitTask = (e) => {
        e.preventDefault()

        if (!text || !day) {
            alert('Please add a task')
            return
        }
        addTask({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form onSubmit={(e) => submitTask(e)} className='add-form'>
            <div className='form-control'>
                <label htmlFor=''>Task</label>
                <input
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Add Task'
                />
            </div>
            <div className='form-control'>
                <label htmlFor=''>Day & Time</label>
                <input
                    type='text'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    placeholder='Add Day & Time'
                />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor=''>Set Reminder</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input
                type='submit'
                value='Save Task'
                className='btn btn-block'
                style={{ background: 'black' }}
            />
        </form>
    )
}

export default AddTask
