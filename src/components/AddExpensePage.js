import React from "react";
import { connect } from "react-redux"; //get acces to props.dispatch
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
      <div className="page-header">      
        <div className="content-container">          
          <h1 className="page-header-title">Add Project</h1>
      </div>
      </div>
      <div className="content-container">
      <ExpenseForm
              onSubmit={this.onSubmit}
      />
      </div>
      
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
