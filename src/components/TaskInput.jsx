import React, { useState } from "react";
import "../css/taskInput.css";

const TaskInput = ({ setTasks }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium"); //For Default priority

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = { name: task, priority };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTask(""); 
      setPriority("Medium"); // Reset priority
    }
  };

  return (
    <div className="task-input">
      {/* Input, priority dropdown, and add button */}
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your todo tasks"
        />
        {/* bydefault selected priority as Medium*/}
        <select value={priority} onChange={(e) => setPriority(e.target.value)}> 
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskInput;




