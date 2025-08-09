import React from 'react'

const Tag = ({ label, color = "var(--color-red-400)", className }: { label: string, color?: string, className?: string }) => {
    return (
        <div className={`absolute ${className}`}>
            <div className='py-1 px-2 text-xs rounded-full text-white' style={{ background: color }}>@{label}</div>
            <div style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: color }} className='absolute -bottom-1 left-4 w-2 h-2 rotate-180'></div>
        </div>
    )
}

export default Tag