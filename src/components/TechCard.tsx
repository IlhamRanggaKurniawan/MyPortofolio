const TechCard = ({ img, name }: { img: string, name: string }) => {
    return (
        <div className="w-full bg-background rounded-xl p-4 flex flex-col justify-center items-center max-w-64 gap-2">
            <img src={img} className="aspect-square" />
            <h3 className="font-medium">{name}</h3>
        </div>
    )
}

export default TechCard