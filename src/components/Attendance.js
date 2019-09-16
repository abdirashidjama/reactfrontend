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
			gi:[],
			nogi:[],
			striking:[],
			fullName:"",
			category:"Gi",
			student:{}
		};
		this.suggestions = this.suggestions.bind(this);
		this.fillBar = this.fillBar.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.addStudent=this.addStudent.bind(this);
	}

	handleChange(event){
		this.setState({value: event.target.value})
	}

	fillBar(studentP){

		this.setState({
			student: studentP,
			fullName: studentP.firstname + " " + studentP.lastname, //this.state.student.firstname + " " + this.state.student.lastname,
			filterData: []
		});
	}

	addStudent(){
		switch(this.state.category){
			case ("Gi"):
				var newList = [...this.state.gi, this.state.student]
				this.setState({
					gi: newList
				});
				break;
			case("Nogi"):
				var newList = [...this.state.nogi, this.state.student]
				this.setState({
					nogi: newList
				});
				break;
			case("Striking"):
				var newList = [...this.state.striking, this.state.student]
				this.setState({
					striking: newList
				});
				break;
			default:
				break;
		}
		
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
		//set state of fullName in name search bar first
		const name = event.target.value;
		const nameLowerCase = name.toLowerCase();
		
		this.setState({
			fullName: name,
			filterData: this.state.students.filter(student => (student.firstname.toLowerCase()).includes(nameLowerCase) ||(student.lastname.toLowerCase()).includes(nameLowerCase))
		});
	}


	render(){
		//creating select and options will move to another class later
		
		var suggestion;
		if(this.state.filterData.length != 0){
			suggestion = this.state.filterData.map((student)=>
				<li class="list-group-item" id={student._id} onClick={()=>this.fillBar(student)}>{student.firstname + " " + student.lastname}</li>
			);
		}
		var attendance=[];
		var giList=[];
		var nogiList=[];
		var strikingList=[];
		if (this.state.date !=""){
			attendance.push(<h2>{this.state.date}</h2>);
			if(this.state.gi.length !=0){
				attendance.push(<h2>Gi Attendance</h2>)
				giList=this.state.gi.map((student)=><p>{student.firstname + student.lastname}</p>);
				attendance.push(giList);
			}
			if(this.state.nogi.length !=0){
				attendance.push(<h2>NoGi Attendance</h2>)
				nogiList=this.state.nogi.map((student)=><p>{student.firstname + student.lastname}</p>);
				attendance.push(nogiList);
			}
			if(this.state.striking.length !=0){
				attendance.push(<h2>Striking Attendance</h2>)
				strikingList=this.state.striking.map((student)=><p>{student.firstname + student.lastname}</p>);
				attendance.push(strikingList);
			}
	
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
					<select class= "form-control" id="classType" value={this.state.category} onChange={event => this.setState({category: event.target.value})}>
						<option value="Gi">Gi</option>
						<option value="Nogi">Nogi</option>
						<option value="Striking">Striking</option>
					</select>
					<input type="text" class="form-control" aria-label="Name input with dropdown button" value={this.state.fullName} onChange={this.suggestions}/>
					<input type="date" class="form-control" aria-label="date input" value={this.state.date} onChange={event => this.setState({date: event.target.value})}/>
					<button type="button" class="btn btn-primary" onClick={this.addStudent}> Add </button>
				</div>
			</div>
			<ul class="list-group">
				{suggestion}
			</ul>
			{attendance}
			</Container>
		);
	}
}

export default Attendance;

