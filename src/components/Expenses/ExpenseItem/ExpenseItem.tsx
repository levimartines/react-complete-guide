import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';

type IExpense = {
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem: React.FC<IExpense> = (props) => {
  const { date, title, amount } = props;

  return <Card className='expense-item'>
    <ExpenseDate date={date}/>
    <div className='item-description'>
      <h2>{title}</h2>
      <div className='item-price'>$ {amount.toFixed(2)}</div>
    </div>
  </Card>;
}

export default ExpenseItem;