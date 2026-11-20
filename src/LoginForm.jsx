
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() !== "" && password.trim() !== "") {
      setIsLoggedIn(true);
    } else {
      alert("Please enter username and password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <p>You have successfully logged in.</p>

          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h1>Login Form</h1>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <br /><br />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br /><br />

          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
