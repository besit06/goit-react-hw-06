import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;

    const duplicate = contacts.some(contact => contact.name === name.value);
    if (duplicate) {
      alert(`${name.value} is already in contacts.`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name: name.value, number: number.value }));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        Name
        <input name="name" type="text" required />
      </label>
      <label>
        Number
        <input name="number" type="text" required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;