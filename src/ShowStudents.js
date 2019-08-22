import React, {Component} from 'react'

class showStudents extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const studentDiv = this.props.students.map(student =>
			<div>
			<h3>{student.firstname} </h3>
			<h3>{student.lastname} </h3>
			<img src={student.studentImage} />
			</div>
			
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