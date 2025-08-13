import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <>
            <div className='w-full h-[1px] bg-gradient-to-r  from-black  via-white to-black' />
            <div className='w-full bg-black h-full text-white px-section py-12 flex items-center justify-center'>
                <div className='max-w-sm flex flex-col w-full gap-4 sm:flex-row sm:max-w-none'>
                    <div className='space-y-2 w-full'>
                        <h6 className='text-lg font-medium sm:text-xl'>Ilham Rangga ❤️</h6>
                        <p className='text-neutral-400 sm:text-lg'>Fullstack & Blockchain Developer</p>
                    </div>
                    <div className='w-full text-neutral-400 flex gap-4 items-center justify-center sm:justify-end sm:items-end'>
                        <a href='https://github.com/ilhamranggakurniawan' target='_blank' className='transition-all duration-300 cursor-pointer hover:text-white'>
                            <Github />
                        </a>
                        <a href='https://www.linkedin.com/in/ilham-rangga-000947282/' target='_blank' className='transition-all duration-300 cursor-pointer hover:text-white'>
                            <Linkedin />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer