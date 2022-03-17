import React,{ useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const[enteredTitle, setEnteredTitle] = useState("");
  const[enteredAmount, setEnteredAmount] = useState("");
  const[enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault(); // This default Javascript behavior. It prevents the default of the request being sent and since that request is not sent, so the page is not reload. 
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate) // passed the enteredDate which will parse that date string and convert into a date object.
    }
    
    props.onSaveExpenseData(expenseData)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }


  // multiple useState usage alternatives
  // const [userInput, setUserInput] = useState({
  //   enteredTitle : "",
  //   enteredAmount : "",
  //   enteredDate : ""
  // })


  // // * It technically would work, but in niche cases it could fail. *
  // const titleChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle:event.target.value
  //   })
  // }

  // // * If your state update depends on the previous state, use this function form. *
  // const titleChangeHandler = (event) => {
  //   setUserInput((prevState)=>{
  //     return {...prevState, enteredTitle:event.target.value}
  //   })
  // }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} /> {/* The onInput event could also be used here but it would be triggered continuously on every change on this input. In the onChange event, it is triggered once when the focus on the input ends.Also, the onChange event can be used for DropDownList, so it is more advantageous. */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />{" "}
          {/* 2019-01-01 ---  2022-12-31 */}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
