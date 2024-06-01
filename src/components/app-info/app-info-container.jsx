import { useSelector } from "react-redux";
import AppInfo from "./app-info";
import "./app-info.css";

const AppInfoContainer = () => {
	const { employees } = useSelector((state) => state.employeesList);
	const totalEmployees = employees.length; // Загальна кількість працівників
	let totalIncrease = 0; // Рахунок працівників з премією
	employees.forEach((emp) => (emp.increaseSalary ? (totalIncrease += 1) : null)); // Кількість працівників, які получать премію
	return <AppInfo totalEmployees={totalEmployees} totalIncrease={totalIncrease} />;
};

export default AppInfoContainer;
