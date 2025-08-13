
const Avatar = () => {
    return (
        <div className='relative aspect-square max-w-[400px] w-full'>
            <div className='w-full h-full aspect-square bg-neutral-200 rounded-full overflow-hidden'>
                <img src="profile.png" className="filter grayscale"/>
            </div>
            <div className="absolute -inset-4 border border-white/30 rounded-full" />
            <div className="absolute -inset-8 border border-white/10 rounded-full"/>
        </div>
    )
}

export default Avatar