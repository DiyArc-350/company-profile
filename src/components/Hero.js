import React from 'react'
import Index from '../assets/hero.png'
import styles from '../style'

const Hero = () => {
  return (
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={Index} alt="index" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 purple__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      {/* gradient end */}
    </div>
  )
}

export default Hero