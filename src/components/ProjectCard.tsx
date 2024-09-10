import ProjectStatus from "./ProjectStatus"

const ProjectCard = ({ img, projectName, projectType, projectStatus }: { img: string, projectName: string, projectType: string, projectStatus: "development" | "staging" | "production" }) => {
    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-center">
                <div className="max-w-72 bg-card aspect-video">
                    <img src={img} alt="my project" className="rounded-xl aspect-video" />
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="py-1 px-3 w-72 flex flex-col">
                    <ProjectStatus status={projectStatus} />
                    <h2 className="text-lg font-medium">{projectName}</h2>
                    <p className="text-sm text-muted-foreground">{projectType}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard