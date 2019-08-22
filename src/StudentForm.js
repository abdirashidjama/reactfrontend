import React, {Component} from 'react'

class StudentForm extends Component{
	constructor(props){
		super(props)
		
		this.state =
		{
			firstName: "",
			lastName: "",
			email: "",
			contactNumber: "",
			membershipExpiry: "",
			hours: ""
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
		var url = 'http://localhost:3001/students/';
		const data = {
			firstname : this.state.firstName,
			lastname : this.state.lastName
		}
		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
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
				name: "first Name",
				type: "text"
			},
			{
				name: "last Name",
				type: "text"
			},
			{
				name: "email",
				type: "text"
			},
			{
				name: "contact Number",
				type: "text"
			},
			{
				name: "membership Expiry",
				type: "text"
			},
			{
				name: "hours",
				type: "number"
			}
			
		]
		const listItems = formData.map(data =>
			<label>
				{data.name}
				<input type={data.type} 
				value={this.state[data.name.replace(/\s/g,'')]} 
				name={data.name.replace(/\s/g,'')}
				onChange={this.handleChange} 
				/>
			</label>
		)
		return (
			<div className="StudentForm">
				<h1>Add Student</h1>
				<form onSubmit={this.handleSubmit} style={styled}>
					{
						listItems
					}
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}

}

export default StudentForm;