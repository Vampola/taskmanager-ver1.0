import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item-title">{description}</h3>
      <span className="list-item-date">{moment(createdAt).format("MMMM Do YYYY")}</span>
    </div>
    <div>
      <h3 className="list-item-amount">{numeral(amount / 100).format("$0,0.00")}</h3>
    </div>
  </Link>
);

export default connect()(ExpenseListItem);
