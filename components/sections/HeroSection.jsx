import { Button } from '@/components/ui/button';
import { ArrowUpRight, Star, ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen pb-6 pt-32 lg:pt-36 overflow-hidden bg-[#030712] flex flex-col justify-between">
            {/* Background gradients representing the light blue flares */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Large sweeping cyan/blue intersection */}
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[80%] rounded-[100%] bg-[#3b82f6]/30 blur-[120px] mix-blend-screen" />
                <div className="absolute top-[10%] left-[25%] w-[50%] h-[120%] rounded-[100%] bg-[#60a5fa]/20 blur-[130px] rotate-[-45deg] origin-center mix-blend-screen" />
                <div className="absolute top-[30%] left-[40%] w-[30%] h-[80%] rounded-[100%] bg-[#93c5fd]/15 blur-[100px] rotate-[30deg] mix-blend-screen" />
                {/* Dark overlay to deepen contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712] pointer-events-none z-0" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 max-w-[1200px] relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 mt-2 mb-16 flex-1">

                {/* Left Content */}
                <div className="flex-1 max-w-xl text-white">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/5 px-3 py-1.5 text-xs text-blue-200 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        Perfect finance management AI Tool
                    </div>

                    <h1 className="text-5xl lg:text-6xl xl:text-[64px] font-bold tracking-tight mb-5 leading-[1.05] text-white">
                        Take Control of <br />
                        Your Money with <br />
                        Smart Tools
                    </h1>

                    <p className="text-base md:text-[17px] text-gray-300 mb-8 max-w-lg leading-relaxed font-light">
                        Track spending, plan budgets, and manage your money effortlessly with intelligent financial tools built for everyday use.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Button className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 px-7 py-6 rounded-full font-medium text-[15px]">
                            Start Free trial
                        </Button>
                    </div>
                </div>

                {/* Right Content - Expense Management Card Mockup */}
                <div className="flex-1 w-full max-w-[500px] relative mt-10 lg:mt-0 perspective-[2000px]">
                    <div className="relative transform rotate-y-[-10deg] rotate-x-[5deg] scale-100 xl:scale-105 z-20 transition-transform hover:scale-110 duration-700">
                        {/* The main floating card exactly as inside the image */}
                        <div className="bg-[#1f4b8e]/90 backdrop-blur-xl rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-blue-400/20 overflow-hidden text-white flex flex-col pt-5">

                            <div className="px-6 flex items-center justify-between mb-5">
                                <span className="font-medium text-[15px] opacity-90 tracking-wide">Expense Management</span>
                                <ArrowUpRight className="w-4 h-4 opacity-70" />
                            </div>

                            <div className="px-5 pb-5 contents-wrap">
                                <div className="bg-white rounded-[16px] p-1.5 mb-3 flex items-center shadow-lg">
                                    <div className="flex items-center gap-3 w-full bg-white px-3 py-2.5 rounded-[12px]">
                                        <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
                                            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                        </div>
                                        <span className="font-semibold text-gray-900 text-[15px]">Smart credit account</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-[20px] p-6 shadow-xl relative overflow-hidden text-center z-10 bottom-card">
                                    <span className="text-[12px] text-gray-500 font-medium">Total Expenses</span>
                                    <div className="text-[40px] font-bold text-gray-900 mt-1 mb-6 tracking-tight">$24,383.89</div>

                                    {/* Progress section inline */}
                                    <div className="flex justify-between w-full mx-auto px-4 mb-3">
                                        <div className="text-left">
                                            <div className="flex items-center gap-1.5 mb-1 text-[11px] text-gray-900 font-medium tracking-wide">
                                                <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                                                House Rent
                                            </div>
                                            <div className="text-[11px] text-gray-400 pl-3.5">$2,000.00</div>
                                        </div>
                                        <div className="text-left pl-2">
                                            <div className="flex items-center gap-1.5 mb-1 text-[11px] text-gray-900 font-medium tracking-wide">
                                                <div className="w-2 h-2 rounded-full bg-[#93c5fd]"></div>
                                                Foods
                                            </div>
                                            <div className="text-[11px] text-gray-400 pl-3.5">$1,500.00</div>
                                        </div>
                                        <div className="text-left">
                                            <div className="flex items-center gap-1.5 mb-1 text-[11px] text-gray-900 font-medium tracking-wide">
                                                <div className="w-2 h-2 rounded-full bg-[#e2e8f0]"></div>
                                                Others
                                            </div>
                                            <div className="text-[11px] text-gray-400 pl-3.5">$800.00</div>
                                        </div>
                                    </div>

                                    {/* Progress Bars */}
                                    <div className="flex w-full px-2 gap-1 h-[22px] mx-auto opacity-90 pb-1">
                                        <div className="w-[50%] bg-gradient-to-r from-blue-600 to-blue-400 rounded-md"></div>
                                        <div className="w-[30%] bg-blue-200 rounded-md"></div>
                                        <div className="w-[20%] bg-gray-200 rounded-md"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Faint blue glow behind card */}
                        <div className="absolute -z-10 -right-10 -bottom-10 w-full h-full bg-blue-600/20 rounded-2xl blur-[80px]"></div>
                    </div>
                </div>
            </div>

            {/* Footer / Bottom strip of hero */}
            <div className="container mx-auto px-6 lg:px-12 max-w-[1200px] relative z-20 mt-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 bg-[#030712]">
                <div className="flex items-center gap-3 text-[11px] font-medium tracking-widest uppercase cursor-pointer hover:text-white transition-colors">
                    SCROLL
                    <div className="w-[18px] h-[28px] border-2 border-white/40 rounded-full flex justify-center pt-1">
                        <div className="w-1 h-1.5 bg-white/70 rounded-full animate-bounce"></div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex text-[#f59e0b] items-center">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1.5 text-[13px] font-semibold text-white">4.9</span>
                    </div>
                    <div className="flex items-center gap-3 border-l border-white/20 pl-4">
                        <div className="flex -space-x-2.5">
                            <Avatar className="w-7 h-7 border-[2.5px] border-[#030712]">
                                <AvatarImage src="https://i.pravatar.cc/100?img=33" />
                                <AvatarFallback>U1</AvatarFallback>
                            </Avatar>
                            <Avatar className="w-7 h-7 border-[2.5px] border-[#030712]">
                                <AvatarImage src="https://i.pravatar.cc/100?img=12" />
                                <AvatarFallback>U2</AvatarFallback>
                            </Avatar>
                            <Avatar className="w-7 h-7 border-[2.5px] border-[#030712]">
                                <AvatarImage src="https://i.pravatar.cc/100?img=64" />
                                <AvatarFallback>U3</AvatarFallback>
                            </Avatar>
                        </div>
                        <span className="text-[13px] font-medium text-white/80">10k+ Active users</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
