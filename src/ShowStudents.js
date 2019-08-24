import React, {Component} from 'react'
import ShowStudent from './ShowStudent';

class ShowStudents extends Component{
	constructor(props){
		super(props);
	}
	render(){
		var allStudents = [];	
		for(const student of this.props.students){
			for(var pro in student){
				allStudents.push(<h5>{JSON.stringify(student[pro])}</h5>)
			}

	
		}
		const studentDiv = this.props.students.map(student =>
				<ShowStudent student={student} />

		);
		
		return(
				<div>
					<h1>All Students</h1>
					<div style={{display: "flex"}}>
						{studentDiv}
					</div>
				</div>
		
		);
	}
}

export default ShowStudents;