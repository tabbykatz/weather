import * as React from "react";

import * as apiClient from "./apiClient";

const Users = ({ user, setUser }) => {
  const [users, setUsers] = React.useState([]);

  const loadUsers = async () => setUsers(await apiClient.getUsers());
  // const addTask = (task) => apiClient.addTask(task).then(loadTasks);

  React.useEffect(() => {
    loadUsers();
  }, []);

  return (
    <section>
      <Login />
      <UsersList users={users} />
      {/* <AddTask {...{ addTask }} /> */}
    </section>
  );
};

const Login = () => {
  return <h3>LOGIN</h3>;
};

const UsersList = ({ users }) => (
  <ul>
    {users.map(({ id, username, email }) => (
      <li key={id}>
        {username} - {email}
      </li>
    ))}
  </ul>
);

// const AddTask = ({ addTask }) => {
//   const [task, setTask] = React.useState("");

//   const canAdd = task !== "";

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (canAdd) {
//       addTask(task);
//       setTask("");
//     }
//   };

// return (
//   <form onSubmit={onSubmit}>
//     <label>
//       New task:{" "}
//       <input onChange={(e) => setTask(e.currentTarget.value)} value={task} />
//     </label>
//     <button disabled={!canAdd}>Add</button>
//   </form>
// );

export default Users;
