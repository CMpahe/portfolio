// DATA
import { projects } from '../data/projects'

export const Projects = () => {
  // Take the projects from the data
  const displayProjects = () => {
    return (
      projects.map((project) => {
        return (
          <div key={project.id} className='project'>
            <a
              href={project.href}
              target='_blank'
              rel='noreferrer'
            >
              <img src={project.src} />
            </a>
            <h3>{project.name}</h3>
          </div>
        )
      })
    )
  }

  return (
    <section id='projectSection'>
      <h2>My <span className='highlight'>PROJECTS</span></h2>
      {displayProjects()}
    </section>
  )
}
