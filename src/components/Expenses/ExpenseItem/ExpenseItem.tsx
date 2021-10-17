import React from "react";
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';
import Expense from "../../../models/expense";

const ExpenseItem: React.FC<Expense> = (props) => {
  const { date, amount, title, id } = props;

  return <li key={id}>
    <Card className='expense-item'>
      <ExpenseDate date={date}/>
      <div className='item-description'>
        <h2>{title}</h2>
        <div className='item-price'>$ {amount.toFixed(2)}</div>
      </div>
    </Card>
  </li>;
}

export default ExpenseItem;