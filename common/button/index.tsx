import React from 'react'

type ColorType = "primary" | "secondary";

type ButtonProps = {
    className?: string,
    label: string,
    color?: ColorType,
    id?: string
}

const Button: React.FC<ButtonProps> = ({ label, className, color = "primary", id = '' }) => {

    const handleVariant = (color: ColorType) => {
        switch (color) {
            case 'primary':
                return "bg-black text-white"
            case 'secondary':
                return "bg-gray-100 text-black"
            default:
                return "bg-black text-white"
        }
    }

    return (
        <button id={id}
         className={`rounded-full mx-1 py-2 px-4 text-xs my-3 ${handleVariant(color)} ${className}`}
         >{label}</button>
    )
}

export default Button