import expenses from './expenses';
import ExpensesContainer from './components/Expenses/ExpensesContainer/ExpensesContainer';

const App = () =>
  <div>
    <h2>Let's get started!</h2>
    <ExpensesContainer expenses={expenses}/>
  </div>

export default App;
