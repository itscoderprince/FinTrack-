import { MoreHorizontal } from 'lucide-react';

const goals = [
    { icon: '🎯', label: 'Investment Goal', current: 15600, total: 25000, pct: 62, color: 'bg-[#3b82f6]' },
    { icon: '🛡️', label: 'Emergency Fund', current: 8200, total: 10000, pct: 82, color: 'bg-emerald-500' },
];

export default function SavingsPlan() {
    return (
        <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-2xl p-5 flex flex-col h-full">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#252525] border border-[#333] flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                    </div>
                    <span className="text-[13px] font-semibold text-gray-200">My Savings Plan</span>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#252525] border border-[#333] flex items-center justify-center cursor-pointer hover:bg-[#333] transition-colors">
                    <MoreHorizontal className="w-3.5 h-3.5 text-gray-400" />
                </div>
            </div>

            <div className="flex flex-col gap-5">
                {goals.map((g, i) => (
                    <div key={i} className="flex flex-col">
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-8 h-8 rounded-xl bg-[#252525] border border-[#2a2a2a] flex items-center justify-center text-base">
                                {g.icon}
                            </div>
                            <span className="text-[13px] font-semibold text-gray-200">{g.label}</span>
                        </div>
                        <div className="flex justify-between text-[11px] mb-1.5">
                            <span className="text-gray-300 font-medium">
                                ${g.current.toLocaleString()}
                                <span className="text-gray-500">/${g.total.toLocaleString()}</span>
                            </span>
                            <span className="text-white font-bold">{g.pct}%</span>
                        </div>
                        <div className="w-full h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                            <div className={`h-full ${g.color} rounded-full`} style={{ width: `${g.pct}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
