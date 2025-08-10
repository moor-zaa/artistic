"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
            filter: "blur(100px)",
            scrollTrigger: {
                trigger: selector,
                start: "top bottom",
                toggleActions: "play none none reset",  // re-animate every time section enters view
            }
        })

    }, [selector, duration, delay])

    return;
}

export default useFadeIn
