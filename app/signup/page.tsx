'use client';

import Navbar from "@/components/Navbar";
import banner from "@/assets/banner2.jpg";
import Footer from "@/components/Footer";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');  // Reset any errors

        // Prepare the payload for signup
        const userPayload = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone: formData.phoneNumber,
            email: formData.email,
            password: formData.password,
        };

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/`, userPayload);
            alert("Signup successful!");  // Or redirect as needed
            router.push('/login');  // Redirect to login page
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.detail || "Signup failed.");
            } else {
                setError("Signup failed.");
            }
        }
    };

    return (
        <>
            <Navbar />
            <section className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center pt-[10rem] pb-[5rem]">
                <div className="container mx-auto flex flex-col lg:flex-row items-stretch justify-center shadow-2xl rounded-lg overflow-hidden max-w-5xl bg-white dark:bg-gray-800 h-[600px]">
                    {/* Left Section: Image */}
                    <div
                        className="w-full lg:w-1/2 h-full bg-cover bg-center relative group flex-shrink-0"
                        style={{ backgroundImage: `url(${banner.src})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                        <div className="flex items-center justify-center w-full h-full">
                            <h2 className="text-white text-4xl font-semibold hidden lg:block tracking-wide group-hover:scale-105 transition-all duration-300">
                                Join Weekend Knocks!
                            </h2>
                        </div>
                    </div>

                    {/* Right Section: Signup Form */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-white dark:bg-gray-800 flex flex-col items-center">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white tracking-wide text-center">
                            Create Your Free Account
                        </h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
                            Sign up to access exclusive content and stay updated.
                        </p>

                        <form onSubmit={handleSignup} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="John"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="XXX-XXX-XXXX"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="johndoe@example.com"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full col-span-1 sm:col-span-2 mt-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none shadow-lg transition duration-300"
                            >
                                Sign Up
                            </button>
                            {error && (
                                <div className="w-full text-center text-red-600 mt-4">
                                    {error}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
