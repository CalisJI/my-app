import './NewExpense.css';
import React, { useState }from 'react';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
    const[isEditting,setIsEditing]= useState(false);
    const edittinghandler =()=>{
        setIsEditing(true);
    };
    const saveExpenseDataHandler =(enterExpenseData)=>{
        const expenseData ={
            ...enterExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const cancelEdittingHandler =()=>{
        setIsEditing(false);
    };
    return <div className='new-expense'>
        {!isEditting&&<button onClick={edittinghandler} >Add New Expense</button>}
        {isEditting&&<ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={cancelEdittingHandler}/>}
    </div>
}
export default NewExpense;