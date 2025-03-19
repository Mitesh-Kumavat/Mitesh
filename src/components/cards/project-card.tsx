import { ProjectPropsTypes } from '@/types'
import React from 'react'

const ProjectCard = ({
    id,
    label,
    link,
    githubLink,
    liveLink,
    overview,
    tags,
    imageUrl,
    theme }: ProjectPropsTypes) => {
    return (
        <div className='container gap-2 bg-zinc-900'>
            {id}
            {label}
            {link}
            {githubLink}
            {liveLink}
            {overview}
            {tags}
            {imageUrl}
            {theme}
        </div>
    )
}

export default ProjectCard