import { PROJECTS } from '@/data/data'
import { Divide } from 'lucide-react'
import React from 'react'
import ProjectCard from './cards/project-card'

const ProjectSection = () => {
    return (
        <div className='container h-screen bg-zinc-900 px-16 max-sm:px-4'>
            <h2 className='py-5 w-full text-center font-semibold text-white text-4xl'>Featured Projects</h2>

            {/* {PROJECTS.map((project) => {
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
            })} */}
        </div>
    )
}

export default ProjectSection