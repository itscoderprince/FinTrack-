"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from "framer-motion";

export default function LifeStyleFeature() {
    return (
        <section className="py-24 bg-[#ffffff] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left Column: Realistic Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, type: "spring" }}
                        className="w-full lg:w-[45%] relative flex justify-center lg:justify-start"
                    >
                        <div className="aspect-[4/5] md:aspect-[5/6] w-full max-w-[480px] rounded-[32px] overflow-hidden relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
                            <img
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
                                alt="Man using phone for everyday finance"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-[55%] flex flex-col items-start pl-0 lg:pl-12 mt-8 lg:mt-0"
                    >
                        <h2 className="text-[36px] md:text-[44px] font-semibold tracking-tight text-gray-900 mb-6 leading-[1.15] w-full">
                            Smarted Finance, Built<br className="hidden md:block" /> for Everyday Life
                        </h2>
                        <p className="text-gray-500 mb-8 text-[15px] leading-[1.6] max-w-[480px]">
                            Take full control of your finances with real-time insights, smart automation, and secure tools designed to help you spend wisely.
                        </p>

                        <Button className="bg-[#0f172a] text-white hover:bg-[#1e293b] rounded-full px-7 py-5 text-[14px] font-medium mb-10 sm:mb-16 shadow-lg shadow-slate-200">
                            Get Started
                        </Button>

                        <div className="w-full flex flex-col sm:flex-row gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                                className="flex-1"
                            >
                                <Card className="h-full p-6 bg-[#f8fafc] border border-gray-100 shadow-sm rounded-[24px]">
                                    <div className="w-10 h-10 bg-[#e0efff] text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                                        <svg className="w-5 h-5 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-[15px] font-bold text-gray-900 mb-1">Track Income</h4>
                                    <p className="text-[13px] text-gray-500 leading-snug">Easily track all your income and earnings in one clear view.</p>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                                className="flex-1"
                            >
                                <Card className="h-full p-6 bg-[#f8fafc] border border-gray-100 shadow-sm rounded-[24px]">
                                    <div className="w-10 h-10 bg-[#e0eaff] text-sky-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                                        <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-[15px] font-bold text-gray-900 mb-1">Smart Budgeting</h4>
                                    <p className="text-[13px] text-gray-500 leading-snug">Take full control of your finances with real-time insights.</p>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
