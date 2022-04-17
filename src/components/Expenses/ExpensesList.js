import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredData = props.data;
  console.log(typeof filteredData);

  if (filteredData.length === 0) {
    return <p>No expenses found!</p>;
  }
  
  return (
    <ul>
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
