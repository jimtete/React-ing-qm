import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

function ErrorModal(args) {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{args.errorTitle}</h2>
        </header>
        <div className={classes.content}>
          <p>{args.errorDesc}</p>
        </div>
        <footer className={classes.actions}>
          <Button>Okay.</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
