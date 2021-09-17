import React, { useState, useEffect } from 'react'
import { uuid } from "uuidv4";
import './App.css';
import Headers from './Component/Headers';
import Contactpage from './Component/Contactpage';
import Contactlistpage from './Component/Contactlistpage';


function App() {
  const LOCAL_STROAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }])
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STROAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts)
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STROAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <Headers />
      < Contactpage addContactHandler={addContactHandler} />
      <Contactlistpage contacts={contacts} getContactId={removeContactHandler} />

    </div>
  );
}

export default App;





// import React, { useState, useEffect } from 'react';
// import { uuid } from "uuidv4";
// import './App.css';
// import Header from './Components/Header';
// import AddContact from './Components/AddContact';
// import ContactList from './Components/ContactList'

// function App() {
//   const LOCAL_STORAGE_KEY = "contacts"
//   const [contacts, setContacts] = useState([])
//   const addContactHandler = (contact) => {
//     console.log(contact);
//     setContacts([...contacts, { id: uuid(), ...contacts }])
//   }
//   const removeContactHandler = (id) => {
//     const newContactList = contacts.filter((contact) => {
//       return contact.id !== id;
//     });
//     setContacts(newContactList);
//   };
//   useEffect(() => {
//     const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if (retriveContacts) setContacts(retriveContacts);
//   }, []);
//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
//   }, [contacts]);
//   return (
//     <div className="ui container">
//       < Header />
//       <AddContact addContactHandler={addContactHandler} />
//       <ContactList contacts={contacts} getContactId={removeContactHandler} />


//     </div>
//   );
// }

// export default App;
