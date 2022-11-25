import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(args) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={args.date} />
        <div className="expense-item__description">
          <h2>{args.title}</h2>
          <div className="expense-item__price">{args.amount}$</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
