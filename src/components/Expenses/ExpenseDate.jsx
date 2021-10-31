import './ExpenseDate.css';

function ExpenseDate(props) {
    const month = 'de ' + props.date.toLocaleString('pt-BR', { month: 'long' });
    const day = props.date.toLocaleString('pt-BR', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}&nbsp;</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">&nbsp;{year}</div>
        </div>
    );
}

export default ExpenseDate;