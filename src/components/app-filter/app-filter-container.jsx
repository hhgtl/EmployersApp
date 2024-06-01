import { useDispatch } from "react-redux";
import AppFilter from "./app-filter";
import "./app-filter.css";
import { selectTypeSort } from "../../redux/employeesSlice";

const AppFilterContainer = () => {
	const dispatch = useDispatch();
	return <AppFilter selectTypeSort={(sortType) => dispatch(selectTypeSort({ sortType }))} />;
};

export default AppFilterContainer;
