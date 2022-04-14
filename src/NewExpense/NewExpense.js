import "./NewExpense.css";
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const expenseDataHandler = (newExpenseData) => {
    const expenses = {
      ...newExpenseData,
      id:Math.random().toString()
    }
    props.onGetData(expenses);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
