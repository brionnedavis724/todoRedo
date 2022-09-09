import React from 'react'
import { FilterControl } from './FilterControl'
import { Task } from './Task'
import { deleteDoc, doc } from 'firebase/firestore'
import db from '../utils/firebase'

/* TASKLIST TODOS
How do we DELETE a collection from our Firestore db?

- import deleteDoc, and doc from 'firebase/firestore'
- import db from '../utils/firebase'
- use deleteDoc in clearCompleted
- deleteDoc(docRef, id) 
*/


export const TaskList = ({tasks, setTasks, filterStatus, setFilterStatus, filteredTasks}) => {

  // const clearCompleted = ()=> {
  //   //Clear's Tasks by filtering out
  //     setTasks(tasks.filter((task)=> !task.status))
  //   //With Firebase we can delete a document
    
  //   // Reset the filterStatus to all
  //     setFilterStatus("all")
  // }
  const clearCompleted = ()=> {
    // with firebase, we can delete tasks completed
    // for ea task that is completed, deleteDoc()
    // look through the tasks, for ea task that has a status of true, deleteDoc()

    // how do we look through ea task?
    // how do we get access to ea task w status of true
    // how do we delete that document/task from the database?
    
    filteredTasks.forEach((item) => {
      if(item.status) { // if status of ea item is true then delete
        deleteDoc(doc(db, "tasks", item.id))
      }
    })
    setFilterStatus('all')
  }

  return (    
    <div className='task-list-wrapper'>
        <div className='task-list'>
            {filteredTasks.map((task)=> {
        
                return <Task 
                    text = {task.text}
                    status = {task.staus}
                    tasks = {tasks}
                    setTasks = {setTasks}
                    task = {task}
                    key = {task.id}
                    filteredTasks = {filteredTasks}
                    />
            })}

        </div>

        <div className='task-items-info'>
            <div className='items-left'>
              {/* 5 items left */}
              {filteredTasks.length} items left
            </div>

            <FilterControl 
                filterStatus = {filterStatus}
                setFilterStatus = {setFilterStatus}
            />

            <div className='items-clear'>
                <span onClick={clearCompleted}>Clear Completed</span>
            </div>
        </div>

    </div>  
  )
}
