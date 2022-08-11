

export function ContactListItem({ contact }) {
  return (
    <li>
      <p>
        {contact.name}
      </p>
      <button
      >
        Delete
      </button>
    </li>
  );
}


export function ContactList({ contacts }) {


  return (
    <ul >
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
        
        />
      ))}
    </ul>
  );
}