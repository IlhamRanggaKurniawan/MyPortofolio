import { useRef } from "react"
import Card from "../components/Card"
import { Globe } from "../components/Globe"
import CopyEmailButton from "../components/CopyEmailButton"
import OrbitingTechStack from "../components/OrbitingTechStack"

const About = () => {
    const grid2ContainerRef = useRef<HTMLDivElement | null>(null)

    return (
        <section id='about' className='min-h-screen text-white h-full w-full bg-[#09090B] px-section py-16 space-y-16'>
            <h2 className="text-3xl font-extrabold">About Me</h2>
            <div className="w-full h-full grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem]">

                {/* grid 1 */}
                <div className="flex items-end grid-default-color h-[15rem] relative overflow-hidden md:h-full md:col-span-3 md:row-span-2 hover:-translate-y-1 duration-200">
                    <img src="coding-pov.png" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" />
                    <div className="z-10">
                        <h3 className="my-2 text-xl">Hi, I'm Ilham Rangga</h3>
                        <p className="text-neutral-400 text-sm md:text-base">Over the last 3 years, I developed my fullstack and blockchain dev skills to deliver dynamic and software and web applications.</p>
                    </div>
                </div>

                {/* grid 2 */}
                <div className="grid-default-color h-[15rem] relative overflow-hidden md:h-full md:col-span-3 hover:-translate-y-1 duration-200">
                    <div className="flex items-center justify-center w-full h-full" ref={grid2ContainerRef}>
                        <p className="text-5xl text-gray-500">
                            CODE IS CRAFT
                        </p>
                        <Card containerRef={grid2ContainerRef} text="Clean Code" style={{ rotate: "45deg", top: "30%", left: "40%" }} />
                        <Card containerRef={grid2ContainerRef} text="Secure" style={{ rotate: "70deg", top: "10%", left: "0%" }} />
                        <Card containerRef={grid2ContainerRef} text="Scalable" style={{ rotate: "20deg", top: "50%", left: "50%" }} />
                        <Card containerRef={grid2ContainerRef} text="Decentralized" style={{ rotate: "0deg", top: "80%", left: "20%" }} />
                        <Card containerRef={grid2ContainerRef} image="/tech/solidity.png" style={{ rotate: "0deg", top: "5%", left: "20%" }} />
                        <Card containerRef={grid2ContainerRef} image="/tech/typescript.png" style={{ rotate: "15deg", top: "60%", left: "70%" }} />
                        <Card containerRef={grid2ContainerRef} image="/tech/javascript.png" style={{ rotate: "-15deg", top: "40%", left: "5%" }} />
                    </div>
                </div>

                {/* grid 3 */}
                <div className="grid-black-color h-[15rem] relative overflow-hidden md:h-full md:col-span-3 hover:-translate-y-1 duration-200">
                    <div className="z-10 max-w-[50%]">
                        <h3 className="my-2 text-xl">Time Zone</h3>
                        <p className="text-neutral-400 text-sm md:text-base">Based in <span className="text-white">Indonesia</span>, available for remote collaboration worldwide. </p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>

                {/* grid 4 */}
                <div className="grid-special-color h-[15rem] relative overflow-hidden md:h-full md:col-span-2 hover:-translate-y-1 duration-200">
                    <div className="flex flex-col items-center justify-center w-full h-full gap-6">
                        <h3 className="my-2 text-xl text-center font-medium">Do you want to start a project together?</h3>
                        <CopyEmailButton />
                    </div>
                </div>

                {/* grid 5 */}
                <div className="grid-default-color h-[15rem] relative overflow-hidden md:h-full md:col-span-4 hover:-translate-y-1 duration-200">
                    <div className="z-10 max-w-[50%]">
                        <h3 className="my-2 text-xl">Tech Stack</h3>
                        <p className="text-neutral-400 text-sm md:text-base">I specialize in modern languages, frameworks, and tools that power secure, scalable, and future-proof applications.</p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <OrbitingTechStack />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About