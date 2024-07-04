import React from 'react'
import Index from '../assets/didi.png'
import styles from '../style'

const Dev = () => {
  return (
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={Index} alt="index" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[0] w-[70%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[2] w-[70%] h-[70%] left-0 top-20 blue__gradient" />
      <div className="absolute z-[0] w-[50%] h-[80%] rounded-full purple__gradient top-40 opacity-50 right-20" />
    </div>
  )
}

export default Dev