"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


type useFadeInProps = {
    selector: string,
    duration?: number,
    delay?: number
}

const useFadeIn = ({ selector, duration = 0.5, delay = 0 }: useFadeInProps) => {

    useGSAP(() => {
        gsap.from(selector, {
            duration: duration,
            y: 100,
            opacity: 0,
            delay: delay,
            filter: "blur(100px)"
        })

    }, [])

    return;
}

export default useFadeIn