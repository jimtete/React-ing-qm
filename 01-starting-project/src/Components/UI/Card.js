import React from "react";
import classes from "./Card.module.css";

function Card(args){
    return <div className={`${classes.card} ${args.className}`}>{args.children}</div>
}

export default Card;