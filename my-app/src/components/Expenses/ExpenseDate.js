import './ExpenseDate.css'

function ExpenseDate(args) {
  const month = args.date.toLocaleString("en-US", { month: "long" });
  const day = args.date.toLocaleString("en-US", { day: "2-digit" });
  const year = args.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
}

export default ExpenseDate;
