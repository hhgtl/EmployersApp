import "./app-filter.css";

const AppFilter = ({selectTypeSort}) => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light"
                    value="allEmployees"
                    onClick={(e) => selectTypeSort(e.target.value)}>
                    Усі співробітники
            </button>
            <button type="button"
                    className="btn btn-outline-light"
                    value="increase"
                    onClick={(e) => selectTypeSort(e.target.value)}>
                    на підвищення
            </button>
            <button type="button"
                    className="btn btn-outline-light"
                    value="moreThan1000"
                    onClick={(e) => selectTypeSort(e.target.value)}>
                    З/П більше 1000 $
            </button>
        </div>
    )
}

export default AppFilter;