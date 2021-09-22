import * as React from "react";

const Users = ({ users, setUser }) => {
  return (
    <section>
      <Login {...{ users, setUser }} />
      <UsersList {...users} />
    </section>
  );
};

const Login = ({ users, setUser }) => {
  console.log(users);
  return (
    <>
      <form>
        <label>
          Which user are you?
          <select>
            <option value="undefined">Choose a user</option>
            {users.map((user, index) => (
              <option key={user.id} value={user} onChange={() => setUser(user)}>
                {user.username}
              </option>
            ))}
          </select>
        </label>
      </form>
    </>
  );
};

const UsersList = ({ users }) => {
  // console.log(users);

  return users?.length ? (
    users.map(({ id, username, email }) => (
      <li key={id}>
        {username} - {email}
      </li>
    ))
  ) : (
    <p>Loading users...</p>
  );
};

export default Users;
