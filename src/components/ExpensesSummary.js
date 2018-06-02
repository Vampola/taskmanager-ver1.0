import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'project' : 'projects';
    const formatedexpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div className="page-header">
        <div className="content-container">
            <h1 className="page-header-title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formatedexpensesTotal}</span></h1>
            <div className="page-header-actions">
                <Link className="button" to="/create">Add Project</Link>
            </div>
        </div>
            
        </div>
    );
};
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)

    };
};
export default connect(mapStateToProps)(ExpensesSummary);