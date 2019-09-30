import React, {Component} from 'react';

class StudentCard extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const cStyle={
			height: "15vw" ,
			width: "100%"
		}
		return(
			<div class="card h-5 w-5">
				<img class="card-img-top" style={cStyle} src={this.props.student.studentImage}/>
				<div class="card-body">
					<h5 class="card-title">{this.props.student.firstname + " " + this.props.student.lastname}</h5>
				</div>
			</div>
		
		);
	}

}
export default StudentCard;