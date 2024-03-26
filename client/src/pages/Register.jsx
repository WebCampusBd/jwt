import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:1000/profile", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())

      .then(() => navigate("/profile"))
      .catch((error) => {
        navigate("/register");
      });
  }, []);
  const handleRegister = (e) => {
    e.preventDefault();
    fetch("http://localhost:1000/register", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed to create user");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/login");
      })
      .catch((error) => console.log(error.message));

    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <h1>Welcome To Register Page</h1>
      <form action="" onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
