import './NewExpenses.css'
import ExpensesForm from './ExpenseForm';
import { useState } from 'react';

const NewExpenses = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return <div className="new-expense">
        {showForm ? <ExpensesForm onSaveExpenseData={saveHandler} /> : null}
        {!showForm ? <button onClick={() => setShowForm(true)}>New Expense</button> : null}
    </div>
}

export default NewExpenses;