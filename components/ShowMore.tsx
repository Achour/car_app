"use client"

import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'

import React from 'react'
import { CustomButton } from '.';
import { updateSearchParams } from '@/utils';

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
    const router = useRouter();

    function handleNavigation() {
        const newLimit = (pageNumber + 1) * 10
        const newPathName = updateSearchParams("limit", `${newLimit}`);

        router.push(newPathName, { scroll: false })
    }

    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {!isNext && (
                <CustomButton title={'Show more'}
                    btnType='button'
                    containerStyles='bg-primary-blue rounded-full text-white'
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}
