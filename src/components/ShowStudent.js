import React, {Component} from 'react';

class ShowStudent extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const divStyle = {
				borderColor: "#eeeeee",
				borderLeftWidth: "2px",
				borderStyle: "solid",
				borderTopWidth: "2px",
				textAlign: "center",
				padding: "2rem"
		}
		return(
			<div style={divStyle}>
				<ul style={{listStyleType: "none"}}>
					<li> {this.props.student.firstname} {this.props.student.lastname}</li>
					<img height="100vh" width="100vw" 
					src="https://vignette.wikia.nocookie.net/deathbattlefanon/images/2/20/C0A9B238-91F6-46AA-ABDC-3FC720228C25.png/revision/latest?cb=20171104014554"/>
				</ul>
			</div>
		
		);
	}

}
export default ShowStudent;