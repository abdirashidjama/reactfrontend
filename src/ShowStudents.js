import React, {Component} from 'react'

class showStudents extends Component{
	constructor(props){
		super(props);
		this.state = {
			students: this.props.students
		}
	}
	render(){
		const studentDiv = this.state.students.map(student =>
			<div><h3>{student.firstName} </h3></div>
		);
		return(
			<div>
				<h1>students</h1>
				{studentDiv}
			</div>
		
		);
	}
}

export default showStudents;