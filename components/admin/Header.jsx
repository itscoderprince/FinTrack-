import { Search, HelpCircle, Mail, Bell, ChevronDown } from 'lucide-react';

export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-3 bg-[#141414] border-b border-[#222] sticky top-0 z-10 h-[60px]">
            {/* Search */}
            <div className="relative w-[240px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-[#1e1e1e] border border-[#2a2a2a] text-[13px] text-gray-400 placeholder-gray-600 rounded-full pl-9 pr-14 py-2 focus:outline-none focus:border-[#444] transition-colors"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
                    <kbd className="px-1 text-[9px] font-medium border border-[#444] rounded text-gray-500 bg-transparent">⌘</kbd>
                    <kbd className="px-1 text-[9px] font-medium border border-[#444] rounded text-gray-500 bg-transparent">K</kbd>
                </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#2a2a2a] text-gray-400 hover:text-white hover:bg-[#222] transition-colors">
                    <HelpCircle className="w-3.5 h-3.5" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#2a2a2a] text-gray-400 hover:text-white hover:bg-[#222] transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                </button>
                <button className="relative w-8 h-8 flex items-center justify-center rounded-full border border-[#2a2a2a] text-gray-400 hover:text-white hover:bg-[#222] transition-colors">
                    <Bell className="w-3.5 h-3.5" />
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full"></span>
                </button>
                <div className="flex items-center gap-1.5 pl-1 pr-2 py-1 border border-[#2a2a2a] rounded-full hover:bg-[#1e1e1e] cursor-pointer transition-colors ml-1">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
                        <img src="https://i.pravatar.cc/150?u=sajibur" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                </div>
            </div>
        </header>
    );
}
