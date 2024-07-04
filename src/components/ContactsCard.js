import React from 'react'
import bookmark from '../assets/bookmark.svg'

const ContactsCard = ({id, name, email, phone, description, img, title}) => {
  return (
    <div className="flex justify-between flex-col px-5 py-6 rounded-[20px] w-[370px] md:mr-10 sm:mr-5 my-5 mx-auto bg-white shadow-lg shadow-slate-600">
        <div className="flex flex-row">
            <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full shadow-md shadow-slate-600" />
            <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-[20px] text-slate-900">
                {name}
                </h4>
                <p className="font-poppins font-normal text-[16px] text-dimWhite">
                {title}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ContactsCard