import MainProfile from '../components/MainProfile'
import SideBar from '../components/SideBar'

const AboutPage = () => {
    return (
        <div className='w-full h-full flex flex-col sm:flex-row gap-12'>
            <SideBar />
            <MainProfile heading='About Me'>
                <p className='text-sm md:text-lg'>
                    I’m a dedicated developer with a strong passion for creating impactful technology. Over the past eight months, I’ve built a solid foundation in JavaScript, TypeScript, and Go, using frameworks like React.js, Next.js, and Express.js to craft efficient, engaging applications.
                    <br />
                    <br />
                    One of my standout projects is Connect-Verse, a dynamic social media web app that reflects my commitment to user-focused digital solutions. This project showcases my ability to tackle complex challenges and deliver high-quality results.
                    <br />
                    <br />
                    I’m driven by the ambition to become a visionary leader in tech, aiming to grow into a full-stack developer, explore mobile development and machine learning, and eventually lead innovative projects as a CEO or founder.
                    <br />
                    <br />
                    When developing for tablets and computers, I focus on ensuring a responsive and intuitive user experience. I optimize layouts, enhance performance, and implement adaptive designs that provide seamless interactions across various screen sizes.
                </p>
            </MainProfile>
        </div>
    )
}

export default AboutPage