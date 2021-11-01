import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
  const [filter, setFilter] = useState('2021');

  const selectDataHandler = (selectedData) => {
    setFilter(selectedData.target.value);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return filter === expense.date.toLocaleString('pt-BR', { year: 'numeric' });
  });

  let expenseContent = <p style={{ color: 'white' }}>Não há items</p>;

  console.log(filteredExpenses.length)
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((item) => {
      return <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectData={selectDataHandler} />
      {expenseContent}
    </Card>
  );
}

export default Expenses;