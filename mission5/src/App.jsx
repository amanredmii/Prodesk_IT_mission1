import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");



  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      status: "todo",
    };

    setList([...list, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handleEditClick = (item) => {
    setEditId(item.id);
    setEditText(item.text);
  };

  const saveEdit = () => {
    const updatedList = list.map((item) => {
      if (item.id === editId) {
        return { ...item, text: editText };
      }
      return item;
    });

    setList(updatedList);
    setEditId(null);
    setEditText("");
  };
  const updateStatus = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        if (item.status === "todo") {
          return { ...item, status: "progress" };
        } else if (item.status === "progress") {
          return { ...item, status: "completed" };
        }
      }
      return item;
    });

    setList(newList);
  };

  return (
    <div className="main">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />

        <button className="add-btn" onClick={addTask}>
          Add Task
        </button>
      </div>

      <div className="container">
        <div className="todo-container">
          <h2 className="title"> To-Do</h2>
          <ul className="todo-list">
            {list
              .filter((item) => item.status === "todo")
              .map((item) => (
                <li className="todo-card" key={item.id}>
                  {editId === item.id ? (
                    <input
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onBlur={saveEdit}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveEdit();
                      }}
                      autoFocus
                    />
                  ) : (
                    <span onClick={() => handleEditClick(item)}>
                      {item.text}
                    </span>
                  )}

                  <div>
                    <button className="move" onClick={() => updateStatus(item.id)}>
                      move
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(item.id)}
                    >
                      ❌
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div className="todo-container">
          <h2 className="title"> In Progress</h2>
          <ul className="todo-list">
            {list
              .filter((item) => item.status === "progress")
              .map((item) => (
                <li className="todo-card" key={item.id}>
                  <span
                    className="task-text"
                    onClick={() => edit_task(item.id)}
                  >
                    {item.text}
                  </span>

                  <div>
                    <button className="move" onClick={() => updateStatus(item.id)}>
                      move
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(item.id)}
                    >
                      ❌
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div className="todo-container">
          <h2 className="title"> Done</h2>
          <ul className="todo-list">
            {list
              .filter((item) => item.status === "completed")
              .map((item) => (
                <li className="todo-card" key={item.id}>
                  <span
                    className="task-text done"
                    onClick={() => edit_task(item.id)}
                  >
                    {item.text}
                  </span>



                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(item.id)}
                  >
                    ❌
                  </button>

                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;