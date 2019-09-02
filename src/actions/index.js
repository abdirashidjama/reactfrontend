const GETSTUDENTS = 'GETSTUDENTS';

export const studentList = (students)=> {
	return {
		type:GETSTUDENTS,
		students
	}
}