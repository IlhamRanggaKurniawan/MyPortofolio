/* eslint-disable @typescript-eslint/prefer-as-const */
import MainProfile from '../components/MainProfile'
import SideBar from '../components/SideBar'
import nextLogo from "../assets/project/next-logo.jpeg"
import expoLogo from "../assets/project/expo-logo.webp"
import golangLogo from "../assets/project/golang-logo.png"
import ProjectCard from '../components/ProjectCard'


const ProjectPage = () => {
    const projects = [
        { img: nextLogo, projectName: "Connect Verse Web App", projectType: "Web Aplication", projectStatus: "production " as "production" },
        { img: expoLogo, projectName: "Connect Verse Mobile App", projectType: "Mobile Aplication", projectStatus: "development" as "development" },
        { img: golangLogo, projectName: "Connect Verse API", projectType: "REST API", projectStatus: "staging" as "staging" },
    ]

    return (
        <div className='w-full h-full flex flex-col sm:flex-row gap-12'>
            <SideBar />
            <MainProfile heading='My Project'>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
                    {projects.map((project) => (
                        <ProjectCard img={project.img} projectName={project.projectName} projectStatus={project.projectStatus} projectType={project.projectType} key={project.projectName} />
                    ))}
                </div>
            </MainProfile>
        </div>
    )
}

export default ProjectPage