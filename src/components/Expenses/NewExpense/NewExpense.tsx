import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import Expense from "../../../models/expense";
import Button from "../../UI/Button/Button";

const NewExpense: React.FC<{ onAddExpense: (expense: Expense) => void }> = (props) => {
  const [showForm, setShowForm] = useState(false);

  const onSaveExpense = (expense: Expense) => {
    const data = { ...expense, id: Math.random().toString() }
    props.onAddExpense(data);
    hideForm();
  }
  const hideForm = () => setShowForm(false);

  return <div className="new-expense">
    {showForm && <ExpenseForm onSaveExpense={onSaveExpense} onCancel={hideForm}/>}
    {!showForm && <Button onClick={() => setShowForm(true)} invalid={false}>Add New Expenses</Button>}
  </div>
};

export default NewExpense;