import { NAVLINKS } from '@/data/data'
import Link from 'next/link'
import React from 'react'

const Navlinks = () => {
    return (
        <ul className='text-white max-lg:hidden p-2 mt-2 bg-zinc-600/30 backdrop-blur-md shadow-2xl flex justify-center items-center gap-4 rounded-full border border-zinc-600'>
            {NAVLINKS.map((navItem) =>
                <li key={navItem.id} className={`bg-zinc-400/30 backdrop-blur-md cursor-pointer p-2 px-4 rounded-full `}>
                    <Link href={navItem.path}>{navItem.label}</Link>
                </li>
            )}
        </ul>
    )
}

export default Navlinks