"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


type useBounceInProps = {
    selector: string,
    duration?: number,
    delay?: number,
    finalScale?: number
}

const useBounceIn = ({ selector, duration = 0.5, delay = 0, finalScale = 1 }: useBounceInProps) => {

    useGSAP(() => {

        ScrollTrigger.create({
            trigger: selector,
            onEnter: () => {
                gsap.set(selector, {
                    scale: 1,
                    opacity: 0
                });

                gsap.to(selector, {
                    duration: duration,
                    scale: 2,
                    delay: delay,
                    opacity: 1
                });

                gsap.to(selector, {
                    duration: duration,
                    scale: finalScale,
                    delay: delay + 0.2,
                });
            },
            once: true
        });
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // gsap.set(selector, {
        //     scale: 1,
        //     opacity: 0
        // })

        // gsap.to(selector, {
        //     duration: duration,
        //     scale: 2,
        //     delay: delay,
        //     opacity: 1
        // })

        // gsap.to(selector, {
        //     duration: duration,
        //     scale: 1,
        //     delay: delay + 0.2,
        // })

    }, [])

    return;
}

export default useBounceIn