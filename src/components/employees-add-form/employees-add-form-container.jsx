import { useDispatch, useSelector } from "react-redux";
import EmployeesAddForm from "./employees-add-form";
import "./employees-add-form.css";
import { addNewEmployee, changeEmployeeNameOnForm, changeEmployeeSalaryOnForm } from "../../redux/employeesSlice";

const EmployeesAddFormContainer = () => {
	const { newEmployee } = useSelector((state) => state.employeesList);
	const dispatch = useDispatch();
	return (
		<EmployeesAddForm
			newEmployee={newEmployee}
			changeEmployeeNameOnForm={(fullName) => dispatch(changeEmployeeNameOnForm({ fullName }))}
			changeEmployeeSalaryOnForm={(salary) => dispatch(changeEmployeeSalaryOnForm({ salary }))}
			addNewEmployee={() => dispatch(addNewEmployee())}
		/>
	);
};

export default EmployeesAddFormContainer;
