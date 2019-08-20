import React, {Component} from 'react';
import StudentForm from './StudentForm';
import './App.css';


class App extends Component {
	render(){
		return (
			<div className="App">
				<h>
					Hello World!
				</h>
				<StudentForm />
				
			</div>
		);
	}
}

export default App;
