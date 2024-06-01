import "./search-panel.css";

const SearchPanel = ({ searchValue, setSearchValue }) => {
	return (
		<input
			type="text"
			className="form-control search-input"
			placeholder="Знайти співробітника"
			value={searchValue}
			onChange={(e) => setSearchValue(e.target.value)}
		/>
	);
};

export default SearchPanel;
