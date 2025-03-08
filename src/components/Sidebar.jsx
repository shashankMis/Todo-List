import React from "react";
import imagess from "./image.avif";
import "../css/sidebar.css";
import { FaTasks, FaStar, FaCalendarAlt, FaUser, FaListUl } from "react-icons/fa";

const Sidebar = ({ tasks, user }) => { // Receive user from props
  const maxTasks = 20; // progress for 20 tasks
  const taskCount = tasks.length; // Count tasks dynamically
  const progressAngle = (taskCount / maxTasks) * 360; // Converting into degrees

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img src={imagess} alt="Profile" className="profile-img" />
        <p className="username">Hey, {user}!</p> 
      </div>

      <ul className="sidebar-menu">
        <li className="active">
          <FaListUl className="icon" /> All Tasks
        </li>
        <li>
          <FaCalendarAlt className="icon" /> Today
        </li>
        <li>
          <FaStar className="icon" /> Important
        </li>
        <li>
          <FaTasks className="icon" /> Planned
        </li>
        <li>
          <FaUser className="icon" /> Assigned to me
        </li>
      </ul>

      <div className="task-summary">
        <h4>Today Tasks</h4>
        <p>{taskCount}</p>
        <div
          className="progress-circle"
          style={{
            background: `conic-gradient(#28a745 ${progressAngle}deg, #e9ecef ${progressAngle}deg)`
          }}
        ></div>
      </div>
    </aside>
  );
};

export default Sidebar;
