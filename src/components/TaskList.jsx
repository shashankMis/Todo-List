import React from "react";
import "../css/taskList.css";

const TaskList = ({ tasks, setTasks }) => {
  // Sorting function based on priority order
  const sortTasksByPriority = (taskList) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return [...taskList].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  };

  // Function to delete a task and maintain sorted order
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(sortTasksByPriority(updatedTasks)); // Sorting tasks after deletion
  };

  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        <ul>
          {sortTasksByPriority(tasks).map((task, index) => (
            <li key={index} className={`task-item ${task.priority.toLowerCase()}-priority`}>
              <span className="task-name">{task.text || task.name}</span> 
              <span className="priority">({task.priority})</span>
              <button className="delete-btn" onClick={() => handleDeleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
