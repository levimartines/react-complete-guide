import React, { ChangeEvent, useState } from "react";
import "./ExpenseForm.css";
import Expense from "../../../../models/expense";
import Button from "../../../UI/Button/Button";

const ExpenseForm: React.FC<{ onSaveExpense: (expense: Expense) => void, onCancel: () => void }> = (props) => {
  const [title, setTitle] = useState('');
  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);

  const [amount, setAmount] = useState('');
  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setAmount(event.target.value);

  const [date, setDate] = useState('');
  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setDate(event.target.value);

  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormInvalid()) return;
    const expense: Expense = { title, amount: +amount, date: new Date(date) };
    props.onSaveExpense(expense);
    clearForm();
  };

  const isFormInvalid = () => {
    let isInvalid = false;
    if (title.trim().length === 0) {
      setIsTitleValid(false);
      isInvalid = true;
    }
    if (amount.trim().length === 0) {
      setIsAmountValid(false);
      isInvalid = true;
    }
    if (date.trim().length === 0) {
      setIsDateValid(false);
      isInvalid = true;
    }
    return isInvalid;
  };

  const cancelForm = () => {
    props.onCancel();
  };

  const clearForm = () => {
    setTitle('');
    setAmount('');
    setDate('');
  };

  return <form onSubmit={handleFormSubmit}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label className={isTitleValid ? '' : 'invalid'} htmlFor="title">Title</label>
        <input className={isTitleValid ? '' : 'invalid'} type="text" id="title"
               onChange={titleChangeHandler} value={title}/>
      </div>
      <div className="new-expense__control">
        <label className={isAmountValid ? '' : 'invalid'} htmlFor="amount">Amount</label>
        <input className={isAmountValid ? '' : 'invalid'} type="number" id="amount"
               min="0.01" step="0.01" onChange={amountChangeHandler}
               value={amount}/>
      </div>
      <div className="new-expense__control">
        <label className={isDateValid ? '' : 'invalid'} htmlFor="date">Date</label>
        <input className={isDateValid ? '' : 'invalid'} type="date" id="date"
               min="2019-01-01" max="2022-12-31"
               onChange={dateChangeHandler} value={date}/>
      </div>
    </div>
    <div className="new-expense__actions">
      <Button type="button" onClick={cancelForm} invalid={false}>Cancel</Button>
      <Button type="submit" invalid={false}>Add Expense</Button>
    </div>
  </form>
};

export default ExpenseForm;