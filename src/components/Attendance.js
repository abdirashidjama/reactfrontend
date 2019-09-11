import React, {Component} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import {Helmet} from 'react-helmet';

class Attendance extends Component{
	constructor(props){
		super(props);
	}

	render(){
		
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
			<InputGroup className="mb-3">
				<DropdownButton
				as={InputGroup.Prepend} 
				variant="outline-secondary"
				title="Class"
				id="input-group-dropdown-1"
				>
					<Dropdown.Item href="#">Gi</Dropdown.Item>
				</DropdownButton>
				<FormControl aria-describedby="basic-addon1" />
			</InputGroup>
			</Container>

		);

	}
}

export default Attendance;

