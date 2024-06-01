import "./employees-list.css";

const EmployeesList = ({ employeesList }) => {
	return <ul className="app-list list-group">{employeesList}</ul>;
};

export default EmployeesList;
