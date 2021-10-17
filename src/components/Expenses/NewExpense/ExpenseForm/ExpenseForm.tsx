import React, { ChangeEvent, useState } from "react";
import "./ExpenseForm.css";
import { Expense } from "../../../../models/expense";

const ExpenseForm: React.FC<{ onSaveExpense: (expense: Expense) => void }> = (props) => {
  const [title, setTitle] = useState('');
  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);

  const [amount, setAmount] = useState('');
  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setAmount(event.target.value);

  const [date, setDate] = useState('');
  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setDate(event.target.value);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title || !amount || !date) return;
    const expense: Expense = { title, amount: +amount, date: new Date(date) };
    props.onSaveExpense(expense);
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setAmount('');
    setDate('');
  };

  return <form onSubmit={handleFormSubmit}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={titleChangeHandler} value={title}/>
      </div>
      <div className="new-expense__control">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" min="0.01" step="0.01" onChange={amountChangeHandler}
               value={amount}/>
      </div>
      <div className="new-expense__control">
        <label htmlFor="date">Amount</label>
        <input type="date" id="date" min="2019-01-01" max="2022-12-31"
               onChange={dateChangeHandler} value={date}/>
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>
};

export default ExpenseForm;