import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";

function ExpenseForm(props) {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");
  const [isValid, setIsValid] = useState(true);
  //   const [userInput, setUserInput] = useState({
  //     enterTitle: "",
  //     enterAmount: "",
  //     enterDate: "",
  //   });
  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
    if(event.target.value.trim().length> 0){
      setIsValid(true);
    }
    // setUserInput({
    //     ...userInput,enterTitle:event.target.value
    // })
    // console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
    // setUserInput({
    //     ...userInput,enterAmount:event.target.value
    // })
    console.log(event.target.value);
  };
  const dataChangeHandler = (event) => {
    setEnterDate(event.target.value);
    // setUserInput({
    //     ...userInput,enterDate:event.target.value
    // })
    console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if(enterTitle.trim().length===0)
    {
      setIsValid(false);
      return;
    }
    const expenseData = {
        title:enterTitle,
        amount:+enterAmount,
        date:new Date(enterDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');
  };
  
  return (
    <form onSubmit={submitHandler}>
      <div className={styles['new-expense__controls']}>
        <div className={`${styles['new-expense__control']} ${!isValid && styles.isvalid}`}>
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className={styles['new-expense__control']}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={styles['new-expense__control']}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enterDate}
            onChange={dataChangeHandler}
          />
        </div>
      </div>
      <div className={styles['new-expense__actions']}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
