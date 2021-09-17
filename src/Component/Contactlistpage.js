import React from "react";
import About from "./About";
const Contactlistpage = (props) => {
    console.log(props);
    const deleteContcatHandler = (id) => {
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) => {
        return (
            <About contact={contact} clickHandler={deleteContcatHandler} key={contact.id} />
        )
    })
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
};

export default Contactlistpage;
