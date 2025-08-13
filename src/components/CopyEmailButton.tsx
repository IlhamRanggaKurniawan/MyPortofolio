import { useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import { Copy, CopyCheckIcon } from 'lucide-react'

const CopyEmailButton = () => {
    const [isCoppied, setIsCoppied] = useState(false)
    const email = "ilhamranggakurniawan0@gmail.com"

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email)
        setIsCoppied(true)

        setTimeout(() => {
            setIsCoppied(false)
        }, 2000)
    }

    return (
        <motion.button
            className='bg-black py-3 px-6 rounded-lg cursor-pointer font-light'
            whileHover={{ y: -5 }}
            whileTap={{ scale: 1.05 }}
            onClick={handleCopyEmail}
        >
            <AnimatePresence mode='wait'>

                {isCoppied ? (
                    <motion.p
                        key="copied"
                        className='flex gap-2 items-center'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >
                        <CopyCheckIcon size={20}/>
                        Email has Copied
                    </motion.p>
                ) : (
                    <p
                        key="copy"
                        className='flex gap-2 items-center'
                    >
                        <Copy size={20}/>
                        Copy Email Address
                    </p>
                )}
            </AnimatePresence>
        </motion.button>
    )
}

export default CopyEmailButton