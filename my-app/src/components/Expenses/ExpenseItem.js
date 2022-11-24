import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(args) {
  const [title, setTitle] = useState(args.title);

  function clickHandler() {
    setTitle("Updated!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={args.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{args.amount}$</div>
      </div>
      <button onClick={clickHandler}>CHange title</button>
    </Card>
  );
}

export default ExpenseItem;
