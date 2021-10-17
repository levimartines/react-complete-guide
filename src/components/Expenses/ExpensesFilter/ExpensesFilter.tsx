import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter: React.FC<{ onChangeFilter: (year: string) => void, selected: string }> = (props) => {
  const availableYears = ['2019', '2020', '2021', '2022'];

  const filterChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = event.target.value
    props.onChangeFilter(year);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          {availableYears.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;