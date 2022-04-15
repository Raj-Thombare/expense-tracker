import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: "e1",
    title: "Iphone 13",
    amount: 150,
    date: new Date(2022, 11, 31),
  },
  {
    id: "e2",
    title: "MacBook Air",
    amount: 50000,
    date: new Date(2019, 9, 11),
  },
  {
    id: "e3",
    title: "iPad",
    amount: 1000,
    date: new Date(2020, 3, 30),
  },
  {
    id: "e4",
    title: "MSI Modern 15",
    amount: 4500,
    date: new Date(2021, 4, 12),
  }
];

function App(props) {

  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
