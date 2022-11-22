import './ExpenseItem.css';

function ExpenseItem(args) {
  const expenseDate = new Date(2022,11,22);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 300.00;

  return (
    <div className='expense-item'>
      <div>{args.date.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{args.title}</h2>
        <div className='expense-item__price'>{args.amount}$</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
