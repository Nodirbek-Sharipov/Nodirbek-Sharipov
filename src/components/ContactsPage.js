import React from 'react'

import ContactItem from './ContactItem'


const ContactsPage = ({ contacts = [] })=>{

	return (
		<ul className="contactsUl">
			{contacts.map((x, i)=> <ContactItem key={i} contact={x} />)}
		</ul>
	)
}

export default ContactsPage
