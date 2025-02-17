import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
const SearchBox = () => {
  const searchTerm = useSelector((state) => state.contacts.filters.name);

  const dispatch = useDispatch();

  const handleSearchChange = (evt) => {
    dispatch({
      type: "searchTerm",
      payload: evt.target.value.trim() || "",
    });
  };
  return (
    <div>
      <div>
        <input
          onChange={handleSearchChange}
          value={searchTerm}
          placeholder="пошук"
          className={s.inputSearchIcon}
          type="text"
          name="searchInput"
        />
      </div>
    </div>
  );
};

export default SearchBox;
