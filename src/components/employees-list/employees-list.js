import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employees, setSalary, removeEmployee, toggleIncrease}) => {
    debugger
    let employeesList = employees.map(item => <EmployeesListItem key={item.id} id={item.id} fullName={item.fullName} salary={item.salary} increaseSalary={item.increaseSalary} setSalary={setSalary} removeEmployee={removeEmployee} toggleIncrease={toggleIncrease}/>)
    return (
        <ul className="app-list list-group">
            {employeesList}
        </ul>
    )
}

export default EmployeesList;