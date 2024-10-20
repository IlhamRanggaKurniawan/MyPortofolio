import { useEffect, useState } from 'react';
import gsap from 'gsap';

const SplashScreen = () => {
    const [currentValue, setCurrentValue] = useState<number>(0);

    useEffect(() => {
        let start: number | null = null;

        const animateProgress = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min(((timestamp - start) / 5000) * 100, 100); // Durasi animasi 2 detik
            setCurrentValue(progress);
            if (progress < 100) {
                requestAnimationFrame(animateProgress); // Panggil animasi secara berkelanjutan
            }
        };

        requestAnimationFrame(animateProgress); // Mulai animasi

    }, []); // Menggunakan array dependency kosong untuk memulai animasi sekali

    gsap.to('.counter', 0.25, {
        delay: 6,
        opacity: 0,
    });

    gsap.to('.bar', 2, {
        delay: 1,
        height: 0,
        stagger: {
            amount: 0.5,
        },
        ease: 'power4.inOut',
    });

    gsap.to('.progress-bar', 0.25, {
        delay: 1,
        height: 0,
        stagger: {
            amount: 0.5,
        },
        ease: 'power4.inOut',
    });

    return (
        <>
            <div
                className={`progress-bar fixed top-0 left-0 z-30 origin-left h-1 bg-red-500`}
                style={{ width: `${currentValue}%` }}
            />
            <h1 className='counter fixed w-full h-full flex justify-center items-center z-20 text-white p-2 text-9xl'>
                {Math.floor(currentValue)} %
            </h1>
            <div className='fixed w-[100vw] h-[100vh] z-10 flex'>
                <div className='bar w-full h-full bg-yellow-300'></div>
                <div className='bar w-full h-full bg-yellow-300'></div>
                <div className='bar w-full h-full bg-yellow-300'></div>
                <div className='bar w-full h-full bg-yellow-300'></div>
                <div className='bar w-full h-full bg-yellow-300'></div>
                <div className='bar w-full h-full bg-yellow-300'></div>
                <div className='bar w-full h-full bg-yellow-300'></div>
                <div className='bar w-full h-full bg-yellow-300'></div>
                <div className='bar w-full h-full bg-yellow-300'></div>
                <div className='bar w-full h-full bg-yellow-300'></div>
            </div>
        </>
    );
};

export default SplashScreen;
