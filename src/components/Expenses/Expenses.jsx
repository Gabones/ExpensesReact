import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChat';

function Expenses(props) {
  const [filter, setFilter] = useState('2021');

  const selectDataHandler = (selectedData) => {
    setFilter(selectedData.target.value);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return filter === expense.date.toLocaleString('pt-BR', { year: 'numeric' });
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectData={selectDataHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;