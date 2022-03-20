import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  // If the condition is too many it will be more readable to define it outside.
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </ul>
  );

  {
    /* Js works such that if you use the && operator, it basically will return the part after the && operator, as a result of this overall check here, if the first condition is met. */
  }
  {
    /* {(props.items.length === 0 && <p>No expenses found.</p>}
      {(props.items.length > 0 &&
        (props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */
  }
};

export default ExpensesList;
