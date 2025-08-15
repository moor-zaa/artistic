"use client"

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Tag from '@/common/tag';
import useBounceIn from '@/hooks/useBounceIn';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)


const SquareAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const squareRefs = useRef<(HTMLDivElement | null)[]>([]);

    const boxShadow = "rgba(0, 0, 0, 0.3) 0px 4px 15px";

    const initialSpread = [
        { x: -240, y: 3, r: -8 },
        { x: -160, y: -30, r: -12 },
        { x: -80, y: 0, r: -2 },
        { x: 0, y: 0, r: 2 },
        { x: 80, y: 0, r: 6 },
        { x: 160, y: 10, r: 10 },
        { x: 240, y: -20, r: 15 },
    ];

    const secondSpread = [
        { x: 1000, y: 1000, r: 40 },
        { x: 1000, y: 1000, r: 40 },
        { x: 1000, y: 1000, r: 40 },
        { x: 1000, y: 1000, r: 40 },
        { x: 1000, y: 1000, r: 40 },
        { x: 1000, y: 1000, r: 40 },
        { x: 1000, y: 1000, r: 40 },
    ];


    useGSAP(() => {
        const ctx = gsap.context(() => {

            const squares = squareRefs.current.filter(Boolean);

            // Initial setup - all squares at bottom center, stacked
            gsap.set(squares, {
                x: 0,
                y: 200,
                opacity: 0,
                scale: 1.5,
                rotation: 20
            });

            // Create timeline
            const tl = gsap.timeline({
                onComplete: () => {
                    const scrollTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top top',
                            end: '+=1600',
                            scrub: 2,
                            pin: true,
                            // markers: true,
                            toggleActions: 'play pause pause reset',
                        }
                    })

                    scrollTl.to(squares, {
                        x: 0,
                        y: 200,
                        rotation: 0,
                        scale: 1,
                        boxShadow: "rgba(0,0,0,0.06) 0px 2px 6px",
                        stagger: { each: 0.05, from: "edges" },
                    }).to(squares, {
                        x: 0,
                        y: 200,
                        rotation: 0,
                        scale: 2,
                        stagger: { each: 0.05, from: "end" },
                    }).to(squares, {
                        x: (i: number) => secondSpread[i]?.x ?? 0,
                        y: (i: number) => secondSpread[i]?.y ?? 0,
                        rotation: (i: number) => secondSpread[i]?.r ?? 0,
                        boxShadow,
                        scale: 2,
                        stagger: { each: 0.06, from: "end" },
                    }, "spread")
                }
            });

            // Animation sequence
            tl
                // Phase 1: Squares appear from bottom as a single stack
                .to(squares, {
                    opacity: 1,
                    y: 0,
                    scale: 1.5,
                    duration: 0.8,
                    rotation: 20,
                    ease: "back.out(1.7)",
                })
                .to(squares, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    rotation: 0,
                    ease: "power1.in",
                }).to(squares, {
                    x: (i: number) => initialSpread[i]?.x ?? 0,
                    y: (i: number) => initialSpread[i]?.y ?? 0,
                    rotation: (i: number) => initialSpread[i]?.r ?? 0,
                    boxShadow,
                    // stagger options to taste:
                    // from: "center" | "edges" | 0..n | "random"
                    stagger: { each: 0.06, from: "edges" },
                }, "spread");


        })
        return () => ctx.revert();

    }, []);


    useBounceIn({ selector: ".mori", delay: 2.3 })
    useBounceIn({ selector: ".negin", delay: 2.5 })



    return (
        <div
            className="flex flex-col items-center justify-center relative">
            <div
                ref={containerRef}
                className="w-96 h-76 flex items-center justify-center z-20"
            >
                {[...Array(7)].map((_, index) => (
                    <div
                        key={index}
                        ref={(el: HTMLDivElement | null) => { squareRefs.current[index] = el }}
                        className="absolute w-36 h-36 rounded-xl"
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.03) 0px 4px 8px'
                        }}
                    >
                        <img src={`/images/art-${index + 8}.webp`} width={300} alt={`ArtImage${index + 8}`} className='object-cover object-center w-full h-full rounded-xl' />
                    </div>
                ))}

            </div>
            <Tag label='Mori' color='#a456eb' className='mori -left-6 -rotate-12 top-2' />
            <Tag label='Negin' className='negin -right-28 rotate-12 top-4' />


        </div>
    );
};

export default SquareAnimation;