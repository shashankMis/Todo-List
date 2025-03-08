import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import WeatherInfo from "./components/WeatherInfo";
import Auth from "./components/Auth";
import "./css/global.css";
import "./app.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const user = useSelector((state) => state.auth.user); // Getting user from redux

  const prioritySort = (a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a] - priorityOrder[b];
  };

  return (
    <div className="app">
      <Auth />
      {user && (
        <div className="main-content">
          <Sidebar tasks={tasks} user={user} />
          <div className="content">
            <Header />
            <TaskInput setTasks={setTasks} tasks={tasks} />
            <TaskList tasks={tasks} setTasks={setTasks} /> 
            <WeatherInfo />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
