import "./NewExpense.css";
import ExpenseForm from './ExpenseForm'
import {useState} from 'react'

const NewExpense = (props) => {

  const [isVisible, setIsVisible] = useState(false);

  const expenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsVisible(false)
  }

  const isVisibleHandler = () =>{
    setIsVisible(true)
  }

  const onCancelHandler = () =>{
    setIsVisible(false)
  }

  return (
    <div className="new-expense">
      {!isVisible && <button onClick={isVisibleHandler}>Add New Expense</button>}
      {isVisible && <ExpenseForm onSaveExpenseData={expenseDataHandler} onCancel={onCancelHandler}/>}
    </div>
  );
};

export default NewExpense;
