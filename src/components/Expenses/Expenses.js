import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const expensesData = props.expenses;

  const filteredData = expensesData.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  console.log(filteredData);

  const filteredYearHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        getFilteredYear={filteredYearHandler}
      />
      {
        filteredData.map((expense) => {
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />;
        })
      }
    </Card>
  );
};

export default Expenses;
