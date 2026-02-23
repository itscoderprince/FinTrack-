import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, BarChart3, PieChart, Users, ChevronRight, Home, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const BrowserDots = () => (
    <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#febb2e]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
    </div>
);

export default function FeaturesGrid() {
    return (
        <section className="py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">
                {/* About FinTrack text */}
                <div className="mb-16">
                    <Badge variant="outline" className="text-gray-700 bg-gray-50 border-gray-200 mb-6 px-3 py-1 font-medium rounded-full text-xs shadow-sm inline-flex">
                        <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                            <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5 text-white" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                        </div>
                        About FinTrack
                    </Badge>
                    <h2 className="text-3xl md:text-[40px] font-semibold tracking-tight text-gray-900 leading-[1.2]">
                        FinTrack is a modern finance solution that brings <span className="text-gray-400 font-medium">budgeting, expense tracking, and financial clarity</span> into one powerful platform.
                    </h2>
                </div>

                {/* CSS Grid for the highly complex layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">

                    {/* Card 1: Small Savings */}
                    <Card className="lg:col-span-4 xl:col-span-5 bg-[#fdfdfd] border-0 rounded-[24px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col p-10 justify-center min-h-[400px]">
                        <div>
                            <h3 className="text-[32px] md:text-[36px] font-medium leading-[1.1] tracking-tight mb-5 text-[#111827]">
                                Small savings today.<br />
                                Stronger finances<br />
                                tomorrow.
                            </h3>
                            <p className="text-gray-500 text-[15px] mb-8 leading-[1.6] max-w-[280px]">
                                FinTrack helps you build long-term wealth through simple, consistent daily savings.
                            </p>
                            <Button className="bg-[#111827] text-white hover:bg-gray-800 rounded-full px-7 py-6 text-[15px] font-medium w-fit">
                                Start Free trial
                            </Button>
                        </div>
                    </Card>

                    {/* Card 2: Meet the minds */}
                    <Card className="lg:col-span-7 bg-[#ffffff] border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col p-0 relative min-h-[420px] rounded-[24px]">
                        {/* Browser Header */}
                        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-transparent">
                            <div className="flex items-center gap-4">
                                <BrowserDots />
                                <span className="text-[13px] font-bold text-gray-900 tracking-tight ml-1">
                                    Products Team - Redesign Decussion <span className="font-normal text-gray-400 tracking-normal ml-0.5">• 26 Dec 2026 - 2:00PM</span>
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-[#0d1f42] flex items-center justify-center text-white shadow-sm cursor-pointer">
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-[#0d1f42] flex items-center justify-center text-white shadow-sm cursor-pointer ml-1">
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                </div>
                            </div>
                        </div>

                        {/* Browser Content Layout */}
                        <div className="flex gap-4 px-6 pb-6 flex-1 h-full relative">
                            {/* Left Column (Chat + Analytics) */}
                            <div className="flex flex-col w-[45%] gap-4 h-full">
                                {/* Chat Skeleton */}
                                <div className="bg-[#e9f3fe] rounded-[24px] p-5 h-[155px] flex items-center justify-center shadow-sm">
                                    <div className="bg-white rounded-[16px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] w-full h-[100px] p-4 flex flex-col relative">
                                        <div className="flex gap-1.5 mb-5 opacity-40">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                                        </div>
                                        <div className="flex justify-between w-[95%] mx-auto mb-3">
                                            <div className="h-[7px] w-[42%] bg-[#2a68e8] rounded-full"></div>
                                            <div className="h-[7px] w-[42%] bg-[#2a68e8] rounded-full relative">
                                                <div className="absolute -bottom-[26px] right-0 bg-[#3276f3] text-white text-[9px] font-bold px-3 py-1 rounded-full shadow-md z-10 flex cursor-default">
                                                    Sajibur
                                                    <div className="absolute -top-[5px] left-1 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[6px] border-b-[#3276f3] rotate-[-25deg]"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="h-[7px] w-[55%] bg-[#2a68e8] rounded-full relative ml-[2.5%] mt-1">
                                                <div className="absolute -bottom-[26px] left-[-0.5rem] bg-[#00897b] text-white text-[9px] font-bold px-3 py-1 rounded-full shadow-md z-10 flex cursor-default">
                                                    Kabir
                                                    <div className="absolute -top-[5px] right-1 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[6px] border-b-[#00897b] rotate-[25deg]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Analytics Area */}
                                <div className="bg-[#fafbfc] rounded-[24px] p-5 flex-1 flex flex-col shadow-sm border border-gray-100/50">
                                    <div className="flex justify-between items-center mb-0">
                                        <span className="text-[14px] font-semibold text-gray-800 tracking-tight">Analytics</span>
                                        <div className="text-[12px] text-gray-500 flex items-center gap-1 cursor-pointer font-medium">All time <ChevronDown className="w-3 h-3 text-gray-400" /></div>
                                    </div>
                                    <div className="flex flex-col flex-1 items-center justify-end relative pb-3 overflow-visible">
                                        <div className="relative w-40 h-24 overflow-hidden flex justify-center items-end">
                                            <svg viewBox="0 0 100 50" className="w-[120%] h-[120%] overflow-visible">
                                                <path d="M 10 40 A 40 40 0 0 1 90 40" fill="none" stroke="#cfdffd" strokeWidth="15" strokeLinecap="butt" />
                                                <path d="M 10 40 A 40 40 0 0 1 70 15.3" fill="none" stroke="url(#blue-grad)" strokeWidth="15" strokeLinecap="butt" />
                                                <defs>
                                                    <linearGradient id="blue-grad" x1="0" y1="0" x2="1" y2="0">
                                                        <stop offset="0%" stopColor="#419aff" />
                                                        <stop offset="100%" stopColor="#2040ff" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-end pb-1.5">
                                                <span className="text-[28px] font-bold text-gray-900 leading-[0.8] tracking-tight">74%</span>
                                            </div>
                                        </div>
                                        <span className="text-[11px] text-gray-600 mt-2 font-medium tracking-tight">Actually Records</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column (Meet the minds container) */}
                            <div className="flex-1 bg-[#cbecfe] rounded-[24px] overflow-hidden relative border border-blue-50/20">
                                {/* Logo area */}
                                <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/50 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm z-20">
                                    <div className="w-5 h-5 rounded-full bg-[#416aff] flex items-center justify-center shrink-0">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-[11px] h-[11px] text-white" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                    </div>
                                    <span className="text-[14px] font-bold text-gray-900 tracking-tight pr-1">FinTrack</span>
                                </div>

                                {/* Text blocks */}
                                <div className="absolute top-28 left-6 z-20 w-[55%] flex flex-col">
                                    <span className="font-extrabold text-[28px] md:text-[32px] lg:text-[36px] text-[#0f172a] leading-[1.1] tracking-[-0.04em]">MEET THE</span>
                                    <span className="font-extrabold text-[28px] md:text-[32px] lg:text-[36px] text-[#0f172a] leading-[1.1] tracking-[-0.04em]">MINDS BEHIND</span>
                                    <span className="font-extrabold text-[28px] md:text-[32px] lg:text-[36px] text-[#0f172a] leading-[1.1] tracking-[-0.04em]">FINTRACK</span>
                                </div>

                                {/* Character Image */}
                                <div className="absolute bottom-0 -right-8 w-[280px] h-[360px] md:w-[320px] md:h-full z-10 flex justify-end items-end">
                                    <img
                                        src="/images/meet_the_minds.png"
                                        alt="Meet the minds behind FinTrack"
                                        className="w-full h-full object-cover object-bottom mix-blend-multiply opacity-100"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Card 3: Earning Overview Container (Combines real-time text and chart) */}
                    <div className="lg:col-span-6 flex flex-col gap-6">
                        <Card className="bg-[#fcfdff] border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] rounded-[24px] flex-1 p-8 flex flex-col justify-between">
                            <div className="w-full h-full border border-gray-100/60 rounded-xl bg-white shadow-sm p-6 pb-0 flex flex-col justify-between">
                                <div className="flex justify-between items-start w-full mb-6">
                                    <div className="flex items-center gap-2">
                                        <BrowserDots />
                                    </div>
                                    <div className="text-gray-400 font-bold tracking-widest text-lg leading-none cursor-pointer">...</div>
                                </div>
                                <span className="text-[15px] font-semibold text-gray-900 mb-4 block">Earning Overview</span>

                                <div className="mt-1 mb-8">
                                    <div className="text-[32px] md:text-[36px] font-bold text-gray-900 tracking-tight">$45,72638.89</div>
                                </div>

                                {/* Bar Chart Mockup */}
                                <div className="flex items-end gap-3 h-36 mt-auto w-full px-2">
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
                    </div>

                    {/* Card 4: Spending Overview Container */}
                    <div className="lg:col-span-6 flex flex-col gap-6">
                        <Card className="bg-[#fcfdff] border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] rounded-[24px] flex-1 p-8 flex flex-col justify-between">
                            <div className="w-full h-full border border-gray-100/60 rounded-xl bg-white shadow-sm p-6 flex flex-col justify-between">
                                <div className="flex justify-between items-start mb-6 w-full">
                                    <div className="flex flex-col gap-4">
                                        <BrowserDots />
                                        <span className="text-[15px] font-semibold text-gray-900 mt-2">Spending Overview</span>
                                    </div>
                                    <div className="text-[12px] text-gray-500 flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-gray-200 cursor-pointer shadow-sm mt-8">
                                        This Month <ChevronDown className="w-3.5 h-3.5" />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="text-[32px] md:text-[36px] font-bold text-gray-900 tracking-tight">$5,350.50</div>
                                </div>

                                <div className="mb-2 mt-auto">
                                    <span className="text-[12.5px] font-semibold text-gray-900 mb-3 block tracking-wide">Spending Breakdown</span>
                                    <div className="flex justify-between items-center text-[11px] font-medium mb-1.5 pr-4">
                                        <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#2563eb]"></span>House Rent</div>
                                        <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#60a5fa]"></span>Foods</div>
                                        <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#e3ecfb]"></span>Others</div>
                                    </div>
                                    <div className="flex justify-between items-center text-[12px] text-gray-400 mb-4 px-[18px]">
                                        <span>$2,000.00</span>
                                        <span className="ml-5">$1,500.00</span>
                                        <span>$800.00</span>
                                    </div>

                                    {/* Progress Bar Segmented */}
                                    <div className="flex h-6 w-full gap-0 mb-6">
                                        <div className="w-[50%] bg-[#2563eb] rounded-l-sm"></div>
                                        <div className="w-[30%] bg-[#60a5fa]"></div>
                                        <div className="w-[20%] bg-[#e3ecfb] rounded-r-sm"></div>
                                    </div>
                                </div>

                                <div className="text-[12px] text-gray-500 font-medium">
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
                    </div>
                </div>
            </div>
        </section>
    );
}
