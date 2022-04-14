import "./ExpenseForm.css";
import {useState} from 'react';

const ExpenseForm = (props) => {

  const [enteredTitle, setTitle] = useState('');
  const [enteredAmount, setAmount] = useState('');
  const [enteredDate, setDate] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  }

  const amountChangeHandler = (e) => {
    setAmount(e.target.value)
  }

  const dateChangeHandler = (e) => {
    setDate(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
    const expenses = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate
    }
    props.onSaveExpenseData(expenses)

    setTitle(' ');
    setAmount(' ');
    setDate(' ');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01' />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
