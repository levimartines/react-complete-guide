import './ExpensesContainer.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../UI/Card/Card';
import { Expense } from "../../../models/expense";

type Expenses = {
  expenses: Expense[];
};

const ExpensesContainer: React.FC<Expenses> = (props) => {
  const { expenses } = props;

  return <Card className='expenses'>
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