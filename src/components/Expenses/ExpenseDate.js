import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" }); // gives full month name (or month:'short')
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); // or day:'numeric' -> gives the same result

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
