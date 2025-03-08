import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice";
import "../css/auth.css";

const Auth = () => {
  const [username, setUsername] = useState("");
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogin = () => { // checking user is not an empty
    if (username.trim() !== "") {
      dispatch(login(username));
    }
  };

  return (
    <div className="auth">
      {user ? (
        <div>
          <p>Welcome, {user}!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
