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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

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
                    <Card className="lg:col-span-7 bg-[#f8f9fa] border-gray-100 shadow-sm overflow-hidden p-6 pb-0 relative min-h-[350px]">
                        <div className="flex justify-between items-start mb-4">
                            {/* Browser Window mockup styling */}
                            <div className="w-full h-full absolute inset-0 pt-16 pb-4 px-6">
                                {/* Internal window */}
                                <div className="w-full bg-[#f8fafc] rounded-t-xl border border-gray-200 shadow-lg h-full p-4 pb-6 flex gap-4">
                                    {/* Left Column */}
                                    <div className="flex flex-col gap-4 w-[45%]">
                                        {/* Chat Skeleton */}
                                        <div className="bg-[#f3f9fe] border border-blue-50/50 rounded-[20px] p-4 flex flex-col justify-center gap-2 shadow-sm">
                                            {/* Left Chat (Kabir) */}
                                            <div className="flex gap-2 items-end">
                                                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm p-3 shadow-sm w-full relative pb-4">
                                                    <div className="h-1.5 w-full bg-gray-200 rounded-full mb-2"></div>
                                                    <div className="h-1.5 w-[60%] bg-gray-200 rounded-full"></div>

                                                    {/* Name Tag overlapping border */}
                                                    <div className="absolute -bottom-3 left-2 bg-[#00897b] text-white text-[9px] font-bold px-3 py-0.5 rounded-full shadow-md flex items-center justify-center border-2 border-white">
                                                        Kabir
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Chat (Sajibur) */}
                                            <div className="flex gap-2 items-end justify-end mt-2">
                                                <div className="bg-white border border-blue-100 rounded-2xl rounded-br-sm p-3 shadow-sm w-[85%] relative pb-3">
                                                    <div className="h-1.5 w-full bg-blue-500 rounded-full"></div>

                                                    {/* Name Tag overlapping border */}
                                                    <div className="absolute -bottom-3 right-2 bg-[#3b82f6] text-white text-[9px] font-bold px-3 py-0.5 rounded-full shadow-md flex items-center justify-center border-2 border-white">
                                                        Sajibur
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Analytics */}
                                        <div className="bg-white border border-gray-100 rounded-[20px] p-5 shadow-sm flex-1 flex flex-col justify-center">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-[12px] font-medium text-gray-800">Analytics</span>
                                                <div className="text-[10px] text-gray-500 flex items-center gap-1">All time <ChevronDown className="w-3 h-3" /></div>
                                            </div>
                                            <div className="relative w-20 h-20 mx-auto mt-2">
                                                <svg viewBox="0 0 36 36" className="w-full h-full text-blue-100 stroke-current">
                                                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3.5" />
                                                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" strokeWidth="3.5" className="stroke-blue-600" strokeDasharray="74, 100" />
                                                </svg>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    <span className="text-xl font-bold text-gray-900 leading-none">74%</span>
                                                    <span className="text-[8px] text-gray-500 mt-1">Actually Records</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Meet the minds */}
                                    <div className="flex-1 relative bg-[#c8e2fb] rounded-[20px] overflow-hidden flex flex-col p-6 justify-between">
                                        <div className="flex items-center gap-2 mb-8 bg-[#eef5fd] w-fit px-3 py-1.5 rounded-[12px] shadow-sm">
                                            <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-inner">
                                                <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-white" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                            </div>
                                            <span className="text-[14px] font-bold text-gray-900 tracking-tight">FinTrack</span>
                                        </div>
                                        <span className="font-extrabold text-[32px] md:text-[36px] text-[#111827] leading-[1.1] tracking-tight relative z-10 w-[70%] mb-12">MEET THE<br />MINDS BEHIND<br />FINTRACK</span>

                                        {/* Realistic character image instead of abstract shapes */}
                                        <div className="absolute -bottom-0 -right-4 w-[240px] h-[300px] z-0 drop-shadow-2xl">
                                            <img
                                                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=400"
                                                alt="Meet the minds behind FinTrack"
                                                className="w-full h-full object-cover object-top opacity-100 mix-blend-multiply rounded-tl-[40px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-4 left-6 flex flex-col items-start gap-1">
                            <div className="mb-0.5">
                                <BrowserDots />
                            </div>
                            <span className="text-[11px] font-medium text-gray-600 whitespace-nowrap">
                                Products Team • Redesign Discussion <span className="text-gray-400 ml-1 font-normal">26 Dec 2024 • 2:30PM</span>
                            </span>
                        </div>
                        <div className="absolute top-4 right-6 flex gap-2">
                            <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-blue-600">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-[#00102a] flex items-center justify-center text-white">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
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
