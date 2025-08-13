import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import { Particles } from '../components/Particles'
import Alert from '../components/Alert'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertType, setAlertType] = useState("dange")
    const [alertMessage, setAlertMessage] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const showAlertMessage = (type: string, message: string) => {
        setShowAlert(true)
        setAlertType(type)
        setAlertMessage(message)

        setTimeout(() => {
            setShowAlert(false)
        }, 5000)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            console.log("Form submitted")
            await emailjs.send("service_mxa9zje", "template_gqsfjep", {
                from_name: formData.name,
                to_name: "Ilham Rangga",
                from_email: formData.email,
                to_email: "ilhamranggakurniawan0@gmail.com",
                message: formData.message
            }, "K6Zwd4e2Y_WnQFTTN")
            showAlertMessage("success", "Your message has been sent!")
            setFormData({
                email: "",
                message: "",
                name: ""
            })
        } catch (error) {
            console.log(error)
            showAlertMessage("danger", "Something went wrong")

        } finally {
            setIsLoading(false)
        }

    }

    return (
        <section id='contact' className='relative text-white h-full w-full bg-[#09090B] px-section py-16 flex items-center justify-center z-0'>
            <Particles
                className="absolute inset-0 h-full w-full"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh
            />
            {showAlert && <Alert type={alertType} message={alertMessage}/>}
            <div className='border border-white/10 max-w-md p-6 rounded-2xl space-y-10 bg-[#09090B] z-20'>
                <div className='space-y-4'>
                    <h4 className='py-2 text-3xl font-bold md:text-4xl'>Let's Talk</h4>
                    <p className='text-neutral-400'>Whether you're loking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help</p>
                </div>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className="mb-5">
                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="w-full min-h-10 rounded-md px-3 py-2 text-sm bg-white/10 transition duration-200 placeholder-neutral-500 border border-white/10 mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                            placeholder="John Doe"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="w-full min-h-10 rounded-md px-3 py-2 text-sm bg-white/10 transition duration-200 placeholder-neutral-500 border border-white/10 mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                            placeholder="JohnDoe@gmail.com"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full min-h-10 rounded-md px-3 py-2 text-sm bg-white/10 transition duration-200 placeholder-neutral-500 border border-white/10 mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                            placeholder="Share your thoughts..."
                            autoComplete="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type='submit' disabled={isLoading} className={`w-full py-2 border bg-gradient-to-tl from-[#3A3A3A] via-[#242424] to-[#3A3A3A] border-white/20 rounded-lg ${isLoading ? "cursor-wait" : "cursor-pointer transition-all duration-200 hover:-translate-y-2"}`}>
                        {!isLoading ? "Send" : "Sending..."}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact