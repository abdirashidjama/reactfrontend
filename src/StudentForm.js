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
			memExpDate: "",
			hours: ""
		}
	}
	render(){
		const styled = {
				display: "flex",
				flexDirection: "column"
		}
		const formData = [
			{
				name: "first name",
				type: "text"
			},
			{
				name: "last name",
				type: "text"
			},
			{
				name: "email",
				type: "text"
			},
			{
				name: "contact number",
				type: "text"
			},
			{
				name: "membership expiry",
				type: "text"
			},
			{
				name: "hours",
				type: "number"
			},
			
		]
		const listItems = formData.map(data =>
			<label>
				{data.name}
				<input type={data.type} name={data.name.replace(/\s/g,'')} />
			</label>
		)
		return (
			<div className="StudentForm">
				<h1>add Student</h1>
				<form style={styled}>
					{
						listItems
					}
					<button>submit</button>
				</form>
			</div>
		);
	}

}

export default StudentForm;