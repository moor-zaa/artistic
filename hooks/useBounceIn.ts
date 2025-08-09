"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


type useBounceInProps = {
    selector: string,
    duration?: number,
    delay?: number
}

const useBounceIn = ({ selector, duration = 0.5, delay = 0 }: useBounceInProps) => {

    useGSAP(() => {

        gsap.set(selector, {
            scale: 1,
            opacity: 0
        })

        gsap.to(selector, {
            duration: duration,
            scale: 2,
            delay: delay,
            opacity: 1
        })

        gsap.to(selector, {
            duration: duration,
            scale: 1,
            delay: delay + 0.2,
        })

    }, [])

    return;
}

export default useBounceIn