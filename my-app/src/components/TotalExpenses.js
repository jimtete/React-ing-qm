import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './TotalExpenses.css'

function TotalExpenses(args) {
  return (
    <Card className="expenses">
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
  );
}

export default TotalExpenses;
