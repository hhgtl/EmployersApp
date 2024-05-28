import './employees-add-form.css';

const EmployeesAddForm = ({newEmployee, addEmployee, changeEmployeeNameOnForm, changeEmployeeSalaryOnForm}) => {
    let {fullName, salary} = newEmployee;
    return (
        <div className="app-add-form">
            <h3>Додати нового співробітника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Як його звати?" 
                    value={fullName}
                    onChange={(e) => changeEmployeeNameOnForm(e.target.value)}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" 
                    value={salary}
                    onChange={(e) => changeEmployeeSalaryOnForm(e.target.value)}/>
                    
                <button type="submit"
                        className="btn btn-outline-light"
                        onClick={ e => addEmployee(e)}>Додати</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;