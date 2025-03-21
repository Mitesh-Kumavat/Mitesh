import { PROJECTS } from '@/data/data'
import React from 'react'
import ProjectCard from './cards/project-card'

const ProjectSection = () => {
    return (
        <div className='h-max bg-zinc-900 w-full'>
            <div className="container mx-auto md:p-12 p-8">
                <p className='text-lg text-right-gradinet text-zinc-500 w-400 text-center  '>FEATURED PROJECTS</p>
                <h2 className='py-5 w-full text-center font-semibold text-glow text-white text-5xl'>Curated Work</h2>

                <div className="grid grid-cols-1 mt-8 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((project) => {
                        return (
                            <div key={project.id}>
                                <ProjectCard
                                    id={project.id}
                                    label={project.label}
                                    link={project.link}
                                    githubLink={project.githubLink}
                                    liveLink={project.liveLink}
                                    overview={project.overview}
                                    tags={project.tags}
                                    imageUrl={project.imageUrl}
                                    theme={project.theme}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectSection