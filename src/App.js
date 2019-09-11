import React, {Component} from 'react';
import StudentForm from './components/StudentForm';
import ShowStudents from './components/ShowStudents';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Helmet} from 'react-helmet';
import Container from 'react-bootstrap/Container'




class App extends Component {
	constructor(props){
		super(props);
		this.state={
			students: []
		}
	}

	render(){
		const form = <StudentForm />
		const showStudents = <ShowStudents students= {this.state.students} />
		const cardStyle={
			width: "800px" ,
			height: "300px"
		}
		return (
				<Container style={{backgroundColor: "black", height: "100%", width: "100%"}} className="App" fluid>
					<Helmet >
						<meta charset="utf-8"/>
						<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
						<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
						<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
						<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
						<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
					</Helmet>
					<h>
						Coach Space
					</h>
					<input />

					<Link to ="/attendance">
						<Card bg="dark">
							<Card.Img variant="top" style={cardStyle} src="https://images.unsplash.com/photo-1435527173128-983b87201f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80" />
							<Card.Body>
								<Card.Text>
									Take Attendance
								</Card.Text>
							</Card.Body>
						</Card>
					</Link>

					<Link to ="/allStudents">
						<Card bg="dark">
							<Card.Img variant="top" style={cardStyle} src="https://images.unsplash.com/photo-1529566193698-bc394165d541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1676&q=80" />
							<Card.Body>
								<Card.Text>
									View all students
								</Card.Text>
							</Card.Body>
						</Card>
					</Link>
					<Link to ="/newStudent">
						<Card bg="dark">
							<Card.Img variant="top" style={cardStyle} src="https://images.unsplash.com/photo-1476525223214-c31ff100e1ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
							<Card.Body>
								<Card.Text>
									Add new Student
								</Card.Text>
							</Card.Body>
						</Card>
					</Link>
					<footer style={{alignContent: "flex-end", marginBottom: 0}}>
					</footer>
				</Container>
		);
	}
}

export default App;
