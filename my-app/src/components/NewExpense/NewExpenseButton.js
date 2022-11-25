import React, { useState } from "react";
import "./ExpenseForm.css";

function NewExpenseButton(args) {

  function buttonClickedHandler(event) {
    args.onButtonClicked(1);
  }

  return (
    <div className="new-expense__actions">
      <button onClick={buttonClickedHandler}>Add new expense</button>
    </div>
  );
}

export default NewExpenseButton;
