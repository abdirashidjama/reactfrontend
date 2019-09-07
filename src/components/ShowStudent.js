import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import {Helmet} from 'react-helmet';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class ShowStudent extends Component{
	constructor(props){
		super(props)
		//this.deleteStudent= this.deleteStudent.bind(this);
	}
	/*deleteStudent(){
		var url = 'http://localhost:3001/students/'+this.props.student._id;

		fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => res.json())
		.then(response=>console.log('Success:', JSON.stringify(response)))
		.catch(error => console.error('Error:', error));
		alert("user deleted");
		return;
	}*/
	render(){
		const divStyle = {
				borderColor: "#eeeeee",
				borderLeftWidth: "2px",
				borderStyle: "solid",
				borderTopWidth: "2px",
				textAlign: "center",
				padding: "2rem"
		}
		const imageStyle={
			height: "100px" ,
			width: "80px"
		}
		return(
			<tr>
				<td style={imageStyle}><Image src={this.props.student.studentImage} fluid/></td>
				<td>{this.props.student.firstname}</td>
				<td>{this.props.student.lastname}</td>
				<td>{this.props.student.email}</td>
				<td>
					<ButtonGroup vertical>
						<Button variant="primary" >Update</Button>
						{this.props.delete}
		{/*<Button variant ="danger" >Delete</Button>*/}
					</ButtonGroup>
				</td>
			</tr>

		
		);
	}

}
export default ShowStudent;