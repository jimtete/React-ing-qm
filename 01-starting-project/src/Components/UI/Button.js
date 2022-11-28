import React from "react";
import classes from "./Button.module.css";

function Button(args) {
  return (
    <button onClick = {args.onClick} className={classes.button} type={args.type || "button"}>
        {args.children}
    </button>
  );
}

export default Button;
