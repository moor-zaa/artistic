"use client"


import Button from '@/common/button'
import useFadeIn from '@/hooks/useFadeIn'
import useTextAnimation from '@/hooks/useTextAnimation'
import React from 'react'
import SquareAnimation from './SquareAnimation'



const Hero = () => {

    const headingId = "hero-heading";
    const descriptionId = "hero-description"

    useTextAnimation({ selector: `#${headingId}`, duration: 1 })
    useTextAnimation({ selector: `#${descriptionId}`, delay: 1 })
    useFadeIn({ selector: '.primary-btn', delay: 2 })
    useFadeIn({ selector: '.secondary-btn', delay: 2 })

    return (
        <div className='flex items-center flex-col text-center justify-center h-dvh overflow-hidden'>
            <h1 id={headingId}>A place to display your <br /> masterpiece.</h1>

            <SquareAnimation />

            <p id={descriptionId}>Artists can display their masterpieces and buyers can discover and </p>

            <div className="flex">
                <Button className='primary-btn' label='Join for $999/m' />
                <Button className='secondary-btn' label='Read more' color='secondary' />
            </div>
        </div>
    )
}

export default Hero