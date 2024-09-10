const ProjectStatus = ({ status }: { status: "development" | "staging" | "production" }) => {
    const color = status === "development" ? "bg-red-500" : status === "staging" ? "bg-yellow-500" : "bg-green-500"

    return (
        <div className={`w-36 border ${color} rounded-full flex px-2 items-center justify-center gap-3`}>
                {status}
        </div>
    )
}

export default ProjectStatus