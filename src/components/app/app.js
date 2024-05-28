import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import {useMemo, useState } from 'react';

function App() {
  let [state, setState] = useState({
    employees: [{id: 0, fullName: 'John Smith', salary: 900, increaseSalary: false}, {id: 1, fullName: 'Alex Rich', salary: 2000, increaseSalary: true}, {id: 2, fullName: 'Elon Musk', salary: 1000, increaseSalary: false}],
    sortEmployees: {sortType: '', sortedEmployees: []},
    newEmployee: {fullName: '', salary: ''},
    searchValue: '',
  })
  const sortEmployees = useMemo( () => {
    switch(state.sortEmployees.sortType) {
      case 'increase':
        return [...state.employees].filter( emp => emp.increaseSalary)
      case 'moreThan1000':
        return [...state.employees].filter( emp => emp.salary >= 1000)
      default: 
        return [...state.employees]
    }
  }, [state.employees, state.sortEmployees.sortType]) // Сортування робітників за фільтром
  const sortedAndSearchedEmployees = useMemo( () => {
    return sortEmployees.filter( emp => emp.fullName.toLocaleLowerCase().includes(state.searchValue.toLocaleLowerCase()))
  }, [state.searchValue, sortEmployees]) // Сортування за пошуком
  const setSearchValue = (e) => { // Редагувати пошукової строки
    setState({...state, searchValue: e.target.value})
  }
  const selectTypeSort = (sortType) => { // Зміна типу сортировки
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
  let totalIncrease = 0; // Рахунок працівників з премією
  state.employees.forEach( emp => emp.increaseSalary ? totalIncrease += 1 : null) // Кількість працівників, які получать премію
  return (
    <div className="app">
        <AppInfo totalEmployees={totalEmployees} totalIncrease={totalIncrease}/>

        <div className="search-panel">
            <SearchPanel searchValue={state.searchValue} setSearchValue={setSearchValue}/>
            <AppFilter selectTypeSort={selectTypeSort}/>
        </div>
        
        <EmployeesList employees={sortedAndSearchedEmployees} setSalary={setSalary} removeEmployee={removeEmployee} toggleIncrease={toggleIncrease}/>
        <EmployeesAddForm newEmployee={state.newEmployee} addEmployee={addEmployee} changeEmployeeNameOnForm={changeEmployeeNameOnForm} changeEmployeeSalaryOnForm={changeEmployeeSalaryOnForm}/>
    </div>
  );
}

export default App;
