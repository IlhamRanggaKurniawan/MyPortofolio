import { OrbitingCircles } from './OrbitingCircles'

const Icon = ({ src }: { src: string }) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);

const OrbitingTechStack = () => {
    const skills = [
        "css",
        "hardhat",
        "html",
        "javascript",
        "next",
        "postgre",
        "react",
        "solidity",
        "tailwindCSS",
        "typescript",
    ];

    return (
        <div className='relative flex h-[15rem] w-full flex-col items-center justify-center'>
            <OrbitingCircles iconSize={40} speed={0.5}>
                {skills.map((skill, index) => (
                    <Icon key={index} src={`/tech/${skill}.png`} />
                ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={100} reverse speed={1.3}>
                {skills.reverse().map((skill, index) => (
                    <Icon key={index} src={`/tech/${skill}.png`} />

                ))}
            </OrbitingCircles>
        </div>
    )
}

export default OrbitingTechStack