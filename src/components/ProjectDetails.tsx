import { motion } from "motion/react"
import { ArrowRight, Github, X } from 'lucide-react'

type projectDetailsProps = {
    title: string,
    description: string,
    subDescription: string[],
    href?: string,
    image: string,
    github: string,
    closeModal: () => void
}

const ProjectDetails = ({ title, description, subDescription, href, image, github, closeModal }: projectDetailsProps) => {
    return (
        <div className='fixed inset-0 backdrop-blur-sm overflow-hidden z-50 flex justify-center items-center h-full w-full'>
            <motion.div
                className='relative h-full w-full shadow-sm bg-gradient-to-b from-[#3A3A3A] via-[#242424] to-[#3A3A3A] flex flex-col overflow-hidden sm:max-h-[90%] sm:rounded-xl sm:max-w-xl'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <button onClick={closeModal} className='aspect-square absolute top-5 right-5 bg-gradient-to-b from-[#3A3A3A] via-[#242424] to-[#3A3A3A] p-2 rounded-lg cursor-pointer hover:scale-110 transition-all duration-300'>
                    <X />
                </button>
                <img
                    src={image}
                    className='w-full'
                    alt="tes"
                />
                <div className="p-6 space-y-2 overflow-y-auto">
                    <h4 className='my-2 text-2xl font-semibold'>{title}</h4>
                    <p className='text-neutral-400'>{description}</p>
                    {subDescription.map((description, index) => (
                        <p className='text-neutral-400' key={index}>{description}</p>
                    ))}
                    <div className='pt-4 flex items-center justify-between'>
                        <button>
                            <a href={github} target='_blank' className='transition-all duration-200 hover:-translate-y-1'>
                                <Github />
                            </a>
                        </button>
                        {href && (
                            <button>
                                <a href={href} target='_blank' className='flex font-semibold items-center gap-2 transition-all duration-200 hover:-translate-y-1'>
                                    <p>View Project</p>
                                    <ArrowRight />
                                </a>
                            </button>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectDetails