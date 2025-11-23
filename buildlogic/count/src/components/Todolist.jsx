// // // import React, { useState } from 'react'

// // // export const Todolist = () => {
// // //   // state for the input text
// // //   const [inputValue, setInputValue] = useState("")

// // //   // state for the array of tasks
// // //   const [tasks, setTasks] = useState([])

// // //   // handle adding a new task
// // //   const handleAddTask = () => {
// // //     const trimmed = inputValue.trim()
// // //     if (trimmed === "") return               // do nothing for empty input

// // //     // create new array (do not mutate previous state)
// // //     setTasks(prev => [...prev, trimmed])

// // //     // clear the input field after adding
// // //     setInputValue("")
// // //   }

// // //   // handle deleting a task by index
// // //   const handleDelete = (indexToDelete) => {
// // //     setTasks(prev => prev.filter((_, idx) => idx !== indexToDelete))
// // //   }

// // //   return (
// // //     <div>
// // //       <h4>To-Do List</h4>

// // //       {/* controlled input */}
// // //       <input
// // //         type="text"
// // //         value={inputValue}
// // //         placeholder="Type a task..."
// // //         onChange={(e) => setInputValue(e.target.value)}
// // //       />

// // //       {/* add button uses the handler function */}
// // //       <button onClick={handleAddTask}>Add</button>

// // //       <ul>
// // //         {tasks.map((task, index) => (
// // //           <li key={index} style={{ marginBottom: 8 }}>
// // //             {task}
// // //             {/* delete button calls handleDelete with the current index */}
// // //             <button
// // //               onClick={() => handleDelete(index)}
// // //               style={{ marginLeft: 8 }}
// // //             >
// // //               Delete
// // //             </button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   )
// // // }


// // import React, { useState, useEffect } from 'react'

// // export const Todolist = () => {
// //   // inputValue → stores what the user types in the input box
// //   // setInputValue → function to update inputValue
// //   const [inputValue, setInputValue] = useState("")

// //   // tasks → array that stores all added tasks
// //   // setTasks → function to update tasks array
// //   const [tasks, setTasks] = useState([])

// //   // isEditing → tells if user is editing an existing task
// //   const [isEditing, setIsEditing] = useState(false)

// //   // editIndex → stores the index of task currently being edited
// //   const [editIndex, setEditIndex] = useState(null)

// //   // Load tasks from localStorage when page loads (only once)
// //   useEffect(() => {
// //     const saved = JSON.parse(localStorage.getItem("tasks")) // get stored tasks
// //     if (saved) setTasks(saved) // if found, put them in state
// //   }, []) // [] ensures this runs only one time on first render

// //   // Save tasks to localStorage whenever tasks list changes
// //   useEffect(() => {
// //     localStorage.setItem("tasks", JSON.stringify(tasks)) // store tasks
// //   }, [tasks]) // runs every time tasks state updates

// //   // Function to add or update a task
// //   const handleAddTask = () => {
// //     const trimmed = inputValue.trim() // remove extra spaces

// //     if (trimmed === "") return // if input empty -> do nothing

// //     // if adding (not editing) and task already exists -> stop (no duplicates)
// //     if (!isEditing && tasks.includes(trimmed)) return

// //     // If editing mode -> update selected task
// //     if (isEditing) {
// //       const updated = [...tasks] // make a copy of tasks
// //       updated[editIndex] = trimmed // replace the task at that index
// //       setTasks(updated) // update task list
// //       setIsEditing(false) // exit editing mode
// //       setEditIndex(null) // clear index
// //     } 
// //     // If not editing -> add new task to list
// //     else {
// //       setTasks(prev => [...prev, trimmed]) // add new task at end of array
// //     }

// //     setInputValue("") // clear input box
// //   }

// //   // Delete a task by index
// //   const handleDelete = (index) => {
// //     // keep all tasks except the one we want to delete
// //     setTasks(prev => prev.filter((_, idx) => idx !== index))
// //   }

// //   // Enter editing mode and load selected task in input box
// //   const handleEdit = (index) => {
// //     setInputValue(tasks[index]) // show task in input field
// //     setIsEditing(true) // enter edit mode
// //     setEditIndex(index) // remember which task to update
// //   }

// //   return (
// //     <div>
// //       <h3>To-Do List</h3>

// //       {/* Input box to type task */}
// //       <input
// //         type='text'
// //         value={inputValue}
// //         onChange={(e) => setInputValue(e.target.value)} // update state on typing
// //       />

// //       {/* Button text changes based on edit mode */}
// //       <button onClick={handleAddTask}>
// //         {isEditing ? "Save" : "Add"}
// //       </button>

// //       <ul>
// //         {/* Loop through tasks and show each one */}
// //         {tasks.map((task, index) => (
// //           <li key={index}>
// //             {task}
// //             {/* Edit and Delete buttons for each task */}
// //             <button onClick={() => handleEdit(index)}>Edit</button>
// //             <button onClick={() => handleDelete(index)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   )
// // }


