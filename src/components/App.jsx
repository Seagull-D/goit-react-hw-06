import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const isFormVisible = useSelector((state) => state.contacts.isFormVisible); // Оновлений шлях
  const dispatch = useDispatch();

  const toggleFormVisibility = () => {
    dispatch({ type: "TOGGLE_FORM_VISIBILITY" });
  };

  return (
    <div className="appStyle">
      <h1>Телефонна книга</h1>
      {contacts.length > 1 && <SearchBox />}
      {isFormVisible ? (
        <ContactForm closeForm={toggleFormVisibility} />
      ) : (
        <button className="toggleFormBtn" onClick={toggleFormVisibility}>
          Додати контакт
        </button>
      )}
      <ContactList closeForm={toggleFormVisibility} />
    </div>
  );
};

export default App;
