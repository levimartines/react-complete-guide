import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';

function ExpenseItem(props) {
  const {date, title, amount} = props;

  return <Card className='expense-item'>
    <ExpenseDate date={date}/>
    <div className='item-description'>
      <h2>{title}</h2>
      <div className='item-price'>$ {amount.toFixed(2)}</div>
    </div>
  </Card>;
}

export default ExpenseItem;