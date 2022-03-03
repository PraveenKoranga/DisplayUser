import { useState } from "react";
import "./styles.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState([]);

  const newusers = {
    username: username,
    password: password,
    id: new Date().getTime().toString()
  };
  const submitData = () => {
    if (!username) {
      return " ";
    } else if (!password) {
      return " ";
    } else {
      setUser([...user, newusers]);
      setPassword("");
      setUsername("");
    }
  };
  return (
    <>
      <div className="body">
        <div className="container">
          <input
            type="text"
            placeholder="Please Create Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Please Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="submit-button" onClick={submitData}>
            submit
          </button>
        </div>
        <br />

        <div className="users">
          {user.length === 0 ? (
            ""
          ) : (
            <>
              <h1 style={{ borderBottom: "1px solid black" }}>users</h1>
              <div className="list-table">
                <p>Username</p>
                <p>password</p>
              </div>
            </>
          )}

          {user.map((users) => {
            return (
              <div key={users.id} className="users-list">
                <p>{users.username}</p>
                <p>{users.password}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
