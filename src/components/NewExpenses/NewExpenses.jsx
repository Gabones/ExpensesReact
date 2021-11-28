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
        setShowForm(false);
        props.onAddExpense(expenseData);
    }

    const isEditing = () => {
        setShowForm(true);
    }

    const cancelHandler = (falsy) => {
        setShowForm(falsy);
    }

    return <div className="new-expense">
        {showForm && <ExpensesForm onSaveExpenseData={saveHandler} onCancel={cancelHandler}/>}
        {!showForm && <button onClick={isEditing}>New Expense</button>}
    </div>
}

export default NewExpenses;