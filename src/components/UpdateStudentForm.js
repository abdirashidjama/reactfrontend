import React, {Component} from 'react';
import   firebase from '../firebase-config';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Helmet} from 'react-helmet';


class UpdateStudentForm extends Component{
	constructor(props){
		super(props)
		this.state =
		{
			_id: this.props.student._id,
			firstName: this.props.student.firstname,
			lastName: this.props.student.lastname,
			email: this.props.student.email,
			contactNumber: this.props.student.number,
			membershipExpiry: this.props.student.memexpdate,
			hours: this.props.student.hours,
			studentImage: this.props.student.studentImage,
			imageUrl:this.props.student.studentImage

		}
		this.setRef = ref => {
			this.file = ref
		}
		this.handleChange= this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		const target = event.target;
		const name = target.name;
		const value = target.value; 
		this.setState({
			[name]: value
		})
	}
	handleSubmit(event) {
		var listState = "";
		for(var el in this.state){
			listState += this.state[el] + '\n';
		}
		alert('Form submitted for ' + '\n' + listState);
		event.preventDefault();
		

		var url = 'http://localhost:3001/students/' +this.state._id;
						const data = {
							firstname : this.state.firstName,
							lastname : this.state.lastName,
							email: this.state.email,
							number: this.state.number,
							memexpdate: this.state.membershipExpiry,
							hours: this.state.hours
						}
						var reqbody=[];
						for(var key in data){
							reqbody.push({"propName": key, "value": data[key]})
						}
						fetch(url, {
							method: 'PATCH',
							body: JSON.stringify(reqbody),
							Origin: "https://javascript.info",
							headers: {
								'Content-Type': 'application/json'
							}
						})
						.then(res => res.json())
						.then(response=>console.log('Success:', JSON.stringify(response)))
						.catch(error => console.error('Error:', error));



	}
	render(){
		const styled = {
				display: "flex",
				flexDirection: "column"
		}
		const formData = [
			{
				name: "First Name",
				id: "first Name",
				type: "text"
			},
			{	
				name: "Last Name",
				id: "last Name",
				type: "text"
			},
			{
				name: "email",
				id: "email",
				type: "text"
			},
			{	
				name: "Contact Number",
				id: "contact Number",
				type: "text"
			},
			{
				name: "Membership Expiry",
				id: "membership Expiry",
				type: "text"
			},
			{
				name: "Total Hours",
				id: "hours",
				type: "number"
			}
		]
		const listItems = formData.map(data =>
			<Form.Group className="mb-3">
				{data.name}
				<Form.Control 
				value={this.state[data.id.replace(/\s/g,'')]} 
				name={data.id.replace(/\s/g,'')}
				onChange={this.handleChange} 
				id={data.id}
				/>
			</Form.Group>
		)
		const backgroundStyle={
			height: "100px" ,
			width: "80px"
		}
		return (
			<div className="StudentForm">
				<Helmet>
						<meta charset="utf-8"/>
						<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
						<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
						<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
						<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
						<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
				</Helmet>	
				<h1>Update Student</h1>
				<Form onSubmit={this.handleSubmit} style={styled}>
					{
						listItems
					}
					<input type="file" ref={this.setRef} />
					<br/>
					<input type="submit" value="Submit" />
				</Form>
			</div>
		);
	}

}

export default UpdateStudentForm;