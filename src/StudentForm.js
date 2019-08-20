import React, {Component} from 'react'

class StudentForm extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const styled = {
				display: "flex",
				flexDirection: "column"
		}
		return (
			<div className="StudentForm">
				<h1>add Student</h1>
				<form style={styled}>
					<label>
						First Name:
						<input type="text" name="firsname" />
					</label>
					<label>
						Last Name:
						<input type="text" name="lastname" />
					</label>
					<label>
						email:
						<input type="text" name="email" />
					</label>
					<label>
						contact number:
						<input type="text" name="contactnumber" />
					</label>
					<label>
						Membership Expiry Date:
						<input type="text" name="expirydate" />
					</label>
					<label>
						hours:
						<input type="number" name="hours" />
					</label>
					
				</form>
			</div>
		);
	}

}

export default StudentForm;