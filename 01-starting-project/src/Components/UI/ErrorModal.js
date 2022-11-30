import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

function Backdrop(args) {
  return <div className={classes.backdrop} onClick={args.onErrorHandling} />;
}

function ModalOverlay(args) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{args.errorTitle}</h2>
      </header>
      <div className={classes.content}>
        <p>{args.errorDesc}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={args.onConfirm}>Okay.</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(args) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onErrorHandling={args.onErrorHandling} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          errorTitle={args.errorTitle}
          errorDesc={args.errorDesc}
          onConfirm={args.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
