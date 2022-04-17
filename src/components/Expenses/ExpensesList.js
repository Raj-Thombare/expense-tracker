import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  const filteredData = props.data;

  if (filteredData.length === 0) {
    return <p className="expenses-list__fallback">No expenses found!</p>;
  }

  return (
    <ul className="expenses-list">
      {filteredData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
