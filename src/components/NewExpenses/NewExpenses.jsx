import './NewExpenses.css'
import ExpensesForm from './ExpenseForm';

const NewExpenses = (props) => {
    const saveHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return <div className="new-expense">
        <ExpensesForm onSaveExpenseData={saveHandler} />
    </div>
}

export default NewExpenses;