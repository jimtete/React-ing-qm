import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';




function App() {
  const [addedUsers,setAddedUsers] = useState([]);

  function addUserHandler(username, userage){
    setAddedUsers((prevUsersList) => {
      return [...prevUsersList, {name: username, age: userage, id: Math.random().toString()}];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={addedUsers}/>
    </div>
  );
}

export default App;
