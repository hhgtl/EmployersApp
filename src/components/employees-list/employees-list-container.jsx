import { useDispatch, useSelector } from "react-redux";
import EmployeesListItem from "../employees-list-item/employees-list-item";
import EmployeesList from "./employees-list";
import { setSalaryAR, removeEmployeeAR, toggleIncreaseAR } from "../../redux/employeesSlice";

import "./employees-list.css";
import { useMemo } from "react";

const EmployeesListContainer = () => {
	const employeesListData = useSelector((state) => state.employeesList);
	const { employees, sortType, searchValue } = employeesListData;
	const dispatch = useDispatch();

	const sortEmployees = useMemo(() => {
		switch (sortType) {
			case "increase":
				return employees.filter((emp) => emp.increaseSalary);
			case "moreThan1000":
				return employees.filter((emp) => emp.salary >= 1000);
			default:
				return employees;
		}
	}, [employees, sortType]); // Сортування робітників за фільтром

	const sortedAndSearchedEmployees = useMemo(() => {
		if (searchValue.length !== 0) {
			return sortEmployees.filter((emp) => emp.fullName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
		}
		return sortEmployees;
	}, [searchValue, sortEmployees]); // Сортування за пошуком

	let employeesList = sortedAndSearchedEmployees.map((item) => (
		<EmployeesListItem
			key={item.id}
			id={item.id}
			fullName={item.fullName}
			salary={item.salary}
			increaseSalary={item.increaseSalary}
			setSalary={(userId, salaryValue) => dispatch(setSalaryAR({ userId, salaryValue }))}
			removeEmployee={(userId) => dispatch(removeEmployeeAR({ userId }))}
			toggleIncrease={(userId) => dispatch(toggleIncreaseAR({ userId }))}
		/>
	));
	return <EmployeesList employeesList={employeesList} />;
};

export default EmployeesListContainer;
