"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(SplitText, ScrollTrigger)

type useTextAnimationProps = {
    selector: string,
    duration?: number,
    delay?: number
}

const useTextAnimation = ({ selector, duration = 0.5, delay = 0 }: useTextAnimationProps) => {

    useGSAP(() => {
        const split = SplitText.create(selector, { type: "words" });

        gsap.from(split.words, {
            scrollTrigger: {
                trigger: selector,
                start: "top 100%",  // when top of section is 80% from top of viewport
                toggleActions: "play none none reset",
            },
            stagger: 0.05,
            duration: duration,
            y: 100,
            opacity: 0,
            delay: delay,
            filter: "blur(100px)",
            
        });

        return () => {
            split.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());  // cleanup
        };
    }, [selector, duration, delay]);


    return;
}

export default useTextAnimation