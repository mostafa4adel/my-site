import { useEffect, useState, React } from 'react'
import './Projects.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/mostafa4adel/repos?sort=created&page=1')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data)
        // console.log(data);
      })
  }, [])

  return (
    <div className='projects' data-aos='fade-up'>
      <h2 className='projects-title'>Projects</h2>

      <div className='col projects-grid'>
        {projects.map((project) => (
          <card key={project.id} className='card'>
            <a
              href={'' + project.html_url}
              target='_blank'
              rel='noreferrer'
              className='card-link2'
            >
              <div className='card-body'>
                <h5 className='card-title'>{project.name}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {project.description}
                </h6>
                <p className='card-subtitle mb-2 text-muted'>
                  {project.language}
                </p>
                {/* <a href={""+project.html_url} target="_blank" rel="noreferrer" className="card-link"> */}
                <i className='bi bi-arrow-right ar-img '></i>
              </div>
            </a>
          </card>
        ))}
      </div>
    </div>
  )
}

export default Projects
