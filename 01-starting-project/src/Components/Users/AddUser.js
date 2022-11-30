import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

function AddUser(args) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  function errorHandler() {
    setError(null);
  }

  function addUserHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        description: "Please enter a valid username and age.",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        description: "Please enter a valid age.",
      });
      return;
    }

    args.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value="";
    ageInputRef.current.value="";
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
            id="username"
            type="text"
            placeholder="enter username"
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            placeholder="enter age"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
