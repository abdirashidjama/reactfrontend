import React, {Component} from 'react';
import StudentForm from './StudentForm';
import ShowStudents from './ShowStudents';
import './App.css';


class App extends Component {
	render(){
		const students = [
			{
			firstName: "Abdirashid" 
			},
			{firstName: "Jama"}
		]
		return (
			<div className="App">
				<h>
					Coach Space
				</h>
				<StudentForm />
				<ShowStudents students={students}/>
			</div>
		);
	}
}

export default App;
