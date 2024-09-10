import MainProfile from "../components/MainProfile"
import SideBar from "../components/SideBar"
import TechCard from "../components/TechCard"
import postgres from "../assets/tech/postgres.png"
import next from "../assets/tech/next.png"
import react from "../assets/tech/react.webp"
import reactNative from "../assets/tech/react-native.webp"
import tailwind from "../assets/tech/tailwind.avif"
import golang from "../assets/tech/golang.png"
import typeScript from "../assets/tech/typeScript.png"
import javaScript from "../assets/tech/javaScript.png"

const TechPage = () => {
    const stacks = [
        { img: postgres, name: "Postgres" },
        { img: next, name: "Next" },
        { img: react, name: "React" },
        { img: reactNative, name: "React Native" },
        { img: tailwind, name: "Tailwind" },
        { img: golang, name: "Golang" },
        { img: typeScript, name: "TypeScript" },
        { img: javaScript, name: "JavaScript" },

    ]

    return (
        <div className='w-full h-full flex flex-col sm:flex-row gap-12'>
            <SideBar />
            <MainProfile heading='My Tech Stack'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {stacks.map((stack) => (
                        <TechCard img={stack.img} name={stack.name} key={stack.name} />
                    ))}
                </div>
            </MainProfile>
        </div>
    )
}

export default TechPage