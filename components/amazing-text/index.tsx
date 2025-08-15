"use client"

import Tag from '@/common/tag'
import useBounceIn from '@/hooks/useBounceIn'
import useTextAnimation from '@/hooks/useTextAnimation'
import React from 'react'

const AmazingText = () => {

    useTextAnimation({ selector: "#amazing-text", delay: 0.3, duration: 1 })

    useBounceIn({ selector: ".maryam", delay: 2.5, duration: 0.5, finalScale: 1.2 });
    useBounceIn({ selector: ".armin", delay: 2.7, duration: 0.5, finalScale: 1.2 });


    return (
        <section className='h-screen flex flex-col items-center justify-center p-16'>

            <div className="relative w-full">
                <Tag className='armin absolute -top-14 left-32 -rotate-12' color='orange' label='Maryam' />
                <Tag className='maryam absolute -top-14 right-32 rotate-12' color='blue' label='Armin' />
            </div>


            <h3 id='amazing-text' className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste ex nihil, reiciendis unde vero laboriosam sed inventore numquam optio ipsam possimus nobis
            </h3>
        </section>
    )
}

export default AmazingText