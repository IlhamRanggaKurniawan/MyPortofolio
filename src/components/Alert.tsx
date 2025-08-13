import { AnimatePresence, motion } from 'motion/react'

const Alert = ({ type, message }: { type: string, message: string }) => {
    const alertVarients = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -50, scale: 0.8 },
    };
    return (
        <AnimatePresence>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={alertVarients}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`absolute bottom-5 right-5 text-white flex items-center h-fit w-fit justify-center p-2 px-4 rounded-md ${type === "success" ? "bg-violet-500" : "bg-red-500"}`}
            >
                {message}
            </motion.div>
        </AnimatePresence>
    )
}

export default Alert