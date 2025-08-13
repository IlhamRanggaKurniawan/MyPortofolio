import React from 'react'
import { motion, type MotionStyle } from "motion/react"

const Card = ({ style, text, image, containerRef }: { style?: MotionStyle, text?: string, image?: string, containerRef: React.RefObject<HTMLDivElement | null> }) => {
    return (
        <>
            {image && !text ? (
                <motion.img
                    className='absolute w-15 cursor-grab rounded-full overflow-hidden ring ring-gray-700 aspect-square object-cover bg-[#282b4b]'
                    drag
                    dragElastic={1}
                    dragConstraints={containerRef}
                    whileHover={{ scale: 1.05 }}
                    style={style}
                    src={image}
                >

                </motion.img>
            ) : (
                <motion.div
                    className='absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-[#282b4b] w-[12rem] cursor-grab'
                    style={style}
                    drag
                    dragElastic={1}
                    dragConstraints={containerRef}
                    whileHover={{ scale: 1.05 }}
                >
                    {text}
                </motion.div>
            )}
        </>
    )
}

export default Card