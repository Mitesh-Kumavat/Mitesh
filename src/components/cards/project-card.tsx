"use client";
import { ProjectPropsTypes } from '@/types'
import { useRouter } from 'next/navigation'
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


    const router = useRouter();
    const cardOnClick = () => {
        router.push(`/projects/${label.toLowerCase().replace(/ /g, '-')}`)
    }

    return (
        <div className='max-w-2xs overflow-hidden gap-2 cursor-pointer' onClick={cardOnClick}>

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