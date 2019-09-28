import React, {Component} from 'react';

class StudentCard extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const cStyle={
			height: "100px" ,
			width: "100px"
		}
		return(
			<div class="card">
				<img class="img-thumbnail text-center" style={cStyle} src={this.props.student.studentImage}/>
				<div class="card-body">
					<h5 class="card-title">{this.props.student.firstname + " " + this.props.student.lastname}</h5>
				</div>
			</div>
		
		);
	}

}
export default StudentCard;