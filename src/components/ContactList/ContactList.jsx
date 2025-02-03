import { nanoid } from "@reduxjs/toolkit";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { selectLoading } from "../../redux/selectors";

// import { selectContacts, selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  // const contacts = useSelector(selectContacts);
  // const search = useSelector(selectNameFilter);
  // const filterContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(search.trim().toLowerCase())
  // );

  return (
    <>
      {filteredContacts.length === 0 && !isLoading ? (
        <ul className={css.listContacts}>
          {filteredContacts.map((contact) => (
            <li className={css.itemContact} key={nanoid()}>
              <Contact data={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.infoText}>Your phonebook is empty</p>
      )}

      {!filteredContacts.length && filteredContacts.length !== 0 && (
        <p className={css.infoText}>No contacts found</p>
      )}
    </>
  );
};

export default ContactList;
