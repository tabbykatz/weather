import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Users from "./Users";
import Weather from "./Weather";

const App = () => {
  const [user, setUser] = React.useState({});
  return (
    <main>
      <nav>
        <h3>Weather!</h3>
        <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home {...{ user, setUser }} />} />
        <Route path="/dashboard" element={<Dashboard {...user} />} />
      </Routes>
    </main>
  );
};

const Home = ({ user, setUser }) => (
  <>
    <Users {...{ user, setUser }} />
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
