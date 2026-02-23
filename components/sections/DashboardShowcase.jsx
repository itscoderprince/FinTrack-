import { Badge } from '@/components/ui/badge';

export default function DashboardShowcase() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="container mx-auto px-6 lg:px-8 max-w-[1200px] flex flex-col items-center">

                <div className="text-center mb-16 relative z-10">
                    <Badge variant="outline" className="text-blue-600 bg-blue-50 border-blue-200 mb-6 hover:bg-blue-100 px-3 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 inline-block"></span>
                        Key Features
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
                        Modern Tools for Modern Finance
                    </h2>
                    <p className="text-gray-500 mb-8">
                        Manage all your finances in one secure place with real-time insights and smart tools.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2">
                        <Badge className="bg-[#00102a] text-white hover:bg-[#001840] px-4 py-2 rounded-full font-medium">Dashboard</Badge>
                        <Badge variant="outline" className="text-gray-500 hover:text-gray-900 border-transparent hover:bg-gray-50 px-4 py-2 rounded-full font-medium">Wallets</Badge>
                        <Badge variant="outline" className="text-gray-500 hover:text-gray-900 border-transparent hover:bg-gray-50 px-4 py-2 rounded-full font-medium">Analytics</Badge>
                        <Badge variant="outline" className="text-gray-500 hover:text-gray-900 border-transparent hover:bg-gray-50 px-4 py-2 rounded-full font-medium">Invoices</Badge>
                        <Badge variant="outline" className="text-gray-500 hover:text-gray-900 border-transparent hover:bg-gray-50 px-4 py-2 rounded-full font-medium">Transactions</Badge>
                    </div>
                </div>

                {/* Dashboard Mockup Container */}
                <div className="w-full max-w-5xl mx-auto rounded-2xl bg-[#00102a] p-4 pb-0 pt-6 shadow-2xl relative z-10 overflow-hidden transform perspective-[1500px] hover:scale-[1.02] transition-transform duration-500">

                    <div className="flex gap-2 px-4 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <div className="mx-auto text-xs text-white/50 bg-white/10 px-24 py-1 rounded-md">fin-track.app</div>
                    </div>

                    {/* Inner APP mockup */}
                    <div className="bg-[#f8f9fa] w-full rounded-t-xl overflow-hidden shadow-inner border border-white/10 flex flex-col md:flex-row h-[500px]">

                        {/* Sidebar Mockup */}
                        <div className="w-20 lg:w-48 bg-white border-r border-gray-100 flex-shrink-0 flex flex-col h-full py-6">
                            <div className="px-6 mb-8 flex items-center gap-2 text-[#00102a] font-bold">
                                <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                                <span className="hidden lg:block">FinTrack</span>
                            </div>

                            <div className="flex-1 px-4 space-y-2">
                                <div className="bg-blue-50 text-blue-600 rounded-lg p-2 flex items-center gap-3">
                                    <div className="w-5 h-5 bg-blue-600 rounded"></div>
                                    <div className="h-2 w-16 bg-blue-200 rounded hidden lg:block"></div>
                                </div>
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="text-gray-400 hover:bg-gray-50 rounded-lg p-2 flex items-center gap-3">
                                        <div className="w-5 h-5 bg-gray-200 rounded"></div>
                                        <div className="h-2 w-16 bg-gray-200 rounded hidden lg:block"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Main Content Mockup */}
                        <div className="flex-1 p-8 bg-[#f8f9fa] overflow-hidden">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-xl font-semibold">Welcome back, Saifour 👋</h3>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200"></div>
                                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200"></div>
                                </div>
                            </div>

                            {/* Cards */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="h-2 w-12 bg-gray-100 rounded mb-4"></div>
                                    <div className="text-2xl font-bold mb-2">$20,520.32</div>
                                    <div className="flex gap-1 h-12 items-end mt-4">
                                        <div className="w-full bg-green-100 h-[30%] rounded-t-sm"></div>
                                        <div className="w-full bg-green-100 h-[50%] rounded-t-sm"></div>
                                        <div className="w-full bg-green-400 h-[80%] rounded-t-sm"></div>
                                        <div className="w-full bg-green-100 h-[40%] rounded-t-sm"></div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="h-2 w-16 bg-gray-100 rounded mb-4"></div>
                                    <div className="text-2xl font-bold mb-2">$5,350.50</div>
                                    <div className="flex gap-1 h-12 items-end mt-4">
                                        <div className="w-full bg-red-100 h-[40%] rounded-t-sm"></div>
                                        <div className="w-full bg-red-400 h-[90%] rounded-t-sm"></div>
                                        <div className="w-full bg-red-100 h-[20%] rounded-t-sm"></div>
                                        <div className="w-full bg-red-100 h-[50%] rounded-t-sm"></div>
                                    </div>
                                </div>
                                <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg col-span-2 relative overflow-hidden">
                                    <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                                    <div className="text-sm text-blue-100 mb-2">Total Balance</div>
                                    <div className="text-3xl font-bold mb-6">$347,323.44</div>
                                    <div className="text-xs text-blue-200">**** **** **** 4532</div>
                                </div>
                            </div>

                            {/* Table / List mockup */}
                            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                                <div className="h-4 w-32 bg-gray-100 rounded mb-6"></div>
                                <div className="space-y-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-gray-100"></div>
                                                <div>
                                                    <div className="h-3 w-24 bg-gray-200 rounded mb-2"></div>
                                                    <div className="h-2 w-16 bg-gray-100 rounded"></div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="h-3 w-16 bg-gray-800 rounded mb-2"></div>
                                                <div className="h-2 w-12 bg-gray-100 rounded ml-auto"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Decorative gradients for the showcase */}
                    <div className="absolute -left-10 top-1/2 w-20 h-20 bg-blue-500 rounded-full blur-2xl mix-blend-screen"></div>
                    <div className="absolute -right-10 top-1/4 w-32 h-32 bg-indigo-500 rounded-full blur-3xl mix-blend-screen"></div>
                </div>
            </div>
        </section>
    );
}
