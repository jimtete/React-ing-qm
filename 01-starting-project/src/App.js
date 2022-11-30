import React, { useState, Fragment } from 'react';
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
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={addedUsers}/>
    </Fragment>
  );
}

export default App;
