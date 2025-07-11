import React from 'react'
import { Project } from '../constraints'
function Projects() {
    return (
        <div className='border-b border-neutral-800 pb-4'>
            <h1 className='my-20 text-center text-4xl'>Project</h1>
            <div>
                {Project.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <img src={project.image} width={150} height={150} alt={project.title}
                                className='mb-6 rounded '></img>
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-300'>{project.description}</p>
                        {project.technologies.map((tech,index)=>(
                            <span key={index} className='mr-2 rounded bg-neutral-800 py-1 px-2
                             text-sm font-medium'>{tech}</span>
                        ))}
                        <span className='mb-4  text-black cursor-pointer rounded bg-neutral-200 py-1 px-2 text-sm font-medium' onClick={()=>
                            window.open(project.Link)
                        }>Link</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects