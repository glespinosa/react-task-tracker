import React, { createContext, useReducer } from 'react'
import { ACTIONS, reducer } from '../reducer/TaskReducer'

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const initialState = []
    const apiEndpoint = 'http://localhost:5000/tasks'
    const [tasks, dispatch] = useReducer(reducer, initialState)

    const retrieveTasks = async () => {
        const res = await fetch(apiEndpoint)
        const tasks = await res.json()
        dispatch({ type: ACTIONS.RETRIEVE_TASKS, payload: tasks })
    }

    const deleteTask = async (id) => {
        await fetch(`${apiEndpoint}/${id}`, {
            method: 'DELETE',
        })
        dispatch({
            type: ACTIONS.DELETE_TASK,
            payload: { id },
        })
    }

    const addTask = async (payload) => {
        const response = await fetch(`${apiEndpoint}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        const data = await response.json()
        console.log(payload)
        dispatch({ type: ACTIONS.ADD_TASK, payload: data })
    }

    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = {
            ...taskToToggle,
            reminder: !taskToToggle.reminder,
        }
        const res = await fetch(apiEndpoint + `/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updTask),
        })

        const data = await res.json()
        console.log(data)

        dispatch({
            type: ACTIONS.TOGGLE_REMINDER,
            payload: { id },
        })
    }

    const fetchTask = async (id) => {
        const res = await fetch(apiEndpoint + `/${id}`)
        const data = await res.json()
        return data
    }
    return (
        <TaskContext.Provider
            value={[
                tasks,
                {
                    retrieveTasks,
                    deleteTask,
                    addTask,
                    toggleReminder,
                },
            ]}
        >
            {children}
        </TaskContext.Provider>
    )
}
