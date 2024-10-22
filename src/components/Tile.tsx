import React, { useRef, useState } from 'react'
import tes from "../assets/expo-logo.webp"
import ilhamRangga from "../assets/ilham-rangga.png"
import textImage from "../assets/text-image.png"
import gsap from 'gsap'

const Tile = ({ row, col, index, isFlipped }: { row: number, col: number, index: number, isFlipped: boolean }) => {
    const [lastEnterTime, setLastEnterTime] = useState(0)
    const tileRef = useRef<HTMLDivElement>(null)

    let tiltY;
    if (index % 6 === 0) {
        tiltY = -40;
    } else if (index % 6 === 5) {
        tiltY = 40;
    } else if (index % 6 === 1) {
        tiltY = -20;
    } else if (index % 6 === 4) {
        tiltY = 20;
    } else if (index % 6 === 2) {
        tiltY = -10;
    } else {
        tiltY = 10;
    }

    const animateTile = () => {
        const currentTime = Date.now()
        if(currentTime - lastEnterTime > 1000) {
            setLastEnterTime(currentTime)
            console.log(isFlipped)

            const tile = tileRef.current
            if(!tile) return
            
            gsap.timeline()
            .set(tile, { rotateX: isFlipped ? 180 : 0, rotateY: 0 })
            .to(tile, {
                rotateX: isFlipped ? 360 : 180,
                rotateY: tiltY,
                duration: 0.5,
                ease: "power2.out"
            })
            .to(tile, {
                rotateX: isFlipped ? 540 : 360,
                rotateY: 0,
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.25");
        }
        }
        
    return (
        <div className='tile flex relative transform-preserve-3d flex-1' onMouseEnter={animateTile} ref={tileRef}>
            <div
                className='absolute w-full h-full backface-hidden rounded overflow-hidden bg-slate-500 bg-size-600 bg-position-inherit'
                style={{
                    backgroundImage: `url(${ilhamRangga})`,
                    backgroundPosition: `${col * 20}% ${row * 20}%`,
                }}
            />
            <div className='absolute w-full h-full backface-hidden rounded overflow-hidden bg-zinc-500 rotate-x-180 bg-size-600 bg-position-inherit'
                style={{
                    backgroundImage: `url(${textImage})`,
                    backgroundPosition: `${col * 20}% ${row * 20}%`,
                }}
            />
        </div>
    )
}

export default Tile