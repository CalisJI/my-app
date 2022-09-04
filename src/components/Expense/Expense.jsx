import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../Expense/Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function Expense(props) {
  const [filteryear, setFilterYear] = useState("2021");

  const filterChangedhandler = (selectYear) => {
    setFilterYear(selectYear);
  };
  const filterEnterYear = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteryear;
  });

  // let expenseCondition = <p>No Expense Found.</p>;
  // if (filterEnterYear.length > 0) {
  //   expenseCondition = filterEnterYear.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteryear}
          onChangeFilter={filterChangedhandler}
        />
        <ExpenseChart expenses={filterEnterYear}/>
        <ExpenseList items ={filterEnterYear}/>
        {/* <ExpenseItem
          title={props.item[0].title}
          date={props.item[0].date}
          amount={props.item[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[1].title}
          date={props.item[1].date}
          amount={props.item[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[2].title}
          date={props.item[2].date}
          amount={props.item[2].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.item[3].title}
          date={props.item[3].date}
          amount={props.item[3].amount}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expense;
