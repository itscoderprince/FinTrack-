import { Calendar, Download } from 'lucide-react';

export default function WelcomeBanner() {
    return (
        <div className="flex items-start justify-between mb-6 mt-2">
            <div>
                <h1 className="text-[22px] font-bold text-white flex items-center gap-2">
                    Welcome back Sajibur Rahman
                    <span>👋</span>
                </h1>
                <p className="text-[12px] text-gray-400 mt-0.5">
                    Monitor and control what happens with your money today for financial health.
                </p>
            </div>
            <div className="flex items-center gap-2 shrink-0 ml-4">
                <div className="flex items-center gap-2 px-3 py-1.5 border border-[#2a2a2a] rounded-lg text-[12px] text-gray-300 bg-[#1e1e1e]">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    Sun, 12 June 2026
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-lg text-[12px] font-medium transition-colors">
                    <Download className="w-3.5 h-3.5" />
                    Export
                </button>
            </div>
        </div>
    );
}
