import React from 'react'
import styles from '../style'
import Dev from '../components/Dev';

const IntroDev = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <Dev />
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold md:mt-6 ss:text-[72px] text-[52px] text-[#37414a] ss:leading-[100.8px] leading-[75px]">
            Hello👋!, I'm <br className="sm:block hidden" />{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Dhiya Isnavisa</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[40px] text-[40px] text-slate-500  w-full">
           Practicum Assistant
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Just playing around with this tehehehe (～￣▽￣)～
        </p>
        <div className="flex space-x-4 mt-5">
          <a href="mailto:your-email@example.com" className="text-2xl" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope fa-xl" style={{ color: '#37414a' }}></i>
          </a>
          <a href="https://www.instagram.com/avisa.yaa/" className="text-2xl" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram fa-xl" style={{ color: '#37414a' }}></i>
          </a>
          <a href="https://github.com/DiyArc-350" className="text-2xl" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-xl" style={{ color: '#37414a' }}></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default IntroDev