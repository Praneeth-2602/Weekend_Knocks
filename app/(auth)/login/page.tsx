'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import logo from '@/assets/logo.png';
import logobg from '@/assets/login_bg.jpg';
import dotenv from 'dotenv';
import Link from "next/Link";

dotenv.config();
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function LoginPage() {
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [activeTab, setActiveTab] = useState<'email' | 'otp'>('email'); // Set 'email' as the default tab
    const router = useRouter();

    const handleSendOtp = async () => {
        setError('');
        try {
            await axios.post(`${baseURL}/send-otp/`, { phone_number: mobile });
            setOtpSent(true);
            alert("OTP sent successfully!");
        } catch (error) {
            setError("Failed to send OTP. Please try again.");
        }
    };

    const handleVerifyOtp = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setError('');
        try {
            const response = await axios.post(`${baseURL}/login-with-otp/`, {
                phone_number: mobile,
                otp
            });
            localStorage.setItem('token', response.data.access_token);
            alert("Login successful!");
            router.push('/');
        } catch (error) {
            setError("OTP verification failed. Please try again.");
        }
    };

    const handleEmailLogin = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setError('');
        try {
            const response = await axios.post(`${baseURL}/login/`, {
                email,
                password
            });
            localStorage.setItem('token', response.data.access_token);
            alert("Login successful!");
            router.push('/');
        } catch (error) {
            setError("Login failed. Please check your credentials.");
        }
    };

    return (
        <div>
            <Navbar />

            {/* Background with blur effect */}
            <div
                style={{
                    backgroundImage: `url(${logobg.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    filter: 'blur(10px)',
                    zIndex: -1,
                }}
            ></div>

            <div className="flex justify-center items-center min-h-screen px-4 pt-20 pb-8 my-[3em]">
                <div className="w-full max-w-md p-8 m-auto bg-white rounded-3xl shadow-lg dark:bg-gray-800">
                    <div className="flex justify-center mx-auto mb-6">
                        <img src={logo.src} alt="Logo" className="w-20 h-20 transition duration-300 hover:scale-110" />
                    </div>

                    {/* <div className="flex justify-center mb-6 space-x-4">
                        <button
                            className={`px-4 py-2 text-sm font-medium rounded-full ${activeTab === 'email' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                            onClick={() => setActiveTab('email')}
                        >
                            Email Login
                        </button>
                        <button
                            className={`px-4 py-2 text-sm font-medium rounded-full ${activeTab === 'otp' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                            onClick={() => setActiveTab('otp')}
                        >
                            OTP Login
                        </button>
                    </div> */}

                    {activeTab === 'otp' ? (
                        <form onSubmit={otpSent ? handleVerifyOtp : (e) => { e.preventDefault(); handleSendOtp(); }}>
                            <div>
                                <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            {otpSent && (
                                <div className="mt-4">
                                    <label htmlFor="otp" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                                        Enter OTP
                                    </label>
                                    <input
                                        type="text"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                            )}

                            {error && <div className="mt-2 text-red-500 text-sm">{error}</div>}

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full hover:shadow-lg transition duration-200"
                                >
                                    {otpSent ? 'Verify OTP' : 'Send OTP'}
                                </button>
                            </div>

                            <div className="mt-4 text-center">
                                <button
                                    type="button"
                                    className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline hover:text-primary"
                                    onClick={() => setActiveTab('email')}
                                >
                                    Login with Email
                                </button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleEmailLogin}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mt-4">
                                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-700 dark:text-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            {error && <div className="mt-2 text-red-500 text-sm">{error}</div>}

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full hover:shadow-lg transition duration-200"
                                >
                                    Sign In
                                </button>
                            </div>

                            <div className="mt-4 text-center">
                                <button
                                    type="button"
                                    className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline hover:text-primary"
                                    onClick={() => setActiveTab('otp')}
                                >
                                    Login with OTP
                                </button>
                            </div>
                        </form>
                    )}

                    <div className="mt-8 text-center text-gray-700 dark:text-gray-300">
                        Don't have an account? <Link href='/signup' className="text-sm font-medium text-primary hover:underline">Create One</Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
