"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        text: '(+91) 85550 33466'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        text: 'praneeth.palugula@gmail.com'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        text: 'Hyderabad, India'
    }
];

function Contact() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen mt-[9em]">
                <section className="container mx-auto p-6 bg-[var(--color-background)] rounded-lg shadow-lg">
                    <div className="flex flex-col xl:flex-row gap-[30px]">
                        {/* Form Section */}
                        <div className="xl:w-[54%] order-2 xl:order-none bg-white bg-opacity-20 rounded-xl backdrop-blur-md border border-white border-opacity-30">
                            <form className="flex flex-col gap-6 p-10 bg-[var(--color-secondary-bg)] rounded-xl shadow-md transition-all duration-300">
                                <h3 className="text-4xl text-[var(--color-accent)] font-bold">Let's work together</h3>
                                <p className="text-[var(--color-text-muted)]">
                                    I'm always open to new projects, collaborations, or employment opportunities. Let's connect.
                                </p>
                                {/* Input Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input type="text" placeholder="Firstname" />
                                    <Input type="text" placeholder="Lastname" />
                                    <Input type="email" placeholder="Email" />
                                    <Input type="tel" placeholder="Phone" />
                                </div>
                                {/* Service Select */}
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Select a service</SelectLabel>
                                            <SelectItem value="est">Web Development</SelectItem>
                                            <SelectItem value="cst">UI/UX Design</SelectItem>
                                            <SelectItem value="mst">Logo Design</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
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
                                                <h3 className="text-xl text-[var(--color-accent)]">{item.text}</h3>
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
