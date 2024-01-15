import React from 'react'
import contacts from '../data/contacts'
import ContactCard from '../components/ContactCard'

function Contact() {
  return (
    <div className='flex flex-col justify-start items-center my-10 mx-5'>
      <span className='title-text mt-8'>
        Got Any Questions?
      </span>

      <span className='font-light'>Feel free to contact me and get in touch.</span>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5'>
        {contacts.map((contact, index) => {
          return <ContactCard {...contact} key={index} /> 
        })}
      </div>
    </div>
  )
}

export default Contact
