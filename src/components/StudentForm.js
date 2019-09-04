import React, {Component} from 'react';
import   firebase from '../firebase-config';

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
			hours: "",
			studentImage: "",
			imageUrl:""

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
		

		//get file
		const file = this.file.files[0];
		//create storage ref
		const storageRef = firebase.storage().ref();
		var metadata = {
			contentType: 'image/jpeg'
		};

		var task = storageRef.child(this.file.files[0].name).put(file, metadata);

		var urlImage = "";

		task.on(firebase.storage.TaskEvent.STATE_CHANGED,
			(snapshot)=>{

			}, (error)=>{

			}, ()=>{
				task.snapshot.ref.getDownloadURL().then((urlDownload)=>{
					this.setState({
						imageUrl: urlDownload
					}, 
					
					()=> {
						console.log(this.state.imageUrl);
						var url = 'http://localhost:3001/students/';
						const data = {
							firstname : this.state.firstName,
							lastname : this.state.lastName,
							email: this.state.email,
							number: this.state.number,
							memexpdate: this.state.membershipExpiry,
							hours: this.state.hours,
							studentImage: this.state.imageUrl
						}
						fetch(url, {
							method: 'POST',
							body: JSON.stringify(data),
							headers: {
								'Content-Type': 'application/json'
							}
						})
						.then(res => res.json())
						.then(response=>console.log('Success:', JSON.stringify(response)))
						.catch(error => console.error('Error:', error));
					}
					);
				});
			}
		);



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
				id={data.name}
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
					<input type="file" ref={this.setRef} />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}

}

export default StudentForm;