import { Send, ArrowDownToLine, MoreHorizontal, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function AccountBalance() {
    return (
        <div className="p-5 flex flex-col border-b border-[#2a2a2a]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#252525] border border-[#333] flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                            <line x1="1" y1="10" x2="23" y2="10" />
                        </svg>
                    </div>
                    <span className="text-[13px] font-semibold text-gray-200">Account Balance</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#252525] border border-[#333] rounded-lg cursor-pointer hover:bg-[#333] transition-colors">
                    <img src="https://flagcdn.com/w20/us.png" alt="USD" className="w-4 h-3 object-cover rounded-sm" />
                    <span className="text-[12px] font-semibold text-gray-200">USD</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                </div>
            </div>

            {/* Amount */}
            <div className="mb-1">
                <h2 className="text-[32px] font-bold text-white tracking-tight leading-none">$35,340.89</h2>
            </div>
            <div className="flex items-center gap-2 text-[11px] mb-5">
                <span className="text-emerald-400 font-semibold flex items-center gap-0.5">
                    +3.2% <ArrowUpRight className="w-3 h-3" />
                </span>
                <span className="text-gray-500">from last month</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-auto">
                <button className="flex-1 bg-[#3b82f6] hover:bg-blue-600 text-white py-2.5 rounded-xl flex justify-center items-center gap-1.5 text-[12px] font-semibold transition-colors">
                    <Send className="w-3.5 h-3.5" />
                    Send Money
                </button>
                <button className="flex-1 bg-white text-[#111] hover:bg-gray-100 py-2.5 rounded-xl flex justify-center items-center gap-1.5 text-[12px] font-semibold transition-colors">
                    <ArrowDownToLine className="w-3.5 h-3.5" />
                    Request Money
                </button>
            </div>
        </div>
    );
}

export function StatCard({ title, amount, percentage, isPositive, icon: Icon }) {
    return (
        <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-2xl p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#252525] border border-[#333] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-[13px] font-semibold text-gray-200">{title}</span>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#252525] border border-[#333] flex items-center justify-center cursor-pointer hover:bg-[#333] transition-colors">
                    <MoreHorizontal className="w-3.5 h-3.5 text-gray-400" />
                </div>
            </div>
            <h3 className="text-[26px] font-bold text-white tracking-tight mt-1 mb-1">{amount}</h3>
            <div className="flex items-center gap-2 text-[11px] mt-1">
                <span className={`font-semibold flex items-center gap-0.5 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                    {percentage}% {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                </span>
                <span className="text-gray-500">from last month</span>
            </div>
        </div>
    );
}
