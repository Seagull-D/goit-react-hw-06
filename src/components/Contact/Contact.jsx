import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

const Contact = ({ contactItem }) => {
  const dispatch = useDispatch();
  const { name, phone } = contactItem;

  const handleDeleteClick = () => {
    dispatch(removeContact(contactItem.id));
  };
  const removeContact = (id) => ({
    type: "REMOVE_CONTACT",
    payload: id,
  });

  return (
    <div className={s.contactContainer}>
      <ul className={s.contactlist}>
        <li className={s.contactItem}>
          <FaUser className={s.contactImg} /> {name}
        </li>
        <li className={s.contactItem}>
          <BsFillTelephoneFill className={s.contactImg} /> {phone}
        </li>
      </ul>
      <button
        className={s.contactBtn}
        type="button"
        onClick={handleDeleteClick}
      >
        Усунути
      </button>
    </div>
  );
};

export default Contact;
