import { useState, useEffect, useContext, useReducer } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import Footer from './components/Footer'
import { TaskContext } from './context/TaskContext'

function App() {
    const [tasks, { addTask, retrieveTasks }] = useContext(TaskContext)

    const [showAddTask, setShowAddTask] = useState(false)
    useEffect(() => {
        retrieveTasks()
    }, [])

    return (
        <Router>
            <div className='container'>
                <Header
                    isShow={showAddTask}
                    onClick={() => setShowAddTask(!showAddTask)}
                    title='Task Tracker'
                />

                <Route
                    path='/'
                    exact
                    render={(props) => (
                        <>
                            {showAddTask && <AddTask addTask={addTask} />}
                            {tasks.length > 0 ? (
                                <Tasks tasks={tasks} />
                            ) : (
                                'No tasks to show'
                            )}
                        </>
                    )}
                />

                <Route path='/about' component={About} />
                <Footer />
            </div>
        </Router>
    )
}

export default App
