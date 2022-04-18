import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const expensesData = props.expenses;

  const filteredData = expensesData.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  const filteredYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <li>
      <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        getFilteredYear={filteredYearHandler}
      />
      <ExpensesChart expenses={filteredData}/>
      <ExpensesList data={filteredData}/>
    </Card>
    </li>
  );
};

export default Expenses;
