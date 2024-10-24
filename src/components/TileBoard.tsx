import { useState } from 'react'
import Tile from './Tile'
import { gsap } from "gsap"

const TileBoard = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [lastClicked, setLastClicked] = useState(0)
    const rows = 6
    const cols = 6

    const createTiles = (row: number, col: number, index: number) => {
        return (
            <Tile
                col={col}
                row={row}
                index={index}
                isFlipped={isFlipped}
            />
        );
    };

    const flipAllTiles = () => {
        const currentTime = Date.now()
        if (currentTime - lastClicked < 2000) return

        gsap.to(".tile", {
            rotateX: isFlipped ? 0 : 180,
            duration: 1,
            stagger: {
                amount: 0.5,
                from: "random"
            },
            ease: "power2.inOut"
        });
        setIsFlipped((prev) => !prev);
        setLastClicked(currentTime)
    };

    return (
        <div className='w-full h-screen bg-black'>
            <nav className="absolute top-0 right-0 pr-8 pt-8 z-20">
                <button className="bg-black text-white border-none rounded px-4 py-2 uppercase" onClick={() => flipAllTiles()}>Flip tiles</button>
            </nav>
            <div className='w-full h-full p-4 flex flex-col gap-1 perspective-100 relative z-10'>
                {Array.from({ length: rows }, (_, i) => (
                    <div className="flex-1 flex gap-1" key={i}>
                        {Array.from({ length: cols }, (_, j) => createTiles(i, j, i))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TileBoard