import React from 'react';
import { Link } from "react-router-dom";
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';


export const Header = ({startLogout}) => (
  <header>
    <div className="content-container">
    <div className="header-content">
      <Link className="header-title" to="/dashboard">
      <h1>Badin Project Manager</h1>
      </Link>
      {/* <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink> */}
      {/* <NavLink to="/help" activeClassName="is-active">Help</NavLink> */}
      <button className="button-link" onClick={startLogout}>Logout</button>
    </div>
    </div>
    
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect (undefined, mapDispatchToProps)(Header);