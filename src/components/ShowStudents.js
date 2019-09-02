import React, {Component} from 'react'
import ShowStudent from './ShowStudent';

class ShowStudents extends Component{
	constructor(props){
		super(props);
		this.state={students:[]}
	}
	componentWillMount(){
		fetch('http://localhost:3001/students/')
		.then(res=> res.json())
		.then((data) => {
			this.setState({students: data.students})
			//dispatch(studentList(data.students))
		})
		.catch(console.log)
	}
	render(){
		//const studentDiv="";
		var allStudents = [];	
		for(const student of this.state.students){
			for(var pro in student){
				allStudents.push(student[pro])
			}
		}
		
		const studentDiv = this.state.students.map(student =>
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