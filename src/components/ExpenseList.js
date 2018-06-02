import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div className="content-container">
  <div className="list-header">
    <div className="show-for-mobile">Projects</div>
    <div className="show-for-desktop">Project</div>
    <div className="show-for-desktop">Time</div>
  </div>
  <div className="list-body">
    {
      props.expenses.length === 0 ? (
        <p className="list-item list-item-message">No projects :(</p>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      )
    }
    
  </div>
    
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);