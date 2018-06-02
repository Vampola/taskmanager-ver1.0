import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from "./routers/AppRouter";
import configureStore from './store/configureStore';
import {firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage'
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';

import './css/App.css';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Gas bill', createdAt:1527889803309 }));
// store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Waters bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx= (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
}


ReactDOM.render(<LoadingPage/>, document.getElementById('root'));



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
           renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        });

    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
}); 






