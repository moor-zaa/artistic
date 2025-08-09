"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

gsap.registerPlugin(SplitText)

type useTextAnimationProps = {
    selector: string,
    duration?: number,
    delay?: number
}

const useTextAnimation = ({ selector, duration = 0.5, delay = 0 }: useTextAnimationProps) => {

    useGSAP(() => {
        const split = SplitText.create(selector, { type: "words" });

        gsap.from(split.words, {
            stagger: 0.05,
            duration: duration,
            y: 100,
            opacity: 0,
            delay: delay,
            filter: "blur(100px)"
        })

        return () => {
            split.revert()
        }

    }, [])

    return;
}

export default useTextAnimation