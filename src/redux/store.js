import { configureStore } from "@reduxjs/toolkit";
import employeesListSlice from "./employeesSlice";

export default configureStore({
	reducer: {
		employeesList: employeesListSlice,
	},
});
