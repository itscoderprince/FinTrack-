import Link from 'next/link';
import {
    LayoutDashboard, PieChart, MessageSquare, CreditCard, FileText,
    Repeat, UserCircle, MessageCircle, Settings, HelpCircle, LogOut,
    Zap, ChevronLeft
} from 'lucide-react';

const menuSections = [
    {
        title: 'MAIN MENU',
        items: [
            { icon: LayoutDashboard, label: 'Dashboard', href: '/admin', active: true },
            { icon: PieChart, label: 'Analytics', href: '#' },
            { icon: MessageSquare, label: 'Message', href: '#', badge: '20' },
            { icon: CreditCard, label: 'Transactions', href: '#' },
            { icon: FileText, label: 'Invoices', href: '#' },
        ]
    },
    {
        title: 'FEATURES',
        items: [
            { icon: Repeat, label: 'Recurring', href: '#' },
            { icon: UserCircle, label: 'Subscriptions', href: '#' },
            { icon: MessageCircle, label: 'Feedback', href: '#' },
        ]
    },
    {
        title: 'GENERAL',
        items: [
            { icon: Settings, label: 'Settings', href: '#' },
            { icon: HelpCircle, label: 'Help Desk', href: '#' },
            { icon: LogOut, label: 'Log out', href: '#' },
        ]
    }
];

export default function Sidebar() {
    return (
        <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-[220px] bg-[#141414] flex-col z-20 border-r border-[#222]">
            {/* Logo */}
            <div className="flex items-center gap-2.5 px-5 pt-6 pb-5 mb-1">
                <div className="w-8 h-8 rounded-xl bg-[#3b82f6] flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-[17px] font-bold text-white tracking-wide">Findexa</span>
                <ChevronLeft className="w-4 h-4 text-gray-500 ml-auto cursor-pointer" />
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 overflow-y-auto space-y-6 pb-4">
                {menuSections.map((section, i) => (
                    <div key={i}>
                        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2 px-2">
                            {section.title}
                        </p>
                        <div className="space-y-0.5">
                            {section.items.map((item, j) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={j}
                                        href={item.href}
                                        className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all ${item.active
                                            ? 'bg-[#252525] text-white border border-[#333]'
                                            : 'text-gray-400 hover:text-gray-200 hover:bg-[#1e1e1e]'
                                            }`}
                                    >
                                        {item.active && (
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-[#3b82f6]" />
                                        )}
                                        <Icon className={`w-[16px] h-[16px] shrink-0 ${item.active ? 'text-white' : 'text-gray-400'}`} />
                                        <span className="flex-1">{item.label}</span>
                                        {item.badge && (
                                            <span className="text-[10px] bg-[#2a2a2a] border border-[#444] text-gray-300 px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Upgrade Card */}
            <div className="px-3 pb-5 mt-2">
                <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-4 text-center">
                    <p className="text-white text-[12px] font-bold mb-1">Upgrade Pro!</p>
                    <p className="text-gray-500 text-[11px] leading-relaxed mb-3">
                        Higher productivity with better organization
                    </p>
                    <button className="w-full bg-white text-[#111] font-semibold text-[12px] py-2 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        Upgrade
                    </button>
                </div>
            </div>
        </aside>
    );
}
