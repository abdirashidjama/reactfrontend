import React, {Component} from 'react';
import StudentForm from './StudentForm';
import ShowStudents from './ShowStudents';
import './App.css';


class App extends Component {
	constructor(props){
		super(props);
		this.state={
			students: []
		}
	}
	componentWillMount(){
		fetch('http://localhost:3001/students/')
		.then(res=> res.json())
		.then((data) => {
			this.setState({students: data.students})
		})
		.catch(console.log)
	}
	render(){
		const students= this.state.students;
		return (
			<div className="App">
				<h>
					Coach Space
				</h>
				<StudentForm />
				<ShowStudents students={this.state.students} />
				{<p>{JSON.stringify(students)}</p>}
				
			</div>
		);
	}
}

export default App;
