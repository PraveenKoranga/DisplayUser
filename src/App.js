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

        <div className="users">
          <h1>users</h1>

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
