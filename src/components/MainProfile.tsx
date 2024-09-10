import React from 'react'
import Navbar from './Navbar'

const MainProfile = ({ children, heading }: { children: React.ReactNode, heading: string }) => {
    return (
        <div className='w-full sm:py-8 sm:pr-8'>
            <div className='w-full h-full rounded-xl bg-card'>
                <div className='w-full flex flex-col-reverse lg:flex-row justify-between items-center lg:pl-6'>
                    <div className='flex flex-col gap-2 mt-4'>
                        <h2 className='text-xl font-semibold'>{heading}</h2>
                        <div className='w-10 h-1 bg-yellow-500 rounded-full' />
                    </div>
                    <Navbar />
                </div>
                <div className='p-6'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainProfile