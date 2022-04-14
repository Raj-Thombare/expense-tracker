import "./NewExpense.css";
import ExpenseForm from './ExpenseForm'

const NewExpense = () => {

  const expenseDataHandler = (newExpenseData) => {
    const expenses = {
      ...newExpenseData,
      id:Math.random().toString()
    }
    console.log(expenses)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
