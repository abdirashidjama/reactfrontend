import React, {Component} from 'react';
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import {Helmet} from 'react-helmet';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Attendance extends Component{
	constructor(props){
		super(props);

		this.state={
			students:[],
			date:"",
			filterData:[],
			classes:{
				"Gi" :[],
				"NoGi":[],
				"Striking":[]
			},
			value:"",
			student:{}
		};
		this.suggestions = this.suggestions.bind(this);
		this.fillBar = this.fillBar.bind(this);
	}

	fillBar(student){

		this.setState({
			student: student,
			value: this.state.student.firstname + " " + this.state.student.lastname
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
	suggestions(event){
		//set state of value in name search bar first
		const name = event.target.value
		const nameLowerCase = name.toLowerCase();
		
		this.setState({
			value: name,
			filterData: this.state.students.filter(student => (student.firstname.toLowerCase()).includes(nameLowerCase) ||(student.lastname.toLowerCase()).includes(nameLowerCase))
		});
	}

	render(){
		var suggestion;
		if(this.state.filterData.length != 0){
			suggestion = this.state.filterData.map((student)=>
				<li class="list-group-item" id={student._id} onClick={()=>this.fillBar(student)}>{student.firstname + " " + student.lastname}</li>
			);
		}

		
		return(
			<Container>
			<Helmet>
						<meta charset="utf-8"/>
						<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
						<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
						<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
						<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
						<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
			</Helmet>
			<h1>Attendance</h1>
			<div class="input-group mb3">
				<div class="input-group-prepend">
					<button class="btn btn-outline secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">class</button>
					<div class= "dropdown-menu">
						<a class="dropdown-item" href="#">Gi</a>
					</div>
					<input type="text" class="form-control" aria-label="Name input with dropdown button" value={this.state.value} onChange={this.suggestions}/>
					<input type="date" class="form-control" aria-label="date input"/>
					<button type="button" class="btn btn-primary"> Add </button>
				</div>
			</div>
			<ul class="list-group">
				{suggestion}
			</ul>
			</Container>

		);

	}
}

export default Attendance;

