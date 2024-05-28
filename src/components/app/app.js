import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import {useEffect, useState } from 'react';

function App() {
  let [state, setState] = useState({
    employees: [{id: 0, fullName: 'John Smith', salary: 900, increaseSalary: false}, {id: 1, fullName: 'Alex Rich', salary: 2000, increaseSalary: true}, {id: 2, fullName: 'Elon Musk', salary: 1000, increaseSalary: false}],
    sortEmployees: {sortType: '', sortedEmployees: []},
    newEmployee: {fullName: '', salary: ''}
  })
  const sortEmployees = () => {
    switch(state.sortEmployees.sortType) {
      case 'increase':
        setState({...state, sortEmployees: {...state.sortEmployees, sortedEmployees: state.employees.filter( emp => emp.increaseSalary)}})
        break
      case 'moreThan1000':
        setState({...state, sortEmployees: {...state.sortEmployees, sortedEmployees: state.employees.filter( emp => emp.salary >= 1000)}})
        break
      default: 
        setState({...state, sortEmployees: {...state.sortEmployees, sortedEmployees: [...state.employees]}})
        break
    }
  }
  useEffect(() => {
    sortEmployees();
  });
  const selectTypeSort = (sortType) => {
    setState({...state, sortEmployees: {...state.sortEmployees, sortType: sortType}})
  }
  const setSalary = (id, salaryValue) => { // Редагувати заробітну плату робітника
    setState({...state, employees: state.employees.map( employee => employee.id !== id ? employee : {...employee, salary: typeof salaryValue === "number" ? salaryValue : null})})
  }
  const changeEmployeeNameOnForm = (name) => { // Змінити ім'я робітника в формі
    setState({...state, newEmployee: {...state.newEmployee, fullName: name}})
  }
  const changeEmployeeSalaryOnForm = (salary) => { // Змінити заробітну плату в формі
    setState({...state, newEmployee: {...state.newEmployee, salary: salary}})
  }
  const addEmployee = (e) => { // Додати нового робітника
    let newEmp = {id: 3, fullName: state.newEmployee.fullName, salary: state.newEmployee.salary, increaseSalary: false}
    setState({...state, employees: [...state.employees, newEmp], newEmployee: {fullName: '', salary: ''}})
    e.preventDefault()
  }
  const removeEmployee = (userId) => { // Видалити робітника
    setState({...state, employees: state.employees.filter( emp => emp.id !== userId)})
  }
  const toggleIncrease = (userId) => { // Перемикач збільшення зарплати
    setState({...state, employees: state.employees.map( emp => {
      if (userId === emp.id) {
        return emp.increaseSalary ? {...emp, increaseSalary: false} : {...emp, increaseSalary: true};
      }
      return emp;
    })})
  }
  const totalEmployees = state.employees.length; // Загальна кількість працівників
  let totalIncrease = 0; // Кількість працівників, які получать премію
  state.employees.forEach( emp => emp.increaseSalary ? totalIncrease += 1 : null)
  return (
    <div className="app">
        <AppInfo totalEmployees={totalEmployees} totalIncrease={totalIncrease}/>

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter selectTypeSort={selectTypeSort}/>
        </div>
        
        <EmployeesList employees={state.sortEmployees.sortedEmployees} setSalary={setSalary} removeEmployee={removeEmployee} toggleIncrease={toggleIncrease}/>
        <EmployeesAddForm newEmployee={state.newEmployee} addEmployee={addEmployee} changeEmployeeNameOnForm={changeEmployeeNameOnForm} changeEmployeeSalaryOnForm={changeEmployeeSalaryOnForm}/>
    </div>
  );
}

export default App;