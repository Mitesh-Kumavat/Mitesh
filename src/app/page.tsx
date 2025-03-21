import { HeroSection } from '@/components/hero'
import ProjectSection from '@/components/projects'
import SkillsSection from '@/components/skills'
import React from 'react'

const page = () => {
    return (
        <main className='bg-zinc-800'>
            <HeroSection />
            <ProjectSection />
            <SkillsSection />
        </main>
    )
}

export default page