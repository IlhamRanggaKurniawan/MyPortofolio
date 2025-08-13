import { useState } from 'react'
import Project from '../components/Project'
import { MY_PROJECTS } from '../constants'
import { motion, useMotionValue, useSpring } from 'motion/react'

const Projects = () => {
    const [imagePreview, setImagePreview] = useState<string | null>(null)


    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, { damping: 10, stiffness: 50 })
    const springY = useSpring(y, { damping: 10, stiffness: 50 })
    const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        x.set(e.clientX + 20)
        y.set(e.clientY + 20)
    }

    return (
        <section
            onMouseMove={(e) => handleMouseMove(e)}
            id='projects'
            className='min-h-screen text-white h-full w-full bg-[#020203] px-section py-16 flex flex-col gap-12 relative'
        >
            <h2 className="text-3xl font-extrabold">My Selected Projects</h2>
            <div className='w-full h-[1px] bg-gradient-to-r from-black via-neutral-700 to-black' />
            {MY_PROJECTS.map((project) => (
                <Project key={project.id} {...project} setPreview={setImagePreview} />
            ))}
            {imagePreview && (
                <motion.img
                    className='fixed hidden lg:block top-0 left-0 z-50 max-h-56 rounded-lg shadow-lg pointer-events-none aspect-video'
                    src={imagePreview}
                    style={{ x: springX, y: springY }}
                />
            )}
        </section>
    )
}


export default Projects