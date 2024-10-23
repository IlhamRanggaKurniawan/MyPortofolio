import { useRef, useState } from "react"
import { ReactLenis } from "@studio-freight/react-lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

const introHeaders = [
    "be brave",
    "be playfull",
    "design the future",
    "meet harnish",
    "see project one",
  ]

const ClockAnimation = () => {
    const [headerText, setHeaderText] = useState(introHeaders[0])
    const containerRef = useRef<HTMLDivElement>(null)
    const stickyRef = useRef<HTMLDivElement>(null)
    const handContainerRef = useRef<HTMLDivElement>(null)
    const handRef = useRef<HTMLDivElement>(null)
    const handImageRef = useRef<HTMLImageElement>(null)
    const introRef = useRef<HTMLDivElement>(null)
    const h1ElementRef = useRef<HTMLDivElement>(null)
    const introCopyRef = useRef<HTMLDivElement>(null)
    const websiteContentRef = useRef<HTMLDivElement>(null)

  
    useGSAP(() => {
      let currentCycle = -1
      let imageRevealed = false
  
      const updateHeaderText = () => {
        setHeaderText(introHeaders[Math.min(currentCycle, introHeaders.length - 1)])
      }
  
      const pinnedHeight = window.innerHeight * 8;
  
      ScrollTrigger.create({
        trigger: stickyRef.current,
        start: "top top",
        end: `+=${pinnedHeight}`,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress
  
          const rotationProgress = Math.min((progress * 8) / 5, 1)
          const totalRotation = rotationProgress * 1800 - 90
          const rotationCycle = ((totalRotation + 90) % 360) - 90
          gsap.set(handContainerRef.current, { rotationZ: rotationCycle })
  
  
          const newCycle = Math.floor((totalRotation + 90) / 360)
  
          if (newCycle !== currentCycle && newCycle >= 0 && newCycle < introHeaders.length) {
            currentCycle = newCycle
            updateHeaderText()
  
            if (newCycle === 3 && !imageRevealed) {
              const p = introCopyRef.current?.querySelectorAll("p")
  
              if (!p) return
  
              gsap.to(handImageRef.current, { opacity: 1, duration: 0.3 })
              gsap.to(p, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1
              })
  
              imageRevealed = true
            } else if (newCycle !== 3 && imageRevealed) {
              const p = introCopyRef.current?.querySelectorAll("p")
  
              if (!p) return
  
              gsap.to(handImageRef.current, { opacity: 0, duration: 0.3 })
              gsap.to(p, {
                x: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1
              })
  
              imageRevealed = false
            }
          }
          if (progress <= 6 / 8) {
            const span = h1ElementRef.current?.querySelectorAll("span")
  
            if (!span) return
            const animationProgress = Math.max(0, (progress - 5 / 8) / (1 / 8))
            const newHeight = gsap.utils.interpolate(52.75, 100, animationProgress)
            const newOpacity = gsap.utils.interpolate(1, 0, animationProgress)
            gsap.set(handRef.current, { height: `${newHeight}%` })
            gsap.set(introRef.current, { opacity: 1 })
            gsap.set(h1ElementRef.current, { opacity: newOpacity })
            gsap.set(span, { opacity: newOpacity })
          } else {
            gsap.set(introRef.current, { opacity: 0 })
          }
  
          if (progress <= 7 / 8) {
            const scaleProgress = Math.max(0, (progress - 6 / 8) / (1 / 8))
            const newScale = gsap.utils.interpolate(1, 20, scaleProgress)
            gsap.set(handRef.current, { scale: newScale })
          }
  
          if (progress <= 7.5 / 8) {
            const opacityProgress = Math.max(0, (progress - 7 / 8) / (0.5 / 8))
            const newOpacity = gsap.utils.interpolate(1, 0, opacityProgress)
            gsap.set(handRef.current, { opacity: newOpacity })
          }
  
          if (progress > 7.5 / 8) {
            const revealProgress = (progress - 7.5 / 8) / (0.5 / 8)
            const newOpacity = gsap.utils.interpolate(0, 1, revealProgress)
            gsap.set(websiteContentRef.current, { opacity: newOpacity })
          } else {
            gsap.set(websiteContentRef.current, { opacity: 0 })
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
        <ReactLenis root options={{lerp: 0.1, duration: 1.5, smoothWheel: true}}>
          <div className='container' ref={containerRef}>
            <section className='sticky' ref={stickyRef}>
              <div className="hand-container" ref={handContainerRef}>
                <div className="hand" ref={handRef}>
                  <img src="/rotate.png" ref={handImageRef} />
                </div>
              </div>
              <div className='intro' ref={introRef}>
                <h1 ref={h1ElementRef}><span>time to</span> {headerText}</h1>
                <div ref={introCopyRef}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quod sunt sequi esse perferendis expedita, adipisci odio aliquam. Sint, veritatis?</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quod sunt sequi esse perferendis expedita, adipisci odio aliquam. Sint, veritatis?</p>
                </div>
              </div>
  
              <div className="website-content" ref={websiteContentRef}>
                <h1>CodeGrid</h1>
              </div>
            </section>
            <section className='about'></section>
          </div>
        </ReactLenis>
      </>
    )
}

export default ClockAnimation