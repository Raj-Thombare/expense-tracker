import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const expensesData = props.expenses;

  const filteredData = expensesData.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  const filteredYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const noExpensesMsg = <p>No expenses found!</p>;

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        getFilteredYear={filteredYearHandler}
      />
      {
        filteredData.length === 0 ? noExpensesMsg : filteredData.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
      
    </Card>
  );
};

export default Expenses;
