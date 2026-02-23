"use client";

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, BarChart3, PieChart, Users, ChevronRight, Home, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BrowserDots = () => (
    <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#febb2e]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
    </div>
);

export default function FeaturesGrid() {
    return (
        <section className="py-24 bg-[#f8f9fa] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
                {/* About FinTrack text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <Badge variant="outline" className="text-gray-700 bg-gray-50 border-gray-200 mb-6 px-3 py-1 font-medium rounded-full text-xs shadow-sm inline-flex">
                        <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                            <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5 text-white" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                        </div>
                        About FinTrack
                    </Badge>
                    <h2 className="text-3xl md:text-[40px] font-semibold tracking-tight text-gray-900 leading-[1.2]">
                        FinTrack is a modern finance solution that brings <span className="text-gray-400 font-medium">budgeting, expense tracking, and financial clarity</span> into one powerful platform.
                    </h2>
                </motion.div>

                {/* CSS Grid for the highly complex layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">

                    {/* Top Row: Introduction & Browser Split */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-12 flex h-full min-h-[460px]"
                    >
                        <div className="w-full bg-[#f4f7fe] border border-gray-100 overflow-hidden flex flex-col lg:flex-row p-2 md:p-3 rounded-[32px] gap-2 lg:gap-6 items-stretch">
                            {/* Left Side text */}
                            <div className="w-full lg:w-[35%] xl:w-[32%] flex flex-col justify-center px-6 lg:pl-10 xl:pl-12 py-12 lg:py-0 shrink-0">
                                <h3 className="text-[32px] md:text-[36px] lg:text-[40px] font-medium leading-[1.05] tracking-tight mb-5 text-[#111827]">
                                    Small savings today.<br />
                                    Stronger finances<br />
                                    tomorrow.
                                </h3>
                                <p className="text-gray-500 text-[15px] mb-8 leading-[1.6] max-w-[280px]">
                                    FinTrack helps you build long-term wealth through simple, consistent daily savings.
                                </p>
                                <Button className="bg-[#111827] text-white hover:bg-gray-800 rounded-full px-7 py-6 text-[15px] font-medium w-fit shadow-md">
                                    Start Free trial
                                </Button>
                            </div>

                            {/* Right Side Browser mock */}
                            <div className="w-full lg:flex-1 bg-[#ffffff] border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] rounded-[24px] overflow-hidden flex flex-col p-0 relative">
                                {/* Browser Header */}
                                <div className="flex items-center w-full px-6 pt-4 pb-4 border-b border-transparent">
                                    <div className="flex items-center gap-4 flex-1">
                                        <BrowserDots />
                                        <span className="text-[14px] md:text-[15px] font-bold text-[#111827] tracking-tight whitespace-nowrap overflow-hidden text-ellipsis flex-1">
                                            Products Team - Redesign Decussion <span className="font-normal text-gray-500 tracking-normal ml-0.5 whitespace-nowrap">• 26 Dec 2026 - 2:00PM</span>
                                        </span>
                                    </div>
                                    <div className="flex gap-2 ml-4">
                                        <div className="w-8 h-8 rounded-full bg-[#0d1f42] flex items-center justify-center text-white shadow-sm cursor-pointer hover:bg-gray-800 transition-colors">
                                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-[#0d1f42] flex items-center justify-center text-white shadow-sm cursor-pointer hover:bg-gray-800 transition-colors hidden sm:flex">
                                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Browser Content Layout - Responsive Flex-Col on Mobile */}
                                <div className="flex flex-col md:flex-row gap-4 px-6 pb-6 flex-1 relative">
                                    {/* Left Column (Chat + Analytics) */}
                                    <div className="flex flex-col w-full md:w-[45%] lg:w-[42%] gap-4 h-full">
                                        {/* Chat Skeleton */}
                                        <div className="bg-[#e9f3fe] rounded-[24px] p-5 h-auto md:h-[155px] flex items-center justify-center shadow-sm">
                                            <div className="bg-white rounded-[16px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] w-full h-[100px] p-4 flex flex-col relative">
                                                <div className="flex gap-1.5 mb-5 opacity-40">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                                </div>
                                                <div className="flex justify-between w-[95%] mx-auto mb-3">
                                                    <div className="h-[7px] w-[42%] bg-[#2a68e8] rounded-full"></div>
                                                    <div className="h-[7px] w-[42%] bg-[#2a68e8] rounded-full relative">
                                                        <div className="absolute -bottom-[26px] right-0 bg-[#3276f3] text-white text-[9px] font-bold px-3 py-1 rounded-full shadow-md z-10 hidden sm:flex cursor-default">
                                                            Sajibur
                                                            <div className="absolute -top-[5px] left-1 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[6px] border-b-[#3276f3] rotate-[-25deg]"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="h-[7px] w-[55%] bg-[#2a68e8] rounded-full relative ml-[2.5%] mt-1">
                                                        <div className="absolute -bottom-[26px] left-[-0.5rem] bg-[#00897b] text-white text-[9px] font-bold px-3 py-1 rounded-full shadow-md z-10 hidden sm:flex cursor-default">
                                                            Kabir
                                                            <div className="absolute -top-[5px] right-1 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[6px] border-b-[#00897b] rotate-[25deg]"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Analytics Area */}
                                        <div className="bg-[#ffffff] rounded-[24px] p-3 flex-1 flex flex-col min-h-[190px] md:min-h-0 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100">
                                            <div className="flex justify-between items-center mb-0">
                                                <span className="text-[15px] font-bold text-gray-900 tracking-tight">Analytics</span>
                                                <div className="text-[13px] text-gray-500 flex items-center gap-1 cursor-pointer font-medium">All time <ChevronDown className="w-3.5 h-3.5 text-gray-400" /></div>
                                            </div>
                                            <div className="flex flex-col flex-1 items-center justify-center relative pb-4 w-full mt-2">
                                                <div className="relative w-[85%] mx-auto overflow-hidden flex justify-center items-end">
                                                    <svg viewBox="0 0 100 55" className="w-full">
                                                        <path d="M 15 45 A 35 35 0 0 1 85 45" fill="none" stroke="#d4e4fd" strokeWidth="20" />
                                                        <path d="M 15 45 A 35 35 0 0 1 68 15" fill="none" stroke="#2563eb" strokeWidth="20" />
                                                    </svg>
                                                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-3">
                                                        <span className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-none tracking-tight">74%</span>
                                                    </div>
                                                </div>
                                                <span className="text-[14px] text-gray-500 mt-3 font-medium tracking-tight h-5">Actually Records</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column (Meet the minds container) - Adjust min-height for mobile */}
                                    <div className="w-full md:flex-1 rounded-[24px] overflow-hidden relative flex flex-col pt-[300px] md:pt-0 border border-blue-50/20 bg-[#d4f0ff]">
                                        {/* Background Image Container */}
                                        <div className="absolute top-0 right-0 bottom-0 w-[80%] md:w-[75%] h-full z-10 flex justify-end">
                                            <img
                                                src="/images/meet_the_minds.png"
                                                alt="Meet the minds behind FinTrack"
                                                className="w-full h-full object-cover mix-blend-normal object-left-bottom"
                                            />
                                        </div>

                                        {/* Logo area */}
                                        <div className="absolute top-6 left-6 flex items-center gap-2 z-20 w-fit">
                                            <div className="w-8 h-8 rounded-[8px] bg-[#416aff] flex items-center justify-center shrink-0 shadow-sm">
                                                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                            </div>
                                            <span className="text-[16px] font-[800] text-[#0f172a] tracking-tight">FinTrack</span>
                                        </div>

                                        {/* Text blocks matching image layout */}
                                        <div className="absolute top-[90px] left-6 z-20 flex flex-col pointer-events-none">
                                            <span className="font-[900] text-[28px] sm:text-[32px] lg:text-[30px] xl:text-[36px] text-[#0f172a] leading-[1.1] tracking-tight whitespace-nowrap">MEET THE</span>
                                            <span className="font-[900] text-[28px] sm:text-[32px] lg:text-[30px] xl:text-[36px] text-[#0f172a] leading-[1.1] tracking-tight whitespace-nowrap">MINDS BEHIND</span>
                                            <span className="font-[900] text-[28px] sm:text-[32px] lg:text-[30px] xl:text-[36px] text-[#0f172a] leading-[1.1] tracking-tight whitespace-nowrap">FINTRACK</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Earning Overview Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-6 flex flex-col gap-6"
                    >
                        <Card className="bg-[#fcfdff] border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] rounded-[24px] flex-1 p-6 md:p-8 flex flex-col justify-between">
                            <div className="w-full h-full border border-gray-100/60 rounded-xl bg-white shadow-sm p-5 md:p-6 pb-0 flex flex-col justify-between">
                                <div className="flex justify-between items-start w-full mb-6">
                                    <div className="flex items-center gap-2">
                                        <BrowserDots />
                                    </div>
                                    <div className="text-gray-400 font-bold tracking-widest text-lg leading-none cursor-pointer">...</div>
                                </div>
                                <span className="text-[15px] font-semibold text-gray-900 mb-4 block">Earning Overview</span>

                                <div className="mt-1 mb-8">
                                    <div className="text-[32px] md:text-[36px] font-bold text-gray-900 tracking-tight break-all sm:break-normal">$45,726.89</div>
                                </div>

                                {/* Bar Chart Mockup */}
                                <div className="flex items-end gap-2 sm:gap-3 h-36 mt-auto w-full px-1 sm:px-2">
                                    <div className="w-full bg-[#e3ecfb] rounded-t-sm h-[30%]"></div>
                                    <div className="w-full bg-[#e3ecfb] rounded-t-sm h-[15%]"></div>
                                    <div className="w-full bg-[#e3ecfb] rounded-t-sm h-[60%]"></div>
                                    <div className="w-full bg-gradient-to-t from-[#8baaff] to-[#3a6bf4] rounded-t-sm h-[95%] shadow-[0_-5px_20px_rgba(58,107,244,0.3)]"></div>
                                    <div className="w-full bg-[#e3ecfb] rounded-t-sm h-[45%]"></div>
                                    <div className="w-full bg-[#e3ecfb] rounded-t-sm h-[35%]"></div>
                                    <div className="w-full bg-[#e3ecfb] rounded-t-sm h-[65%]"></div>
                                </div>
                            </div>
                        </Card>

                        <div className="px-2 pt-2">
                            <h3 className="text-[20px] font-medium mb-3 text-[#111827]">Real-Time Expense Tracking</h3>
                            <p className="text-[15px] text-gray-500 leading-[1.6] max-w-md">
                                Automatically track and categorize your daily expenses to understand where your money really goes.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 4: Spending Overview Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-6 flex flex-col gap-6"
                    >
                        <Card className="bg-[#fcfdff] border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] rounded-[24px] flex-1 p-6 md:p-8 flex flex-col justify-between">
                            <div className="w-full h-full border border-gray-100/60 rounded-xl bg-white shadow-sm p-5 md:p-6 flex flex-col justify-between">
                                <div className="flex justify-between items-start mb-6 w-full">
                                    <div className="flex flex-col gap-4">
                                        <BrowserDots />
                                        <span className="text-[15px] font-semibold text-gray-900 mt-2">Spending Overview</span>
                                    </div>
                                    <div className="text-[12px] text-gray-500 flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-gray-200 cursor-pointer shadow-sm mt-8 hidden sm:flex">
                                        This Month <ChevronDown className="w-3.5 h-3.5" />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="text-[32px] md:text-[36px] font-bold text-gray-900 tracking-tight">$5,350.50</div>
                                </div>

                                <div className="mb-2 mt-auto">
                                    <span className="text-[12.5px] font-semibold text-gray-900 mb-3 block tracking-wide">Spending Breakdown</span>
                                    <div className="flex flex-wrap justify-start items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-medium mb-1.5 overflow-hidden">
                                        <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"><span className="w-2.5 h-2.5 rounded-full bg-[#2563eb]"></span>House Rent</div>
                                        <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"><span className="w-2.5 h-2.5 rounded-full bg-[#60a5fa]"></span>Foods</div>
                                        <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"><span className="w-2.5 h-2.5 rounded-full bg-[#e3ecfb]"></span>Others</div>
                                    </div>
                                    <div className="flex flex-wrap justify-start items-center gap-3 sm:gap-4 text-[11px] sm:text-[12px] text-gray-400 mb-4 px-1 sm:px-2 overflow-hidden">
                                        <span className="whitespace-nowrap">$2,000.00</span>
                                        <span className="whitespace-nowrap ml-1 sm:ml-5">$1,500.00</span>
                                        <span className="whitespace-nowrap">$800.00</span>
                                    </div>

                                    {/* Progress Bar Segmented */}
                                    <div className="flex h-6 w-full gap-0 mb-6">
                                        <div className="w-[50%] bg-[#2563eb] rounded-l-sm"></div>
                                        <div className="w-[30%] bg-[#60a5fa]"></div>
                                        <div className="w-[20%] bg-[#e3ecfb] rounded-r-sm"></div>
                                    </div>
                                </div>

                                <div className="text-[11px] sm:text-[12px] text-gray-500 font-medium">
                                    Monthly spending overview with percentage change
                                </div>
                            </div>
                        </Card>

                        <div className="px-2 pt-2">
                            <h3 className="text-[20px] font-medium mb-3 text-[#111827]">Smart Budget Planning</h3>
                            <p className="text-[15px] text-gray-500 leading-[1.6] max-w-sm">
                                Set budgets, track progress, and stay in control of your monthly finances effortlessly.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
