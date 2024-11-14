import React, { useRef, useState } from 'react'
import gambar from "../assets/ilham-rangga.png"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const tes = [
    "I create scalable, performant, and user-friendly web applications from front to back. With expertise in Next.js, React, Golang, and Express.js, I craft seamless experiences, ensuring that each layer of an app works in harmony",
    "As a fullstack developer, I handle both the frontend and backend with ease. From interactive interfaces with React and Next.js to reliable server-side logic with Golang and Express.js, I bring your vision to life through well-structured, clean code",
    "I work independently to bring full-stack projects to life, utilizing the latest technologies like React, Next.js, Express.js, and Golang. While I haven’t yet worked in a team, my ability to manage every aspect of development ensures a cohesive, efficient build process from start to finish",
    "I focus on delivering top-tier, fullstack web applications with a mix of cutting-edge technologies. From the frontend using Next.js and React, to backend systems with Golang and Express.js, I make sure each application is both functional and delightful to use",
    "Whether it's creating responsive, dynamic frontends with React and Next.js or handling the backend with Golang and Express.js, my approach to fullstack development ensures clean, efficient, and robust solutions",
    "Combining modern frameworks and tools, I specialize in fullstack development, from creating intuitive user interfaces to building performant backend APIs. With Next.js, React, and Golang at the core, I deliver web applications that are both functional and scalable"
]

const ProjectSection = () => {

    const containerRef = useRef<HTMLDivElement>(null)
    const [description, setDescription] = useState(tes[0])

    useGSAP(() => {
        let currentCycle = 0
        const pinnedHeight = window.innerHeight * 6;

        const updateDescription = () => {
            setDescription(tes[currentCycle])
        }

        ScrollTrigger.create({
            trigger: ".main",
            start: "top top",
            end: `+=${pinnedHeight}`,
            pin: true,
            pinSpacing: true,
            onUpdate: ((self) => {
                const progress = self.progress

                const newCycle = Math.floor(progress * 6)

                console.log(newCycle)

                if(newCycle !== currentCycle) {
                    currentCycle = newCycle
                    updateDescription()
                }
            })
        })

    }, { scope: containerRef })

    return (
        <div className='w-full h-screen' ref={containerRef}>
            <div className='main flex relative h-screen'>
                <div className='basis-1/2 flex justify-center items-center flex-col text-2xl font-semibold text-[#d5d5d5] relative'>
                    <h2 className='bg-black text-white p-2'>Building Scalable Web Solutions</h2>
                    <h2>Turning Ideas into Web Apps</h2>
                    <h2>Your Solo Full-Stack Developer</h2>
                    <h2>Crafting Web Experiences with Next.js & Golang</h2>
                    <h2>Precision in Full-Stack Development</h2>
                    <h2>Simplifying Web Development with Modern Tools</h2>
                </div>
                {/* <div className='h-96 w-[2px] bg-black absolute left-1/2 transform -translate-x-1/2 top-1/2'/> */}

                <div className='basis-1/2 flex justify-center items-center flex-col gap-2'>
                    <img src={gambar} alt="gambar" className='w-[70%]' />
                    <p className='w-[70%]'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection