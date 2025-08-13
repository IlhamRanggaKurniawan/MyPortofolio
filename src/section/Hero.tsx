import { ThreeDMarquee } from '../components/3d-marquee'
import Avatar from '../components/Avatar';
import { FlipWords } from '../components/flip-words';

const Hero = () => {
    const images = [
        "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
        "/marquee/auth-system.jpg",
        "https://assets.aceternity.com/animated-testimonials.webp",
        "/marquee/bloomberg.png",
        "https://assets.aceternity.com/github-globe.png",
        "/marquee/rate-cut.png",
        "https://assets.aceternity.com/layout-grid.png",
        "https://assets.aceternity.com/flip-text.png",
        "https://assets.aceternity.com/hero-highlight.png",
        "https://assets.aceternity.com/carousel.webp",
        "https://assets.aceternity.com/placeholders-and-vanish-input.png",
        "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
        "https://assets.aceternity.com/signup-form.png",
        "/marquee/imf.png",
        "https://assets.aceternity.com/spotlight-new.webp",
        "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
        "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png", // tes
        "https://assets.aceternity.com/tabs.png",
        "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
        "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
        "https://assets.aceternity.com/glowing-effect.webp",
        "/marquee/boj.png",
        "/marquee/bond.png",
        "/marquee/snp.png",
        "https://assets.aceternity.com/macbook-scroll.png",
        "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
        "/marquee/trade.png",
        "/marquee/aramco.png",
        "/marquee/treasury.png",
        "https://assets.aceternity.com/wobble-card.png",
        "https://assets.aceternity.com/world-map.webp",
    ];

    const scrollToProject = () => {
        const element = document.getElementById("projects")
        if(element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <section
            id='home'
            className='relative bg-black min-h-screen h-fit text-white flex-col items-center justify-center overflow-hidden z-0'
        >
            <div className='relative z-20 min-h-screen h-full grid sm:grid-cols-2 gap-12 py-20 items-center px-section'>
                {/* left side section */}
                <div className='order-2 space-y-4 sm:order-1 sm:space-y-6 md:space-y-8'>
                    <h1 className='font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-6xl'>Hi, I'm Ilham Rangga</h1>
                    <p className='text-neutral-400 text-lg md:text-xl lg:font-medium xl:text-2xl'>Full Stack & Blockchain Developer passionate about crafting <FlipWords words={["secure", "scalable", "modern"]} className='text-white px-0' />web experiences that drive real impact.</p>
                    <button onClick={scrollToProject} className='text-black bg-white rounded-md px-6 py-2 font-medium hover:scale-110 transition-all duration-300 cursor-pointer'>View My Work</button>
                </div>
                {/* right side section */}
                <div className='order-1 sm:order-2 '>
                    <div className='flex justify-center items-center w-full h-full'>
                        <Avatar />
                    </div>
                </div>
            </div>

            {/* background */}
            <div className="absolute inset-0 z-10 h-full w-full bg-black/40" />
            <ThreeDMarquee images={images} className="pointer-events-none absolute inset-0 h-full w-full z-0" />
        </section>
    )
}

export default Hero