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
        <div className='max-w-2xs overflow-hidden bg-amber-200/20 gap-2 '>
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