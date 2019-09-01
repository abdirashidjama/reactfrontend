import React, {Component} from 'react';
import StudentForm from './StudentForm';
import ShowStudents from './ShowStudents';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


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
		const form = <StudentForm />
		const showStudents = <ShowStudents students= {this.state.students} />
		return (
				<div style={{display:"flex", flexDirection:"column"}} className="App">
					<h>
						Coach Space
						</h>
						<input />
						<Link to ="/allStudents">
							<span className="card" style={{display:"block"}}>
								<h2>View all students</h2>
								<img src="https://img.icons8.com/ios/50/000000/crowd.png" />
							</span>
						</Link>
						<Link to ="/newStudent">
							<span className="card" style={{display:"block"}}>
								<h2>Add new Student</h2>
								<img src="https://img.icons8.com/ios/50/000000/add-user-male.png"/>
							</span>
						</Link>
						<footer style={{alignContent: "flex-end", marginBottom: 0}}>
						<a href="https://icons8.com/icon/59220/crowd">icons by Icons8</a>
						</footer>
				</div>
		);
	}
}

export default App;
