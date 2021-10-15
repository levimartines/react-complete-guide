import './ExpensesContainer.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../UI/Card/Card';

export default function ExpensesContainer(props) {
  const {expenses} = props;

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
