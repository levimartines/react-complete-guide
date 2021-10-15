import './ExpenseDate.css';

function ExpenseDate(props) {
  const {date} = props;

  const month = date?.toLocaleString('us-US', {month: 'long'});
  const day = date?.toLocaleString('us-US', {day: '2-digit'});
  const year = date?.getFullYear();

  return (
    <div className='expense-date'>
      <div className='month'>{month}</div>
      <div className='day'>{day}</div>
      <div className='year'>{year}</div>
    </div>
  )
}

export default ExpenseDate;