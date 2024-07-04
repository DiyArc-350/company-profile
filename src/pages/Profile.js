import React from 'react'
import IntroDev from '../components/IntroDev';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';


const Profile = () => {
  return (
    <section className="flex-col relative">
      <IntroDev />
      <AboutMe />
      <Projects />
    </section>
  )
}

export default Profile