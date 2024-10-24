import React, { useRef, useState } from "react"
import { ReactLenis } from "@studio-freight/react-lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import ilham from "../assets/ilham.jpg"

gsap.registerPlugin(ScrollTrigger)

const introHeaders = [
  "create with passion",
  "innovate with code",
  "shape the future",
  "meet the developer",
  "view my work",
]

const ClockAnimation = ({children} : {children : React.ReactNode}) => {
  const [headerText, setHeaderText] = useState(introHeaders[0])
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    let currentCycle = 1
    let imageRevealed = false

    const updateHeaderText = () => {
      setHeaderText(introHeaders[Math.min(currentCycle, introHeaders.length - 1)])
    }

    const pinnedHeight = window.innerHeight * 8;

    ScrollTrigger.create({
      trigger: ".main",
      start: "top top",
      end: `+=${pinnedHeight}`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress

        const rotationProgress = Math.min((progress * 8) / 5, 1)

        const totalRotation = rotationProgress * 1800
        const rotationCycle = (totalRotation % 360) + 90

        gsap.set(".hand-container", { rotationZ: rotationCycle })

        const newCycle = Math.floor(totalRotation / 360)

        if (newCycle !== currentCycle && newCycle >= 0 && newCycle < introHeaders.length) {
          currentCycle = newCycle
          updateHeaderText()

          if (newCycle === 3 && !imageRevealed) {
            gsap.to(".img", { opacity: 1, duration: 0.3 })
            gsap.to(".text", {
              x: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.1
            })

            imageRevealed = true
          } else {
            gsap.to(".img", { opacity: 0, duration: 0.3 })
            gsap.to(".text", {
              x: -20,
              opacity: 0,
              duration: 0.5,
              stagger: 0.1
            })

            imageRevealed = false
          }
        }

        if (progress <= 6 / 8) {
          const animationProgress = Math.max(0, (progress - 5 / 8) / (1 / 8))
          const newHeight = gsap.utils.interpolate(52.75, 100, animationProgress)
          const newOpacity = gsap.utils.interpolate(1, 0, animationProgress)
          gsap.set(".hand", { height: `${newHeight}%` })
          gsap.set(".intro", { opacity: 1 })
          gsap.set(".header-text", { opacity: newOpacity })
          gsap.set(".header-span", { opacity: newOpacity })
        } else {
          gsap.set(".intro", { opacity: 0 })
        }

        if (progress <= 7 / 8) {
          const scaleProgress = Math.max(0, (progress - 6 / 8) / (1 / 8))
          const newScale = gsap.utils.interpolate(1, 20, scaleProgress)
          gsap.set(".hand", { scale: newScale })
        }

        if (progress <= 7.5 / 8) {
          const opacityProgress = Math.max(0, (progress - 7 / 8) / (0.5 / 8))
          const newOpacity = gsap.utils.interpolate(1, 0, opacityProgress)
          gsap.set(".hand", { opacity: newOpacity })
        }

        if (progress > 7.5 / 8) {
          const revealProgress = (progress - 7.5 / 8) / (0.5 / 8)
          const newOpacity = gsap.utils.interpolate(0, 1, revealProgress)
          gsap.set(".website-content", { opacity: newOpacity })
        } else {
          gsap.set(".website-content", { opacity: 0 })
        }
      }
    })

    updateHeaderText()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, { scope: containerRef })

  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        <div className='container w-full mx-auto' ref={containerRef}>
          <section className='main bg-[#161616] w-full h-screen' >
            <div className="hand-container absolute top-1/2 left-1/2 w-96 h-[740px] flex justify-center transform -translate-x-1/2 -translate-y-1/2 items-start origin-center transform-preserve-3d z-10 ">
              <div className="hand absolute w-[11%] h-[55%] bg-white rounded-full overflow-hidden">
                <img src={ilham} className="img w-full h-full object-cover opacity-0" />
              </div>
            </div>
            <div className='intro absolute top-1/2 -mt-5 right-1/4 w-[22.5%]' >
              <h1 className="header-text text-[27px] font-medium w-fit text-white"><span className="header-span text-[#6e6e6e]">time to</span> {headerText}</h1>
              <div>
                <p className="text text-[16px] font-medium text-slate-400 relative mt-3 translate-x-5 opacity-0">Meet Ilham Rangga Kurniawan, a passionate full-stack developer with a keen focus on web development. With a strong foundation in both front-end and back-end technologies, Ilham thrives on creating intuitive and efficient web applications. In addition to programming, he enjoys gaming, which fuels his creativity and problem-solving skills. His ultimate goal is to establish a company that breaks through the limits of technology, leveraging innovation to push boundaries and create impactful solutions</p>
              </div>
            </div>

            <div className="website-content opacity-0">
              {children}
            </div>
          </section>
        </div>
      </ReactLenis>
    </>
  )
}

export default ClockAnimation