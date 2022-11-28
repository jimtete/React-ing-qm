import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

function AddUser(args) {
  function addUserHandler(event) {
    event.preventDefault();
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="enter username"></input>
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" placeholder="enter age"></input>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
}

export default AddUser;
