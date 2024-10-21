import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { AnimatePresence, motion } from "framer-motion"
import Lottie from 'lottie-react';
import rocket from '../assets/animation/rocket.json'

const SplashScreen = () => {
    const [currentValue, setCurrentValue] = useState<number>(0);
    const [dynamicText, setDynamicText] = useState<string>('Fullstack Developer');

    useEffect(() => {
        let start: number | null = null;

        const animateProgress = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min(((timestamp - start) / 10000) * 100, 100);
            setCurrentValue(progress);
            if (progress < 100) {
                requestAnimationFrame(animateProgress);
            }
        };

        requestAnimationFrame(animateProgress);
    }, []);

    useEffect(() => {
        if (currentValue > 25 && currentValue <= 50) {
            setDynamicText('Building Dreams');
        } else if (currentValue > 50 && currentValue <= 75) {
            setDynamicText('Shaping futures');
        } else if (currentValue > 75) {
            setDynamicText('Ilham Rangga');
        }
    }, [currentValue]);

    // gsap.to('.counter', 0.25, {
    //     delay: 5.5,
    //     opacity: 0,
    // });

    gsap.to('.top-bar', 2, {
        delay: 1,
        y: '-100%', // Gerakkan bar ke atas
        ease: 'power4.inOut',
    });

    gsap.to('.bottom-bar', 2, {
        delay: 1,
        y: '100%', // Gerakkan bar ke bawah
        ease: 'power4.inOut',
    });

    gsap.to('.text', 0.5 ,{
        delay: 10,
        opacity: 0
    })

    return (
        <>
            <div className='fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
                <div className="text flex w-full items-center justify-center text-xl font-bold sm:text-3xl text-[#795757]">
                    <motion.h1 className='whitespace-nowrap fixed pr-44 sm:pr-48 mr-2'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }} 
                    >
                        I Am
                    </motion.h1>

                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={dynamicText}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="whitespace-nowrap fixed pl-20 sm:pl-36 flex-shrink-0 origin-left text-left" >
                            {dynamicText}
                        </motion.h1>
                    </AnimatePresence>
                </div>
            </div>

            <div className="text fixed bottom-10 left-1/2 transform -translate-x-1/2 text-center z-20">
            <Lottie animationData={rocket} className='aspect-square w-24'/>
                <motion.h2
                    className="text-2xl font-semibold text-[#795757] z-20"
                >
                    {Math.floor(currentValue)}%
                </motion.h2>
            </div>

            <div className='fixed w-[100vw] h-[100vh] z-10 flex'>
                <div className='top-bar absolute top-0 w-full h-[50vh] bg-[#FFF0D1]'></div>
                <div className='bottom-bar absolute bottom-0 w-full h-[50vh] bg-[#FFF0D1]'></div>
            </div>
        </>
    );
};

export default SplashScreen;
