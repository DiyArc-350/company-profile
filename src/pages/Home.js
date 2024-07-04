import React from 'react'
import Hero from '../components/Hero'
import styles from '../style'

const Home = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-[#37414a] ss:leading-[100.8px] leading-[75px]">
            Enhanced Business with <br className="sm:block hidden" />{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Cutting-Edge</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-[#37414a] ss:leading-[100.8px] leading-[75px] w-full">
           IT Solutions.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          MBC Lab is a technology research center and consulting firm specializing in Cybersecurity, Big Data, Game Technology, and GIS. Our expert team uses a meticulous methodology to tailor solutions to your needs.
        </p>
      </div>

      <Hero />
    </section>
  )
}

export default Home;