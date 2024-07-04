import React from 'react'

import styles from '../style';

const AboutMe = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} ustify-center items-center text-center flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full purple__gradient opacity-30 bottom-40" />
        <div className="w-full px-4 mb-10 text-white items-center">
            <h2 className="font-bold font-poppins text-3xl text-slate-700 mb-4 tracking-wider mx-auto">About Me</h2>
            <p
                className="text-base font-poppins font-medium mx-auto  w-auto sm:w-[550px] text-center tracking-widest leading-8 text-dimWhite">
                I'm an Undergraduate Student of Telecomunication Engineering.
                As a Student that graduated from a vocational schoool,
                i'm already familiar with programming especialy in fullstack web development using PHP</p>
        </div>
    </section>
  )
}

export default AboutMe