import Contact from '@/components/contact'
import { HeroSection } from '@/components/hero'
import ProjectSection from '@/components/projects'
import React from 'react'

const page = () => {
    return (
        <main className='bg-zinc-800'>
            <HeroSection />
            <ProjectSection />
            <Contact />
        </main>
    )
}

export default page