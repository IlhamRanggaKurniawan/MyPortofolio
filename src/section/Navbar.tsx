import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if(element) {
            element.scrollIntoView({behavior: "smooth"})
        }
        setIsMenuOpen(false)
    }

    return (
        <header className={`w-full text-white fixed h-16 z-50 top-0 transition-all duration-500  ${isScrolled ? "bg-black/40 backdrop-blur-md shadow-sm shadow-white/40" : "bg-transparent"}`}>
            <div className="h-full mx-auto px-section">
                <div className=" h-full flex justify-between items-center">
                    <h2 className="font-semibold text-xl">Ilham Rangga</h2>
                    <nav className="hidden md:block">
                        <div className="h-full flex items-center gap-10">
                            <button onClick={() => scrollToSection("home")} className="text-slate-300 text-sm font-medium transition-all duration-300 cursor-pointer hover:text-white">
                                Home
                            </button>
                            <button onClick={() => scrollToSection("about")} className="text-slate-300 text-sm font-medium transition-all duration-300 cursor-pointer hover:text-white">
                                About
                            </button>
                            <button onClick={() => scrollToSection("projects")} className="text-slate-300 text-sm font-medium transition-all duration-300 cursor-pointer hover:text-white">
                                Projects
                            </button>
                            <button onClick={() => scrollToSection("contact")} className="text-slate-300 text-sm font-medium transition-all duration-300 cursor-pointer hover:text-white">
                                Contact
                            </button>
                        </div>
                    </nav>
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden w-full bg-black shadow-sm shadow-white/40">
                    <div className="h-full flex flex-col gap-5 p-6">
                        <button onClick={() => scrollToSection("home")} className="text-start font-medium transition-all duration-300 cursor-pointer">
                            Home
                        </button>
                        <button onClick={() => scrollToSection("about")} className="text-start font-medium transition-all duration-300 cursor-pointer">
                            About
                        </button>
                        <button onClick={() => scrollToSection("projects")} className="text-start font-medium transition-all duration-300 cursor-pointer">
                            Projects
                        </button>
                        <button onClick={() => scrollToSection("contact")} className="text-start font-medium transition-all duration-300 cursor-pointer">
                            Contact
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar