import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import ProjectDetails from './ProjectDetails'

type tag = {
    id: number,
    name: string
}

type projectProps = {
    title: string,
    description: string,
    subDescription: string[],
    href?: string,
    image: string,
    tags: tag[],
    github: string,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>
}

const Project = ({ title, description, subDescription, href, github, image, tags, setPreview }: projectProps) => {
    const [isHidden, setIsHidden] = useState(true)
    return (
        <>
            <div onMouseEnter={() => setPreview(image)} onMouseLeave={() => setPreview(null)} className='space-y-12 sm:space-y-0 sm:flex sm:justify-between sm:items-center'>
                <div>
                    <h4 className='my-2 text-2xl font-semibold'>{title}</h4>
                    <div className='text-[#d6995c] flex gap-5 flex-wrap'>
                        {tags.map(tag => (
                            <span key={tag.id}>{tag.name}</span>
                        ))}
                    </div>
                </div>
                <button className='flex items-center gap-1 cursor-pointer' onClick={() => setIsHidden(false)}>
                    Read More
                    <ArrowRight />
                </button>
            </div>

            {/* Modal */}
            {!isHidden && (
                <ProjectDetails description={description} github={github} subDescription={subDescription} image={image} title={title} href={href} closeModal={() => setIsHidden(true)} key={github}/>
            )}

            {/* bottom line */}
            <div className='w-full h-[1px] bg-gradient-to-r from-black via-neutral-700 to-black' />
        </>
    )
}

export default Project