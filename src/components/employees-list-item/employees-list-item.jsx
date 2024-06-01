import "./employees-list-item.css";

const EmployeesListItem = ({ fullName, salary, increaseSalary, setSalary, id, removeEmployee, toggleIncrease }) => {
	return (
		<li className="list-group-item d-flex justify-content-between">
			<span className={increaseSalary ? "list-group-item-label increase" : "list-group-item-label"}>{fullName}</span>
			<input type="text" className="list-group-item-input" value={`${salary}$`} onChange={(e) => setSalary(id, e.target.value)} />
			<div className="d-flex justify-content-center align-items-center">
				<button type="button" className="btn-cookie btn-sm " onClick={() => toggleIncrease(id)}>
					<i className="fas fa-cookie"></i>
				</button>

				<button type="button" className="btn-trash btn-sm " onClick={() => removeEmployee(id)}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	);
};

export default EmployeesListItem;
