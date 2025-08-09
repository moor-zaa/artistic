"use client"

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Tag from '@/common/tag';
import useFadeIn from '@/hooks/useFadeIn';
import useBounceIn from '@/hooks/useBounceIn';



const SquareAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const squareRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const squares = squareRefs.current.filter(Boolean);

        // Initial setup - all squares at bottom center, stacked
        gsap.set(squares, {
            x: 0,
            y: 200,
            opacity: 0,
            scale: 0.5,
            rotation: 20
        });

        // Create timeline
        const tl = gsap.timeline();

        // Animation sequence
        tl
            // Phase 1: Squares appear from bottom as a single stack
            .to(squares, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.7)",
            })
            .to(squares[0], {
                x: -240,
                y: 3,
                duration: 0.6,
                rotation: -8,
                ease: "power2.out"
            }, "spread")
            .to(squares[1], {
                x: -160,
                y: -30,
                rotation: -12,
                duration: 0.6,
                ease: "power2.out"
            }, "spread")
            .to(squares[2], {
                x: -80,
                rotation: -2,
                duration: 0.6,
                ease: "power2.out"
            }, "spread")
            .to(squares[3], {
                x: 0,
                y: 0,
                rotation: 2,
                duration: 0.6,
                ease: "power2.out"
            }, "spread")
            .to(squares[4], {
                x: 80,
                rotation: 6,
                duration: 0.6,
                ease: "power2.out"
            }, "spread")
            .to(squares[5], {
                x: 160,
                y: 10,
                rotation: 10,
                duration: 0.6,
                ease: "power2.out"
            }, "spread")
            .to(squares[6], {
                x: 240,
                y: -20,
                rotation: 15,
                duration: 0.6,
                ease: "power2.out"
            }, "spread");

    }, { scope: containerRef });

    useBounceIn({ selector: ".mori", delay: 2.3 })
    useBounceIn({ selector: ".negin", delay: 2.5 })


    return (
        <div className="flex flex-col items-center justify-center">
            <div
                ref={containerRef}
                className="relative w-96 h-60 flex items-center justify-center"
            >
                {[...Array(7)].map((_, index) => (
                    <div
                        key={index}
                        ref={(el: HTMLDivElement | null) => { squareRefs.current[index] = el }}
                        className="absolute w-36 h-36 bg-gradient-to-br rounded-xl shadow-lg"
                        style={{
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        <img src={`/images/art-${index + 1}.webp`} width={300} alt={`ArtImage${index + 1}`} className='object-cover object-center w-full h-full rounded-xl' />
                    </div>
                ))}
                <Tag label='Mori' color='#a456eb' className='mori -left-6 -rotate-12 -top-8' />
                <Tag label='Negin' className='negin -right-28 rotate-12 -top-6' />
            </div>


        </div>
    );
};

export default SquareAnimation;