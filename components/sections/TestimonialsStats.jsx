import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function TestimonialsStats() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">

                {/* Trusted By Millions (Stats) Section */}
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">

                    {/* Left Column: Content & Stats */}
                    <div className="w-full lg:w-[55%] flex flex-col items-start pr-0 lg:pr-12">
                        <h2 className="text-[36px] md:text-[44px] font-semibold tracking-tight text-gray-900 mb-4 leading-[1.15] w-full">
                            Trusted by Millions,<br className="hidden md:block" /> Backed by Real Results
                        </h2>
                        <p className="text-gray-500 mb-10 text-[15px] leading-[1.6] max-w-[480px]">
                            Built on proven performance and measurable outcomes, delivering reliability, security, and confidence at scale.
                        </p>

                        <Button className="bg-[#0f172a] text-white hover:bg-[#1e293b] rounded-full px-7 py-5 text-[14px] font-medium mb-16 shadow-lg shadow-slate-200">
                            Get Started
                        </Button>

                        {/* Stats Container styled like the reference */}
                        <div className="bg-[#f8fafc] w-full rounded-[24px] p-8 border border-gray-50 shadow-sm">
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#e0efff] flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                                        <svg className="w-5 h-5 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-[22px] font-bold text-gray-900 mb-0.5">$120B+</h4>
                                        <p className="text-[13px] text-gray-500 leading-snug">Transactions processed securely every year</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#e0eaff] flex items-center justify-center text-sky-600 shrink-0 shadow-sm">
                                        <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-[22px] font-bold text-gray-900 mb-0.5">35%</h4>
                                        <p className="text-[13px] text-gray-500 leading-snug">Average savings increase for active users</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#e0efff] flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                                        <svg className="w-5 h-5 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-[22px] font-bold text-gray-900 mb-0.5">10M+</h4>
                                        <p className="text-[13px] text-gray-500 leading-snug">Users managing daily finances with FinTrack</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Realistic Image */}
                    <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end">
                        <div className="aspect-[4/5] md:aspect-[5/6] w-full max-w-[480px] rounded-[32px] overflow-hidden relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                                alt="Professionals reviewing results"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

                {/* Confidence in Every Transaction (Testimonials) */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Badge variant="outline" className="text-blue-600 bg-blue-50 border-blue-200 mb-6 hover:bg-blue-100 px-3 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 inline-block"></span>
                        Testimonials
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
                        Confidence in Every Transaction
                    </h2>
                    <p className="text-gray-500">
                        Users share how they manage finances with clarity and control.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">

                    <Card className="p-8 bg-white border border-gray-100 shadow-sm flex flex-col justify-between hidden md:flex">
                        <div>
                            <Quote className="w-10 h-10 text-blue-100 mb-6" />
                            <p className="text-xl md:text-2xl font-medium text-gray-900 leading-snug mb-8">
                                "Security and performance were our top priorities, and this platform delivers on both."
                            </p>
                        </div>
                        <div className="flex items-center gap-4 mt-auto">
                            <Avatar className="w-12 h-12 border border-gray-100">
                                <AvatarImage src="https://i.pravatar.cc/150?img=11" />
                                <AvatarFallback>MT</AvatarFallback>
                            </Avatar>
                            <div>
                                <h4 className="font-semibold text-gray-900">Michael Turner</h4>
                                <p className="text-sm text-gray-500">Investment Advisor</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-8 bg-white border border-gray-100 shadow-sm flex flex-col justify-between">
                        <div>
                            <Quote className="w-10 h-10 text-blue-100 mb-6" />
                            <p className="text-xl md:text-2xl font-medium text-gray-900 leading-snug mb-8">
                                "Finally, a financial solution that feels built for real users. Reliable, transparent, and easy to use."
                            </p>
                        </div>
                        <div className="flex items-center gap-4 mt-auto">
                            <Avatar className="w-12 h-12 border border-gray-100">
                                <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                                <AvatarFallback>SF</AvatarFallback>
                            </Avatar>
                            <div>
                                <h4 className="font-semibold text-gray-900">Sarah Foster</h4>
                                <p className="text-sm text-gray-500">Product Manager</p>
                            </div>
                        </div>
                    </Card>

                </div>

                {/* Carousel controls */}
                <div className="flex justify-center gap-4">
                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-[#00102a] flex items-center justify-center text-white hover:bg-[#001840] transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </section>
    );
}
