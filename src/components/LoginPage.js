import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
    <div className="box-layout-box">
        <h1 className="box-layout-title">Badin Project Manager</h1>
        <p>Create tasks with style XD</p>
    <button className="btn-large" onClick={startLogin}>Login with Google</button>
    </div>        
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);