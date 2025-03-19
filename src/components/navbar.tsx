import { NAVLINKS, PERSONAL_DETAILS } from '@/data/data'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <nav className='fixed top-2 px-16 max-sm:px-4 z-99 py-1 flex items-center justify-between w-full'>
            <h2
                className='text-3xl text-white max-sm:hidden'>
                {PERSONAL_DETAILS.name}
            </h2>

            <h2 className='text-3xl text-white sm:hidden'>
                MK
            </h2>
            <ul className='text-white max-sm:hidden p-3 mt-2 bg-transparent backdrop-blur-xl shadow-2xl flex justify-center items-center gap-4 rounded-4xl'>
                {NAVLINKS.map((navItem) =>
                    <li key={navItem.id} className={`bg-zinc-600/25 backdrop-blur-lg cursor-pointer p-2 px-4 rounded-full `}>
                        <Link href={navItem.path}>{navItem.label}</Link>
                    </li>
                )}
            </ul>

            <div className='text-white p-3 px-5 shadow-2xl rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/30 cursor-pointer transition-all duration-300'>
                <a href='/resume.pdf' download="resume.pdf" >
                    Resume
                </a>
            </div>
        </nav>
    )
}