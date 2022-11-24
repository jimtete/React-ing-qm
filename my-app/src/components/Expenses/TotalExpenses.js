import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./TotalExpenses.css";

function TotalExpenses(args) {
  const [filteredYear, setFilteredYear] = useState('2019');
  
  function filterChangeHandler(selectedYear){
    setFilteredYear(selectedYear);
  }


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onYearSelectedFilter={filterChangeHandler} />
        <ExpenseItem
          title={args.items[0].title}
          amount={args.items[0].amount}
          date={args.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={args.items[1].title}
          amount={args.items[1].amount}
          date={args.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={args.items[2].title}
          amount={args.items[2].amount}
          date={args.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={args.items[3].title}
          amount={args.items[3].amount}
          date={args.items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default TotalExpenses;
