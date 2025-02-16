import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ onDelete }) => {
  const contactsList = useSelector((state) => state.contacts.contacts.items);
  const filtr = useSelector((state) => state.contacts.filters.name);
  const contacts = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(filtr.toLowerCase().trim())
  );
  if (contacts.length === 0) {
    return <p>Список контактів порожній.</p>;
  }

  return (
    <div className={s.contactsList}>
      {contacts.map((contact, idx) => (
        <Contact key={idx} contactItem={contact} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ContactList;
