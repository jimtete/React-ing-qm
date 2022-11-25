import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import NewExpenseButton from "./NewExpenseButton";

function NewExpense(args) {
  const [buttonClicked, setButtonClicked] = useState(args.enabledForm);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    args.onAddExpense(expenseData);
  }

  function saveButtonClickedHandler(state) {
    setButtonClicked(state);
  }

  if (buttonClicked == 0) {
    return (
      <div className="new-expense">
        <NewExpenseButton onButtonClicked={saveButtonClickedHandler} />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onButtonClicked={saveButtonClickedHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
}

export default NewExpense;
