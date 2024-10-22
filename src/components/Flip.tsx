
const Flip = () => {
    return (
        <div className="w-full h-screen bg-black">
            <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-10">
                <a href="#" className="text-2xl text-white">Code grid</a>
                <button className="bg-black text-white border-none rounded px-4 py-2 uppercase">Flip tiles</button>
            </nav>
            {/* <Board /> */}
        </div>
    )
}

export default Flip