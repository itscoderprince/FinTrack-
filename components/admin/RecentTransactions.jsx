import { MoreHorizontal, SlidersHorizontal } from 'lucide-react';

const transactions = [
    { icon: '📱', iconBg: 'bg-blue-500', name: 'Mobile App Purchase', date: 'Wed, 12 Jun 2026', price: '$806.50' },
    { icon: 'A', iconBg: 'bg-red-500', name: 'Software License', date: 'Tue, 11 Jun 2026', price: '$102.99' },
    { icon: '🛒', iconBg: 'bg-amber-500', name: 'Grocery Purchase', date: 'Sun, 09 Jun 2026', price: '$2,500.00' },
];

export default function RecentTransactions() {
    return (
        <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-2xl p-5 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#252525] border border-[#333] flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>
                    </div>
                    <span className="text-[13px] font-semibold text-gray-200">Recent Transaction</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#252525] border border-[#333] rounded-lg cursor-pointer hover:bg-[#333] transition-colors">
                    <span className="text-[11px] text-gray-300">Filter</span>
                    <SlidersHorizontal className="w-3 h-3 text-gray-400" />
                </div>
            </div>

            <table className="w-full">
                <thead>
                    <tr className="border-b border-[#252525]">
                        <th className="pb-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Activity</th>
                        <th className="pb-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="pb-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="pb-2.5 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="pb-2.5 w-6"></th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tx, i) => (
                        <tr key={i} className="border-b border-[#1e1e1e] last:border-0 hover:bg-[#202020] transition-colors">
                            <td className="py-3 pr-2">
                                <div className="flex items-center gap-2.5">
                                    <div className={`w-7 h-7 rounded-full ${tx.iconBg} flex items-center justify-center text-white text-[11px] font-bold shrink-0`}>
                                        {tx.icon}
                                    </div>
                                    <span className="text-[12px] font-medium text-gray-200 truncate max-w-[120px]">{tx.name}</span>
                                </div>
                            </td>
                            <td className="py-3 pr-2 text-[11px] text-gray-400 whitespace-nowrap">{tx.date}</td>
                            <td className="py-3 pr-2 text-[12px] font-semibold text-gray-200">{tx.price}</td>
                            <td className="py-3 pr-2">
                                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 w-fit">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    <span className="text-[10px] font-semibold text-emerald-400">Success</span>
                                </div>
                            </td>
                            <td className="py-3">
                                <button className="w-6 h-6 rounded-md hover:bg-[#2a2a2a] flex items-center justify-center transition-colors">
                                    <MoreHorizontal className="w-3.5 h-3.5 text-gray-500" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
