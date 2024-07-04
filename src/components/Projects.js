import React from 'react'
import ProjectsCard from './ProjectsCard'
import styles from '../style'
import {project} from '../constants'

const Projects = () => {
  return (
    <section id="project" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative text-center`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full purple__gradient opacity-30 bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-10 mb-2 relative z-[1]">
        <h2 className={styles.heading2}>
          Projects I've worked on
        </h2>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center items-center w-full feedback-container relative z-[1]">
        {project.map((card) => <ProjectsCard key={card.id} {...card} />)}
      </div>

    </section>
  )
}

export default Projects