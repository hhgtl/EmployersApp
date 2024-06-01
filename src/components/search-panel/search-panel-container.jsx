import { useDispatch, useSelector } from "react-redux";
import SearchPanel from "./search-panel";
import "./search-panel.css";
import { setSearchValue } from "../../redux/employeesSlice";

const SearchPanelContainer = () => {
	const searchValue = useSelector((state) => state.employeesList.searchValue);
	const dispatch = useDispatch();
	return <SearchPanel setSearchValue={(searchValue) => dispatch(setSearchValue({ searchValue }))} searchValue={searchValue} />;
};

export default SearchPanelContainer;