// import React, { useState, useEffect } from "react";
// import "./Todo.css"; // We will add CSS below

// export const Todolist = () => {
//   // Stores what user types
//   const [inputValue, setInputValue] = useState("");

//   // Stores all tasks → each task is an object: { text: "", completed: false }
//   const [tasks, setTasks] = useState([]);

//   // Editing control
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   // Get tasks from localStorage on first load
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("tasks"));
//     if (saved) setTasks(saved);
//   }, []);

//   // Save tasks to localStorage whenever tasks change
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   // Add or Update task
//   const handleAddTask = () => {
//     const trimmed = inputValue.trim();
//     if (trimmed === "") return;

//     // Duplicate prevention only for adding
//     if (!isEditing && tasks.some((t) => t.text === trimmed)) return;

//     // Editing → Update task
//     if (isEditing) {
//       const updated = [...tasks];
//       updated[editIndex].text = trimmed;
//       setTasks(updated);
//       setIsEditing(false);
//       setEditIndex(null);
//     } else {
//       setTasks((prev) => [...prev, { text: trimmed, completed: false }]);
//     }

//     setInputValue("");
//   };

//   // Delete selected task
//   const handleDelete = (index) => {
//     setTasks((prev) => prev.filter((_, idx) => idx !== index));
//   };

//   // Edit selected task
//   const handleEdit = (index) => {
//     setInputValue(tasks[index].text);
//     setIsEditing(true);
//     setEditIndex(index);
//   };

//   // Mark task as completed / uncompleted
//   const toggleCompletion = (index) => {
//     const updated = [...tasks];
//     updated[index].completed = !updated[index].completed;
//     setTasks(updated);
//   };

//   // Delete all tasks
//   const handleDeleteAll = () => setTasks([]);

//   return (
//     <div className="todo-container">
//       <h2>📝 To-Do List</h2>

//       <div className="input-row">
//         <input
//           type="text"
//           placeholder="Enter task"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />

//         <button className="add-btn" onClick={handleAddTask}>
//           {isEditing ? "Save" : "Add"}
//         </button>
//       </div>

//       {/* Task Count Summary */}
//       <p className="count">
//         Total: {tasks.length} | Completed: {tasks.filter((t) => t.completed).length} | Pending:{" "}
//         {tasks.filter((t) => !t.completed).length}
//       </p>

//       {/* Delete All Only if Tasks Exist */}
//       {tasks.length > 0 && (
//         <button className="delete-all" onClick={handleDeleteAll}>
//           Delete All
//         </button>
//       )}

//       {/* Task List */}
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index} className={task.completed ? "completed" : ""}>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleCompletion(index)}
//             />

//             <span>{task.text}</span>

//             <button onClick={() => handleEdit(index)}>✏ Edit</button>
//             <button className="del" onClick={() => handleDelete(index)}>
//               ❌ Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// import React, { useState, useEffect } from "react";

// export const Todolist = () => {
//   // Stores input text typed by user
//   const [inputValue, setInputValue] = useState("");

//   // Stores list of tasks → each task is { text: "Buy milk", completed: false }
//   const [tasks, setTasks] = useState([]);

//   // Editing control
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   // Load saved tasks from localStorage on first page load
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("tasks"));
//     if (saved) setTasks(saved);
//   }, []);

//   // Save tasks to localStorage whenever tasks change
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   // Add or Save edited task
//   const handleAddTask = () => {
//     const trimmed = inputValue.trim();
//     if (trimmed === "") return;

//     // Duplicate prevention only during adding
//     if (!isEditing && tasks.some((t) => t.text === trimmed)) return;

//     if (isEditing) {
//       // If editing → update selected task
//       const updated = [...tasks];
//       updated[editIndex].text = trimmed;
//       setTasks(updated);
//       setIsEditing(false);
//       setEditIndex(null);
//     } else {
//       // If adding → push new task
//       setTasks((prev) => [...prev, { text: trimmed, completed: false }]);
//     }

//     setInputValue("");
//   };

//   // Delete single task
//   const handleDelete = (index) => {
//     setTasks((prev) => prev.filter((_, idx) => idx !== index));
//   };

//   // Edit selected task
//   const handleEdit = (index) => {
//     setInputValue(tasks[index].text);
//     setIsEditing(true);
//     setEditIndex(index);
//   };

//   // Mark task completed / uncompleted
//   const toggleCompleted = (index) => {
//     const updated = [...tasks];
//     updated[index].completed = !updated[index].completed;
//     setTasks(updated);
//   };

//   // Clear only completed tasks
//   const clearCompleted = () => {
//     setTasks(tasks.filter((t) => !t.completed));
//   };

