import React from 'react'
import { TaskInput } from '../components/TaskInput';
import { TaskList } from '../components/TaskList';
import { useState, useEffect } from 'react'
import { onSnapshot, collection, doc } from 'firebase/firestore'
import db from '../utils/firebase'

export const Dashboard = () => {

    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFilteredTasks] = useState(tasks)
    const [filterStatus, setFilterStatus] = useState("all")

    useEffect(() => {
    // get data and listens for updates
    const unsub = onSnapshot(collection(db, "tasks"), (snapshot) => { // reference the collection you want to use then state what you want to do with the info
        // console.log(snapshot.docs.map(doc => {
        //   return {...doc.data(), id: doc.id}
        // }))
        // console.log(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))) // this function gives a new array 
        let todos = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})) // this function gives a new array
        setFilteredTasks(todos)
  
        const handleFilter = () => {
          if(filterStatus === "active") {
            setFilteredTasks(todos.filter((task) => task.status === false))
          } else if(filterStatus === "completed") {
            setFilteredTasks(todos.filter((task) => task.status === true))
          } else {
            setFilteredTasks(todos)
          }
        }
        handleFilter()
      }) // onSnapshot was imported from firebase. this grabs a snapshot of the data
      // getData() - not recommended to grab data this way; snapshot is better
      return unsub
    }, [filterStatus])

  return (
    <div className='Dashboard'>
        <div className='container'>

            <div className='header'>
                <h1>TODO</h1>
                <img src='./images/icon-sun.svg' alt='sun'/>
            </div>

            {/* ADD TO TASK INPUT COMPONENT */}
            <TaskInput tasks = {tasks} setTasks = {setTasks}/>

            {/* MAKE A TASK LIST COMPONENT */}
            <TaskList 
                tasks = {tasks}
                setTasks = {setTasks}
                filterStatus = {filterStatus}
                setFilterStatus = {setFilterStatus}
                filteredTasks = {filteredTasks}
            />
        </div>
    </div>
  )
}
