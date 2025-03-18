"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const RedirectToHome = () => {

    const router = useRouter();

    useEffect(() => {
        router.push("/")
    })

}

export default RedirectToHome;
