import { useState, useEffect } from 'react';
import axios from 'axios';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const { data } = await axios.get(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        setContact(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to get contact:', error);
      }
    };
    fetchContact();
  }, [selectedContactId]);

  return (
    <div>
      <button onClick={() => setSelectedContactId(null)}>
        Back to Contact List
      </button>
      {contact ? (
        <div>
          <h2>{contact.name}</h2>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>City: {contact.address.city}</p>
          <p>Website: {contact.website} </p>
          <p>Company: {contact.company.name}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SelectedContact;
