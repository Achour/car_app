"use client"
import React from 'react'
import { CustomButtonProps } from '@/types'
import Image from 'next/image'

export default function CustomButton({
    title,
    containerStyles,
    handleClick,
    btnType,
    textStyles,
    rightIcon
}: CustomButtonProps) {
    return (
        <button
            disabled={false}
            type={btnType}
            className={`custom-btn ${containerStyles} ${textStyles}`}
            onClick={handleClick}
        >

            <span className={`flex-1`}>
                {title}
            </span>
            {rightIcon && (
                <div className='relative w-6 h-6 '>
                    <Image
                        src={rightIcon}
                        alt="right icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    )
}
