import { MoreVertical, Plus } from 'lucide-react';

const wallets = [
    { code: 'USD', flag: 'us', amount: '$22,678.00', active: true },
    { code: 'EUR', flag: 'eu', amount: '€18,345.00', active: true },
    { code: 'BDT', flag: 'bd', amount: '৳1,22,678.00', active: true },
    { code: 'GBP', flag: 'gb', amount: '£15,000.00', active: false },
];

export default function WalletWidget() {
    return (
        <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-2xl p-5 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
                <span className="text-[13px] font-semibold text-gray-200">My Wallet</span>
                <button className="flex items-center gap-1 text-[11px] font-medium text-gray-300 bg-[#252525] hover:bg-[#333] px-2.5 py-1.5 rounded-lg border border-[#333] transition-colors">
                    <Plus className="w-3 h-3" />
                    Add New
                </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5 flex-1">
                {wallets.map((w, i) => (
                    <div key={i} className="bg-[#222] border border-[#2a2a2a] hover:border-[#3a3a3a] rounded-xl p-3.5 cursor-pointer transition-colors group">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-1.5">
                                <div className="w-5 h-5 rounded-full overflow-hidden border border-[#333]">
                                    <img src={`https://flagcdn.com/w40/${w.flag}.png`} alt={w.code} className="w-full h-full object-cover" />
                                </div>
                                <span className="text-[12px] font-semibold text-gray-200">{w.code}</span>
                            </div>
                            <MoreVertical className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 transition-colors" />
                        </div>
                        <div className="text-[14px] font-bold text-white mb-2">{w.amount}</div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${w.active ? 'text-emerald-400 bg-emerald-400/10' : 'text-red-400 bg-red-400/10'}`}>
                            {w.active ? 'Active' : 'Inactive'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
