// import React, { useState } from 'react'

// export const Todolist = () => {
//   // state for the input text
//   const [inputValue, setInputValue] = useState("")

//   // state for the array of tasks
//   const [tasks, setTasks] = useState([])

//   // handle adding a new task
//   const handleAddTask = () => {
//     const trimmed = inputValue.trim()
//     if (trimmed === "") return               // do nothing for empty input

//     // create new array (do not mutate previous state)
//     setTasks(prev => [...prev, trimmed])

//     // clear the input field after adding
//     setInputValue("")
//   }

//   // handle deleting a task by index
//   const handleDelete = (indexToDelete) => {
//     setTasks(prev => prev.filter((_, idx) => idx !== indexToDelete))
//   }

//   return (
//     <div>
//       <h4>To-Do List</h4>

//       {/* controlled input */}
//       <input
//         type="text"
//         value={inputValue}
//         placeholder="Type a task..."
//         onChange={(e) => setInputValue(e.target.value)}
//       />

//       {/* add button uses the handler function */}
//       <button onClick={handleAddTask}>Add</button>

//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index} style={{ marginBottom: 8 }}>
//             {task}
//             {/* delete button calls handleDelete with the current index */}
//             <button
//               onClick={() => handleDelete(index)}
//               style={{ marginLeft: 8 }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react'

export const Todolist = () => {
  const [inputValue, setInputValue] = useState("")
  const [tasks, setTasks] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(null)

  // Load tasks from localStorage on first render
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"))
    if (saved) setTasks(saved)
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const handleAddTask = () => {
    const trimmed = inputValue.trim()
    if (trimmed === "") return
    if (!isEditing && tasks.includes(trimmed)) return  // prevent duplicates when adding (not while editing)

    if (isEditing) {
      const updated = [...tasks]
      updated[editIndex] = trimmed
      setTasks(updated)
      setIsEditing(false)
      setEditIndex(null)
    } else {
      setTasks(prev => [...prev, trimmed])
    }

    setInputValue("")
  }

  const handleDelete = (index) => {
    setTasks(prev => prev.filter((_, idx) => idx !== index))
  }

  const handleEdit = (index) => {
    setInputValue(tasks[index])
    setIsEditing(true)
    setEditIndex(index)
  }

  return (
    <div>
      <h3>To-Do List</h3>

      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleAddTask}>
        {isEditing ? "Save" : "Add"}
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
