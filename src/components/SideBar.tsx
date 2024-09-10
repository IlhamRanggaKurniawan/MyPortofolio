import Avatar from './Avatar'
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import Contact from './Contact'
import toast from 'react-hot-toast'

const SideBar = () => {
    const handleClick = (text: string, type: string) => {
        navigator.clipboard.writeText(text)
        toast.success(`${type} has been copied to your clipboard!`, {
            icon: "📋",
            className: "text-primary bg-card"
        })
    }

    return (
        <div className='w-full sm:w-fit p-8 sm:pr-0'>
            <div className='sm:bg-card rounded-xl flex flex-col sm:p-6 h-fit'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <Avatar />
                    <h1 className='text-xl font-semibold'>Ilham Rangga Kurniawan</h1>
                </div>
                <div className='w-full h-[1px] bg-muted my-4' />
                <div className='flex flex-col gap-6'>
                    <div className='w-full flex items-center justify-center'>
                        <h3 className='text-lg font-medium'>Contact</h3>
                    </div>
                    <Contact icon={Mail} contact='ilhamranggakurniawan0@gmail.com' handleClick={() => handleClick("ilhamranggakurniawan0@gmail.com", "Email")} type='Email' />
                    <Contact icon={Instagram} contact='ilham_rku' type='Instagram' link="https://www.instagram.com/ilham_rku"/>
                    <Contact icon={Github} contact='IlhamRanggaKurniawan' type='Github' link="https://github.com/IlhamRanggaKurniawan"/>
                    <Contact icon={Linkedin} contact='Ilham Rangga' type='Linkedin' link="https://www.linkedin.com/in/ilham-rangga-000947282"/>
                </div>
            </div>
        </div>
    )
}

export default SideBar