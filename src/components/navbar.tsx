import { PERSONAL_DETAILS } from '@/data/data'
import React from 'react'
import Navlinks from './navlink'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav className='fixed top-2 left-1/2 -translate-x-1/2 container px-16 max-sm:px-4 z-50 py-1 flex items-center justify-between w-[90%] max-w-7xl'>

            <h2
                className='text-3xl text-white max-lg:hidden'>
                {PERSONAL_DETAILS.name}
            </h2>
            <h2 className='text-3xl text-white lg:hidden'>
                MK{"."}
            </h2>

            <Navlinks />

            <div className='text-white p-3 px-5 shadow-2xl rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/30 cursor-pointer transition-all duration-300'>
                <Link href='/resume.pdf' download="resume.pdf" >
                    Resume
                </Link>
            </div>

        </nav>
    )
}