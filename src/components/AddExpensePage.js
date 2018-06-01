import React from "react";
import { connect } from "react-redux"; //get acces to props.dispatch
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const AddExpensePage = props => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={expence => {
        props.dispatch(addExpense(expence));
        props.history.push("/"); //redirect after button clicked
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
