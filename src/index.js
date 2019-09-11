import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StudentForm from './components/StudentForm';
import ShowStudents from './components/ShowStudents';
import Attendance from './components/Attendance';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { creatStore } from 'redux';
//import lister from './reducers/lister'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
//import rootReducer from './redux/reducers';

//To Do: add reducer 
/*const store = createStore(
		null,
		applyMiddleware(thunk)
);*/
const store = {};
const routing =(
	//<Provider store={store}>
	<Router>
		<div>
			<Route exact path="/" component={App}/>
			<Route path="/newStudent" component={StudentForm} />
			<Route path="/allStudents" component={ShowStudents}/>
			<Route path="/attendance" component={Attendance}/>
		</div>
	</Router>
	//</Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
