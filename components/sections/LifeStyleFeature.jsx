import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LifeStyleFeature() {
    return (
        <section className="py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: Image mockup equivalent */}
                    <div className="flex-1 w-full max-w-lg relative">
                        <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden relative shadow-lg">
                            {/* Fallback pattern for lifestyle image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-gray-50 flex items-center justify-center">
                                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center mix-blend-multiply opacity-90"></div>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute top-8 -left-8 w-24 h-24 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-sky-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 w-full max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
                            Smarter Finance, Built for Everyday Life
                        </h2>
                        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                            Take full control of your finances with real-time insights, smart automation, and secure tools designed to help you spend wisely.
                        </p>

                        <Button className="bg-[#00102a] text-white hover:bg-[#001840] rounded-full px-8 py-6 text-base font-medium mb-12">
                            Get Started
                        </Button>

                        <div className="grid grid-cols-2 gap-8">
                            <Card className="p-6 bg-white border-0 shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-2xl">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">Track Income</h4>
                                <p className="text-sm text-gray-500">Easily track all your income and earnings in one clear view.</p>
                            </Card>

                            <Card className="p-6 bg-white border-0 shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-2xl">
                                <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">Smart Budgeting</h4>
                                <p className="text-sm text-gray-500">Take full control of your finances with real-time insights.</p>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
