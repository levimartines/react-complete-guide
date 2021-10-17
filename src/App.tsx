import React, { useState } from "react";
import ExpensesContainer from './components/Expenses/ExpensesContainer/ExpensesContainer';
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import { Expense } from "./models/expense";
import initState from "./expenses";

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>(initState);

  const addExpenseHandler = (expense: Expense) => setExpenses(prevState => prevState.concat(expense));

  return <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <ExpensesContainer expenses={expenses}/>
  </div>
}

export default App;
