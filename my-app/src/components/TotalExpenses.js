import ExpenseItem from "./ExpenseItem";
import './TotalExpenses.css'

function TotalExpenses(args) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={args.data[0].title}
        amount={args.data[0].amount}
        date={args.data[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={args.data[1].title}
        amount={args.data[1].amount}
        date={args.data[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={args.data[2].title}
        amount={args.data[2].amount}
        date={args.data[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={args.data[3].title}
        amount={args.data[3].amount}
        date={args.data[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default TotalExpenses;
