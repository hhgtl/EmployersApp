import { createSlice } from "@reduxjs/toolkit";

export const employeesListSlice = createSlice({
	name: "employeesList",
	initialState: {
		employees: [
			{ id: 0, fullName: "John Smith", salary: 900, increaseSalary: false },
			{ id: 1, fullName: "Alex Rich", salary: 2000, increaseSalary: true },
			{ id: 2, fullName: "Elon Musk", salary: 1000, increaseSalary: false },
			{ id: 3, fullName: "Jose Smith", salary: 4400, increaseSalary: false },
		],
		sortType: "",
		searchValue: "",
		newEmployee: { fullName: "", salary: "" },
	},
	reducers: {
		setSalaryAR: (state, action) => {
			// Редагувати заробітну плату робітника
			const value = action.payload.salaryValue.replace("$", ""); // Видаляємо знак '$'
			if (!isNaN(value)) {
				// Перевіряємо, чи значення є числом, і якщо так, змінюємо state
				state.employees.map((employee) => (employee.id === action.payload.userId ? (employee.salary = value) : employee));
			}
		},
		removeEmployeeAR: (state, action) => {
			// Видалити робітника
			state.employees = state.employees.filter((emp) => emp.id !== action.payload.userId);
		},
		toggleIncreaseAR: (state, action) => {
			// Перемикач збільшення зарплати
			state.employees.map((emp) => {
				if (action.payload.userId === emp.id) {
					return emp.increaseSalary ? (emp.increaseSalary = false) : (emp.increaseSalary = true);
				}
				return emp;
			});
		},
		selectTypeSort: (state, action) => {
			// Вибрати тип сортировки
			state.sortType = action.payload.sortType;
		},
		setSearchValue: (state, action) => {
			// Редагувати пошукову строку
			state.searchValue = action.payload.searchValue;
		},
		addNewEmployee: (state) => {
			// Додати нового робітника
			state.employees.push({
				id: 4,
				fullName: state.newEmployee.fullName,
				salary: state.newEmployee.salary,
				increaseSalary: false,
			});
		},
		changeEmployeeNameOnForm: (state, action) => {
			// Змінити ім'я робітника в формі
			state.newEmployee.fullName = action.payload.fullName;
		},
		changeEmployeeSalaryOnForm: (state, action) => {
			// Змінити заробітну плату в формі
			debugger;
			state.newEmployee.salary = action.payload.salary;
		},
	},
});

export const {
	setSalaryAR,
	removeEmployeeAR,
	toggleIncreaseAR,
	selectTypeSort,
	setSearchValue,
	addNewEmployee,
	changeEmployeeNameOnForm,
	changeEmployeeSalaryOnForm,
} = employeesListSlice.actions;

export default employeesListSlice.reducer;
