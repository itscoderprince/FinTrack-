"use client";

import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function DashboardShowcase() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px] flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mb-16 relative z-10"
                >
                    <Badge variant="outline" className="text-blue-600 bg-blue-50 border-blue-200 mb-6 hover:bg-blue-100 px-3 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 inline-block"></span>
                        Key Features
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6 flex flex-col sm:block">
                        <span>Modern Tools for</span> <span className="sm:hidden"></span><span>Modern Finance</span>
                    </h2>
                    <p className="text-gray-500 mb-8 max-w-2xl mx-auto px-4">
                        Manage all your finances in one secure place with real-time insights and smart tools.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center gap-1 border border-gray-100 p-1.5 rounded-full shadow-sm bg-white/60 mx-auto w-fit"
                    >
                        <Badge className="bg-[#00102a] text-white hover:bg-[#001840] px-4 py-2 rounded-full font-medium shadow-md">Dashboard</Badge>
                        <Badge variant="outline" className="text-gray-500 hover:text-gray-900 border-transparent hover:bg-gray-50 px-4 py-2 rounded-full font-medium">Wallets</Badge>
                        <Badge variant="outline" className="text-gray-500 hover:text-gray-900 border-transparent hover:bg-gray-50 px-4 py-2 rounded-full font-medium hidden sm:inline-flex">Analytics</Badge>
                        <Badge variant="outline" className="text-gray-500 hover:text-gray-900 border-transparent hover:bg-gray-50 px-4 py-2 rounded-full font-medium hidden sm:inline-flex">Invoices</Badge>
                        <Badge variant="outline" className="text-gray-500 hover:text-gray-900 border-transparent hover:bg-gray-50 px-4 py-2 rounded-full font-medium">Transactions</Badge>
                    </motion.div>
                </motion.div>

                {/* Dashboard Mockup Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                    className="w-full max-w-5xl mx-auto rounded-2xl bg-[#00102a] p-4 pb-0 pt-6 shadow-2xl relative z-10 overflow-hidden transform perspective-[1500px] hover:scale-[1.02] transition-transform duration-500"
                >

                    <div className="flex gap-2 px-4 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <div className="mx-auto text-[10px] sm:text-xs text-white/50 bg-white/10 px-10 sm:px-24 py-1 rounded-md overflow-hidden text-ellipsis whitespace-nowrap max-w-[50%] sm:max-w-none">fin-track.app</div>
                    </div>

                    {/* Inner APP mockup */}
                    <div className="bg-[#f8f9fa] w-full rounded-t-xl overflow-hidden shadow-inner border border-white/10 flex flex-col md:flex-row h-[500px]">

                        {/* Sidebar Mockup */}
                        <div className="w-16 sm:w-20 lg:w-48 bg-white border-r border-gray-100 flex-shrink-0 flex flex-col h-full py-6">
                            <div className="px-4 sm:px-6 mb-8 flex items-center justify-center lg:justify-start gap-2 text-[#00102a] font-bold">
                                <div className="w-6 h-6 rounded-full bg-blue-600 shrink-0"></div>
                                <span className="hidden lg:block">FinTrack</span>
                            </div>

                            <div className="flex-1 px-2 sm:px-4 space-y-2">
                                <div className="bg-blue-50 text-blue-600 rounded-lg p-2 flex items-center justify-center lg:justify-start gap-3">
                                    <div className="w-5 h-5 bg-blue-600 rounded shrink-0"></div>
                                    <div className="h-2 w-16 bg-blue-200 rounded hidden lg:block"></div>
                                </div>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="text-gray-400 hover:bg-gray-50 rounded-lg p-2 flex items-center justify-center lg:justify-start gap-3">
                                        <div className="w-5 h-5 bg-gray-200 rounded shrink-0"></div>
                                        <div className="h-2 w-16 bg-gray-200 rounded hidden lg:block"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Main Content Mockup */}
                        <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-[#f8f9fa] overflow-y-auto overflow-x-hidden md:overflow-hidden">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8">
                                <h3 className="text-lg sm:text-xl font-semibold">Welcome back, Saifour 👋</h3>
                                <div className="flex gap-2 sm:gap-4 hidden sm:flex">
                                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200"></div>
                                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200"></div>
                                </div>
                            </div>

                            {/* Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm col-span-1">
                                    <div className="h-2 w-12 bg-gray-100 rounded mb-4"></div>
                                    <div className="text-xl sm:text-2xl font-bold mb-2">$20,520</div>
                                    <div className="flex gap-1 h-8 sm:h-12 items-end mt-4">
                                        <div className="w-full bg-green-100 h-[30%] rounded-t-sm"></div>
                                        <div className="w-full bg-green-100 h-[50%] rounded-t-sm"></div>
                                        <div className="w-full bg-green-400 h-[80%] rounded-t-sm"></div>
                                        <div className="w-full bg-green-100 h-[40%] rounded-t-sm"></div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm col-span-1">
                                    <div className="h-2 w-16 bg-gray-100 rounded mb-4"></div>
                                    <div className="text-xl sm:text-2xl font-bold mb-2">$5,350</div>
                                    <div className="flex gap-1 h-8 sm:h-12 items-end mt-4">
                                        <div className="w-full bg-red-100 h-[40%] rounded-t-sm"></div>
                                        <div className="w-full bg-red-400 h-[90%] rounded-t-sm"></div>
                                        <div className="w-full bg-red-100 h-[20%] rounded-t-sm"></div>
                                        <div className="w-full bg-red-100 h-[50%] rounded-t-sm"></div>
                                    </div>
                                </div>
                                <div className="bg-blue-600 text-white p-4 sm:p-5 rounded-xl shadow-lg col-span-1 sm:col-span-2 relative overflow-hidden">
                                    <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                                    <div className="text-xs sm:text-sm text-blue-100 mb-2">Total Balance</div>
                                    <div className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-4 sm:mb-6">$347,323.44</div>
                                    <div className="text-[10px] sm:text-xs text-blue-200">**** **** **** 4532</div>
                                </div>
                            </div>

                            {/* Table / List mockup */}
                            <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 shadow-sm overflow-hidden">
                                <div className="h-4 w-24 sm:w-32 bg-gray-100 rounded mb-6"></div>
                                <div className="space-y-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-4">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-100"></div>
                                                <div>
                                                    <div className="h-2 sm:h-3 w-20 sm:w-24 bg-gray-200 rounded mb-1 sm:mb-2"></div>
                                                    <div className="h-1.5 sm:h-2 w-12 sm:w-16 bg-gray-100 rounded"></div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="h-2 sm:h-3 w-12 sm:w-16 bg-gray-800 rounded mb-1 sm:mb-2"></div>
                                                <div className="h-1.5 sm:h-2 w-8 sm:w-12 bg-gray-100 rounded ml-auto"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Decorative gradients for the showcase */}
                    <div className="absolute -left-10 top-1/2 w-20 h-20 bg-blue-500 rounded-full blur-2xl mix-blend-screen pointer-events-none"></div>
                    <div className="absolute -right-10 top-1/4 w-32 h-32 bg-indigo-500 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
                </motion.div>
            </div>
        </section>
    );
}
