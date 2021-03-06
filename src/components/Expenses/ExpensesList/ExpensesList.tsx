import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";
import Expense from "../../../models/expense";

const ExpensesList: React.FC<{ expenses: Expense[] }> = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>
  }
  return <ul className="expenses-list">
    {expenses.map(expense => {
      return <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />;
    })}
  </ul>
}

export default ExpensesList;