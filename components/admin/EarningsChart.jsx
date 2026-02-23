"use client";

import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';
import { MoreHorizontal, ChevronDown } from 'lucide-react';

const data = [
    { name: 'Jan', v: 12000 },
    { name: 'Feb', v: 18000 },
    { name: 'Mar', v: 14000 },
    { name: 'Apr', v: 22000 },
    { name: 'May', v: 15000 },
    { name: 'Jun', v: 28000 },
    { name: 'Jul', v: 20000 },
    { name: 'Aug', v: 38000, active: true },
    { name: 'Sep', v: 24000 },
    { name: 'Oct', v: 26000 },
    { name: 'Nov', v: 22000 },
    { name: 'Dec', v: 30000 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#2a2a2a] border border-[#444] rounded-xl px-3 py-2 shadow-xl">
                <p className="text-[10px] text-gray-400 mb-0.5">Earnings</p>
                <p className="text-[14px] font-bold text-white">${payload[0].value.toLocaleString()}</p>
            </div>
        );
    }
    return null;
};

export default function EarningsChart() {
    return (
        <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-2xl p-5 flex flex-col h-full">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#252525] border border-[#333] flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                    </div>
                    <span className="text-[13px] font-semibold text-gray-200">Overview</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                        <span className="text-[11px] text-gray-400 font-medium">Earnings</span>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 bg-[#252525] border border-[#333] rounded-lg cursor-pointer hover:bg-[#333] transition-colors">
                        <span className="text-[11px] text-gray-300">This Year</span>
                        <ChevronDown className="w-3 h-3 text-gray-400" />
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-[#252525] border border-[#333] flex items-center justify-center cursor-pointer hover:bg-[#333] transition-colors">
                        <MoreHorizontal className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                </div>
            </div>

            <div className="flex-1 min-h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barSize={14} margin={{ top: 8, right: 4, left: -20, bottom: 0 }}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6b7280', fontSize: 10, fontWeight: 500 }}
                            dy={8}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                        <Bar dataKey="v" radius={[4, 4, 4, 4]}>
                            {data.map((d, i) => (
                                <Cell key={i} fill={d.active ? 'url(#blueGrad)' : '#252525'} />
                            ))}
                        </Bar>
                        <defs>
                            <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#60a5fa" />
                                <stop offset="100%" stopColor="#1d4ed8" />
                            </linearGradient>
                        </defs>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