//   return (
//     <div style={{ width: "420px", margin: "auto", padding: "18px" }}>
//       <h2>📝 To-Do List</h2>

//       {/* Input row */}
//       <input
//         type="text"
//         placeholder="Enter task"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />

//       <button onClick={handleAddTask} style={{ marginLeft: "6px" }}>
//         {isEditing ? "Save" : "Add"}
//       </button>

//       {/* Task summary */}
//       <p>
//         Total: {tasks.length} | Completed: {tasks.filter((t) => t.completed).length} | Pending:{" "}
//         {tasks.filter((t) => !t.completed).length}
//       </p>

//       {/* Clear completed button - show only if completed tasks exist */}
//       {tasks.some((t) => t.completed) && (
//         <button onClick={clearCompleted} style={{ background: "red", color: "white" }}>
//           Clear Completed Tasks
//         </button>
//       )}

//       {/* Task list */}
//       <ul style={{ marginTop: "14px", padding: 0 }}>
//         {tasks.map((task, index) => (
//           <li
//             key={index}
//             style={{
//               listStyle: "none",
//               margin: "8px 0",
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//             }}
//           >
//             {/* Task complete checkbox */}
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleCompleted(index)}
//             />

//             {/* Show task text - strike if completed */}
//             <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
//               {task.text}
//             </span>

//             <button onClick={() => handleEdit(index)}>Edit</button>
//             <button style={{ color: "red" }} onClick={() => handleDelete(index)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";

export const Todolist = () => {
  // Stores task text typed by user
  const [inputValue, setInputValue] = useState("");

  // Stores selected category from dropdown
  const [category, setCategory] = useState("General");

  // Stores all tasks → each task is { text, completed, category }
  const [tasks, setTasks] = useState([]);

  // For editing task
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // For searching tasks
  const [searchText, setSearchText] = useState("");

  // Load saved tasks from localStorage when page loads
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  // Save tasks to localStorage whenever tasks update
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add task or Save edited task
  const handleAddTask = () => {
    const trimmed = inputValue.trim();
    if (trimmed === "") return; // stop empty input

    // prevent duplicate only while adding (not while editing)
    if (!isEditing && tasks.some((t) => t.text === trimmed)) return;

    if (isEditing) {
      // Edit mode → update selected task
      const updated = [...tasks];
      updated[editIndex].text = trimmed;
      updated[editIndex].category = category;
      setTasks(updated);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add mode → push new task object
      setTasks((prev) => [
        ...prev,
        { text: trimmed, completed: false, category: category },
      ]);
    }

    // reset input after add/save
    setInputValue("");
    setCategory("General");
  };

  // Delete one task
  const handleDelete = (index) => {
    setTasks((prev) => prev.filter((_, idx) => idx !== index));
  };

  // Edit task
  const handleEdit = (index) => {
    setInputValue(tasks[index].text);
    setCategory(tasks[index].category);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Mark task completed / uncompleted
  const toggleCompleted = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  // Clear only completed tasks
  const clearCompleted = () => {
    setTasks((prev) => prev.filter((t) => !t.completed));
  };

  // Filter tasks based on search text
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ width: "440px", margin: "auto", padding: "18px" }}>
      <h2>📝 To-Do List</h2>

      {/* Input field to add/edit task */}
      <input
        type="text"
        placeholder="Enter task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Category dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ marginLeft: "8px" }}
      >
        <option>General</option>
        <option>Work</option>
        <option>Study</option>
        <option>Home</option>
        <option>Personal</option>
      </select>

      {/* Add / Save button */}
      <button onClick={handleAddTask} style={{ marginLeft: "6px" }}>
        {isEditing ? "Save" : "Add"}
      </button>

      {/* Search bar */}
      <input
        style={{ display: "block", marginTop: "12px", width: "100%" }}
        type="text"
        placeholder="🔍 Search task..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* Task summary */}
      <p>
        Total: {tasks.length} | Completed: {tasks.filter((t) => t.completed).length} | Pending:{" "}
        {tasks.filter((t) => !t.completed).length}
      </p>

      {/* Show Clear Completed only when needed */}
      {tasks.some((t) => t.completed) && (
        <button
          onClick={clearCompleted}
          style={{ background: "red", color: "white", marginBottom: "8px" }}
        >
          Clear Completed Tasks
        </button>
      )}

      {/* Display filtered tasks */}
      <ul style={{ marginTop: "10px", padding: 0 }}>
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            style={{
              listStyle: "none",
              margin: "8px 0",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* Check/Uncheck */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(index)}
            />

            {/* Task text + category */}
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                flex: 1,
              }}
            >
              {task.text} <small style={{ color: "gray" }}>({task.category})</small>
            </span>

            <button onClick={() => handleEdit(index)}>Edit</button>
            <button style={{ color: "red" }} onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
