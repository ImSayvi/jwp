import React, { useState, useEffect } from "react";
function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `Nowy Użytkownik ${users.length + 1}`,
      username: `newuser${users.length + 1}`,
      email: `newuser${users.length + 1}@example.com`,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  return (
    <div>
      <button onClick={addUser}>Dodaj Nowego Użytkownika</button>

      {users.map((user) => (
        <li key={user.id}>
          **{user.name}** ({user.username})
        </li>
      ))}
    </div>
  );
}
export default UserList;
