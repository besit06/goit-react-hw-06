import s from './Contact.module.css';

const Contact = ({ contact, onDelete }) => (
  <div className={s.contact}>
    <p>{contact.name}: {contact.number}</p>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default Contact;