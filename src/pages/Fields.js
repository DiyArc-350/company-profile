import React from 'react'
import styles from '../style'
import { fields } from '../constants'
import FieldsCard from '../components/FieldsCard'

const Fields = () => {
  return (
    <section id="fields" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full pink__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-10 mb-2 relative z-[1]">
        <h2 className={styles.heading2}>
          Our Specialty <br className="sm:block hidden" /> Fields
        </h2>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {fields.map((card) => <FieldsCard key={card.id} {...card} />)}
      </div>
  </section>
  )
}

export default Fields