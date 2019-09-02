const lister =(state = [], action) => {
	switch(action.type){
		case GETSTUDENTS:
			return [...action.students]
		default:
			return state;
	}
}

export default lister