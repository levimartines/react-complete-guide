import React, { useState } from "react";
import './ExpensesContainer.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../UI/Card/Card';
import { Expense } from "../../../models/expense";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

type Expenses = {
  expenses: Expense[];
};

const ExpensesContainer: React.FC<Expenses> = (props) => {
  const { expenses } = props;

  const [year, setYear] = useState("2021");
  const filterChangeHandler = (year: string) => setYear(year);

  return <Card className='expenses'>
    <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler}/>
    {expenses.map(expense => {
      return <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />;
    })}
  </Card>;
}

export default ExpensesContainer;