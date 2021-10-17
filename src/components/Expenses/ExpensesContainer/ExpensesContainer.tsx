import React, { useState } from "react";
import './ExpensesContainer.css';
import Card from '../../UI/Card/Card';
import Expense from "../../../models/expense";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

type Expenses = {
  expenses: Expense[];
};

const ExpensesContainer: React.FC<Expenses> = (props) => {
  const { expenses } = props;

  const currentYear = new Date().getFullYear().toString();
  const [year, setYear] = useState(currentYear);
  const filterChangeHandler = (year: string) => setYear(year);

  const filteredExpenses = expenses.filter(exp => exp.date.getFullYear() === +year);

  return <Card className='expenses'>
    <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler}/>
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList expenses={filteredExpenses}/>
  </Card>;
}

export default ExpensesContainer;