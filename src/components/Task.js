import React, { useState } from 'react'
import Check from '../images/icon-check.svg'
import { setDoc, doc } from 'firebase/firestore'
import db from '../utils/firebase'

/* Task TODOS
How do we UPDATE a task status to true OR false (backend)?

- Import setDoc, doc from 'firebase/firestore'
- Import db from "../utils/firebase"
- use setDoc(docRef,payload)
- setDoc will UPDATE a document to whatever the payload is.
*/



export const Task = ({text, task, tasks, setTasks, filteredTasks}) => {

  // Create a state variable to keep track of mutable task
  const [mutableTask, setMutableTask] = useState(task)

  const checked = mutableTask.status ? "checked" : "";
  const checkIcon = mutableTask.status ? (<img src={Check} alt="completed"/>) : "";

  // const markCompleted = () => {
  //   console.log(tasks)
  //   // this updates the status on our FrontEnd
  //   setMutableTask({...mutableTask, status: !mutableTask.status }) 

  //   // this will update the statuses in the BACKEND
  //   const updatedTasks = tasks.map((item)=> {
  //     // find the corresponding item that matches task
  //    return task.id === item.id ? {...item, status : !item.status} : item
  //   })
  //   setTasks(updatedTasks)
  // }
  const markCompleted = () => {
    console.log(filteredTasks)
    // update the status on frontend
    setMutableTask({ ...mutableTask, status: !mutableTask.status })

    // update the status in the BACKEND
    const docRef = doc(db, "tasks", task.id) // grab the doc you want ; look in this database being passed, look in this collection called "tasks", pass in the id
    const payload = { id: task.id, status: !task.status, text: task.text } // doc was grabbed, what do we want it to look like now? 
    
    setDoc(docRef, payload) // update the doc to display new information
  }

  return (
    <div className='task-item'>
        <div className='check' onClick={markCompleted}>
            <div className={`check-mark ${checked}`}>
              {checkIcon}
            </div>
        </div>

        <div className={`task-text ${checked}`}>
            <p>{text}</p>
        </div>
    </div>
  )
}
