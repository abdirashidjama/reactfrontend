import React, {Component} from 'react';
import ShowStudent from './ShowStudent';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import {Helmet} from 'react-helmet';
import Button from 'react-bootstrap/Button'
import UpdateStudentForm from './UpdateStudentForm';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Modal from 'react-bootstrap/Modal';


class ShowStudents extends Component{
	constructor(props){
		super(props);
		this.state={
			students:[],
			updateForm: false,
			form:[]
		}
		this.deleteStudent = this.deleteStudent.bind(this);
		this.updateStudent = this.updateStudent.bind(this)
	}
	deleteStudent(student){
		//Removes from database
		var url = 'http://localhost:3001/students/'+ student._id;

		fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => res.json())
		.then(response=>console.log('Success:', JSON.stringify(response)))
		.catch(error => console.error('Error:', error));
		// Removes from state array
		
		//filter out deleted Student
		const newStudents = this.state.students.filter(function(element){
			return element.email != student.email
		})

		//set new state to new filtered array
		this.setState({
			students: newStudents
		})

		alert("Student deleted");
	}
	updateStudent(studentInfo){
		this.setState({
			form: <UpdateStudentForm student={studentInfo}></UpdateStudentForm>,
			updateForm: true
		});

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
		//const studentDiv="";
		var allStudents = [];	
		for(const student of this.state.students){
			for(var pro in student){
				allStudents.push(student[pro])
			}
		}
		
		
		const studentDiv = this.state.students.map(student =>
				<ShowStudent 
				student={student} 
				delete={<Button variant ="danger" onClick={()=>this.deleteStudent(student)}>Delete</Button>}
				update={<Button variant ="primary" onClick={()=>this.updateStudent(student)}>Update</Button>}
				/>

		);

		return(
				<div>
					<Helmet >
						<meta charset="utf-8"/>
						<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
						<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
						<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
						<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
						<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
					</Helmet>
					<Container style={{backgroundColor: "black", height: "2000px"}} fluid>
					<Table striped bordered hover variant="dark" size="sm">
						<thead>
							<tr>
								<th>
									Image
								</th>
								<th>
									First Name
								</th>
								<th>
									Last Name
								</th>
								<th>
									Hours
								</th>
								<th>
									Contact Number
								</th>
								<th>
									email
								</th>
								<th>
									action
								</th>
							</tr>
						</thead>
					<tbody>
						{studentDiv}
					</tbody>
					</Table>
					
					<Modal.Dialog>
						<Modal.Header closeButton>
							<Modal.Title>Update Student</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							{this.state.updateForm?this.state.form:null}
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary">close</Button>
						</Modal.Footer>
					</Modal.Dialog>
					
					</Container>
					
				</div>
		
		);
	}
}

export default ShowStudents;