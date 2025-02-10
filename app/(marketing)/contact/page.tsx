"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaEnvelope, FaYoutube, FaInstagram } from 'react-icons/fa';
import ScrollToTop from "@/components/ScrollBtn";

const info = [
    {
        icon: <FaYoutube />,
        title: 'YouTube',
        link: 'https://www.youtube.com/@WEEKENDKNOCKS',
        text: '@WEEKENDKNOCKS'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        link: '#',
        text: 'weekendknocks@wgmail.com'
    },
    {
        icon: <FaInstagram />,
        title: 'Instagram',
        link: 'https://www.instagram.com/weekendknocks_/',
        text: '@weekendknocks_'
    }
];

function Contact() {
    return (
        <>
        <ScrollToTop />
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen mt-[9em]">
                <section className="container mx-auto p-6 bg-[var(--color-background)] rounded-lg shadow-lg">
                    <div className="flex flex-col xl:flex-row gap-[30px]">
                        {/* Form Section */}
                        <div className="xl:w-[54%] order-2 xl:order-none bg-white bg-opacity-20 rounded-xl backdrop-blur-md border border-white border-opacity-30">
                            <form className="flex flex-col gap-6 p-10 bg-[var(--color-secondary-bg)] rounded-xl shadow-md transition-all duration-300">
                                <h3 className="text-4xl text-[var(--color-accent)] font-bold">Let's work together</h3>
                                <p className="text-[var(--color-text-muted)]">
                                    Got a Technical issue? Want to send feedback? Need details about our Business plan? Let us know.                                         </p>
                                {/* Input Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                   
                                    <Input type="email" placeholder="Email" /> 
                                    <Input type="text" placeholder="Subject" />
                                </div>
                               
                                {/* Message Textarea */}
                                <Textarea className="h-40" placeholder="Type your message here" />
                                {/* Send Button */}
                                <Button size="default" className="max-w-40 mt-4">Send Message</Button>
                            </form>
                        </div>

                        {/* Contact Info Section */}
                        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                            <ul className="flex flex-col gap-10">
                                {info.map((item, i) => {
                                    return (
                                        <li key={i} className="flex items-center gap-6 transition-transform transform hover:scale-105">
                                            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[var(--color-secondary-bg)] text-[var(--color-accent)] rounded-md flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors duration-300">
                                                <div className="text-[28px]">{item.icon}</div>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[var(--color-text-muted)]">{item.title}</p>
                                                <a href={item.link}><h3 className="text-xl text-[var(--color-accent)]">{item.text}</h3></a>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>  
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
