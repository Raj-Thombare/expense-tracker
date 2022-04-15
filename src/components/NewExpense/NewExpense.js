import "./NewExpense.css";
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const expenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
