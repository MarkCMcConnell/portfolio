import React from 'react'
import { projects } from '../../data/project-descriptions'

import Project from '../Project/Project'

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h1 className='projects__title'>Projects</h1>
      <div className='projects__grid'>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              {...project}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
