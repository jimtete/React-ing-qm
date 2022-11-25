import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./TotalExpenses.css";

function TotalExpenses(args) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const temp = args.items.filter(
    (e) => e.date.getFullYear().toString() == filteredYear
  );

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearSelectedFilter={filterChangeHandler}
        />
        <ExpensesList items={temp}/>
      </Card>
    </div>
  );
}

export default TotalExpenses;
