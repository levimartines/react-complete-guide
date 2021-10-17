import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import { Expense } from "../../../models/expense";

const NewExpense: React.FC<{ onAddExpense: (expense: Expense) => void }> = (props) => {
  const onSaveExpense = (expense: Expense) => {
    const data = { ...expense, id: Math.random().toString() }
    props.onAddExpense(data);
  }

  return <div className="new-expense">
    <ExpenseForm onSaveExpense={onSaveExpense}/>
  </div>
};

export default NewExpense;