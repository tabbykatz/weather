import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Users from "./Users";
import Weather from "./Weather";
import * as apiClient from "./apiClient";

const App = () => {
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState({});

  const loadUsers = async () => setUsers(await apiClient.getUsers());

  console.log(users);
  React.useEffect(() => {
    loadUsers();
    setUser();
  }, []);

  return (
    <main>
      <nav>
        <h3>Weather!</h3>
        {users.length ? <Users {...{ users, setUser }} /> : <p>Loading...</p>}
        <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home {...{ user, setUser }} />} />
        <Route path="/dashboard" element={<Dashboard {...{ user }} />} />
      </Routes>
    </main>
  );
};

const Home = ({ user, setUser }) => (
  <>
    <Weather {...user} />
  </>
);

const Dashboard = (user) => (
  <>
    <h1>Your Profile</h1>
    <p>update profile stuff</p>
  </>
);

export default App;
