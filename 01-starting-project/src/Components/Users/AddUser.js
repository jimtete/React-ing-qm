import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

function AddUser(args) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  function errorHandler() {
    setError(null);
  }

  function addUserHandler(event) {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        description: "Please enter a valid username and age.",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        description: "Please enter a valid age.",
      });
      return;
    }

    args.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  }

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onErrorHandling={errorHandler}
          onConfirm={errorHandler}
          errorTitle={error.title}
          errorDesc={error.description}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Usernames</label>
          <input
            value={enteredUsername}
            onChange={usernameChangeHandler}
            id="username"
            type="text"
            placeholder="enter username"
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            value={enteredAge}
            onChange={ageChangeHandler}
            id="age"
            type="number"
            placeholder="enter age"
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
