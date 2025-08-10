"use client"

import Button from '@/common/button'
import useFadeIn from '@/hooks/useFadeIn'
import useTextAnimation from '@/hooks/useTextAnimation'
import React from 'react'

const Showcase = () => {
    useTextAnimation({ selector: "#showcase" })
    useFadeIn({ selector: "#showcase-desc", delay: 0.2, duration: 0.2 })

    useFadeIn({ selector: "#showcace-primary-btn", delay: 0.5 })
    useFadeIn({ selector: "#showcace-secondary-btn", delay: 0.6 })


    return (
        <div className='h-screen p-16'>
            <p className='uppercase text-xs font-bold'>e-commerce</p>
            <h2 id='showcase' className='my-4'>
                Showcase, Sell,
                <br />
                <span className='text-red-900'>& acquire arts to</span>
                <br />
                our <span className='text-gray-600'>marketplace</span>
            </h2>

            <p id='showcase-desc' className='max-w-sm font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, sed nesciunt enim aperiam quam alias in a eligendi, dolor, voluptatem assumenda hic! Saepe, quidem. Alias inventore odio, repellendus autem sit dolorum deserunt, minus animi facilis dignissimos perspiciatis! Assumenda, officiis debitis.</p>

            <div className="flex mt-6">
                <Button id='showcace-primary-btn' className='primary-btn' label='Join for $999/m' />
                <Button id='showcace-secondary-btn' className='secondary-btn' label='Read more' color='secondary' />
            </div>
        </div>
    )
}

export default Showcase