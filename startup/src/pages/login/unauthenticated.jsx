import React from "react";
import Button from "@nextui-org/button";

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState("");

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: "post",
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response?.status === 200) {
      localStorage.setItem("userName", userName);
      props.onLogin(userName);
    }
  }

  return (
    <>
      <div>
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input
            className="form-control"
            placeholder="your@email.com"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">🔒</span>
          <input
            className="form-control"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          disabled={!userName || !password}
          variant="primary"
          onClick={() => loginUser()}
        >
          Login
        </Button>
        <Button
          disabled={!userName || !password}
          variant="secondary"
          onClick={() => createUser()}
        >
          Create
        </Button>
      </div>
    </>
  );
}
