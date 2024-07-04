import React from 'react'
import ContactsCard from '../components/ContactsCard'
import GetStarted from '../components/GetStarted'
import styles from '../style'
import {contact} from '../constants'

const Contacts = () => {
  return (
    <section id="contact" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full purple__gradient opacity-30 bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-10 mb-2 relative z-[1]">
        <h2 className={styles.heading2}>
          Person In Charge
        </h2>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center items-center w-full feedback-container relative z-[1]">
        {contact.map((card) => <ContactsCard key={card.id} {...card} />)}
      </div>

      <GetStarted />
    </section>
  )
}

export default Contacts