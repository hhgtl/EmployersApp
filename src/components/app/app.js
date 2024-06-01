import AppFilterContainer from "../app-filter/app-filter-container";
import SearchPanelContainer from "../search-panel/search-panel-container";
import EmployeesAddFormContainer from "../employees-add-form/employees-add-form-container";
import AppInfoContainer from "../app-info/app-info-container";
import EmployeesListContainer from "../employees-list/employees-list-container";
import "./app.css";

function App() {
	return (
		<div className="app">
			<AppInfoContainer />

			<div className="search-panel">
				<SearchPanelContainer />
				<AppFilterContainer />
			</div>

			<EmployeesListContainer />
			<EmployeesAddFormContainer />
		</div>
	);
}

export default App;
