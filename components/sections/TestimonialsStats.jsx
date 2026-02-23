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

                    <div className="flex-1 w-full max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
                            Trusted by Millions, Backed by Real Results
                        </h2>
                        <p className="text-gray-500 mb-8 text-lg">
                            Built on proven performance and measurable outcomes, delivering reliability, security, and confidence at scale.
                        </p>
                        <Button className="bg-[#00102a] text-white hover:bg-[#001840] rounded-full px-8 py-6 mb-12">
                            Get Started
                        </Button>

                        {/* Stats */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900">$120B+</h4>
                                    <p className="text-sm text-gray-500">Transactions processed securely every year</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900">35%</h4>
                                    <p className="text-sm text-gray-500">Average savings increase for active users</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900">10M+</h4>
                                    <p className="text-sm text-gray-500">Users managing daily finances with FinTrack</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full relative">
                        <div className="aspect-square max-h-[500px] w-full bg-gray-200 rounded-3xl overflow-hidden relative shadow-2xl">
                            {/* Fallback image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center"></div>
                        </div>
                        {/* Overlay card */}
                        <Card className="absolute -bottom-8 -left-8 bg-white p-4 shadow-xl border-0 animate-bounce" style={{ animationDuration: '4s' }}>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Data Synchronized</p>
                                    <p className="text-xs text-gray-500">Updated just now</p>
                                </div>
                            </div>
                        </Card>
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
