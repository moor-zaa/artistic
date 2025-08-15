"use client"

import Tag from '@/common/tag'
import useBounceIn from '@/hooks/useBounceIn'
import useFadeIn from '@/hooks/useFadeIn'
import useTextAnimation from '@/hooks/useTextAnimation'
import Image from 'next/image'
import React from 'react'

const Gateway = () => {

  useTextAnimation({ selector: "#gateway-desc", delay: 0.3, duration: 1 })
  useTextAnimation({ selector: "#gateway-head", delay: 0.5, duration: 1.2 })

  useBounceIn({ selector: ".gateway-tag", delay: 1.5, duration: 0.5, finalScale: 1.2 })

  return (
    <div className='h-screen p-16 relative'>
      <p id='gateway-desc' className='uppercase text-xs font-bold'>class by reatha c. phelan</p>
      <h2 id='gateway-head'>
        Gateway to <br /> <span className='text-gray-600'>artist people.</span>
      </h2>
      <Tag className='gateway-tag mt-4 right-32 top-[20%] rotate-12' label='artist' />

      <div className='relative h-[calc(100vh-250px)] flex items-center justify-center overflow-hidden'>

        <div
          className="parallex-image absolute w-full h-full"
        />
      </div>
    </div>
  )
}

export default Gateway