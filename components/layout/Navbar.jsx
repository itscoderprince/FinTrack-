import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
    return (
        <div className="absolute top-6 left-0 right-0 z-50 px-4 md:px-8 max-w-[1200px] mx-auto">
            <nav className="w-full rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between px-2 py-2">
                {/* Brand */}
                <div className="flex items-center gap-2 cursor-pointer text-white pl-4">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-white" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                    </div>
                    <span className="text-[15px] font-medium tracking-wide">FinTrack</span>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-6 text-[13px] text-white/70">
                    <Link href="#products" className="hover:text-white transition-colors">Products</Link>
                    <Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link>
                    <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
                    <Link href="#customers" className="hover:text-white transition-colors">Customers</Link>
                    <Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link>
                </div>

                {/* CTA */}
                <div className="flex items-center pr-1">
                    <Button variant="secondary" className="rounded-full bg-white text-gray-900 hover:bg-gray-100 border-0 h-[34px] px-5 text-[13px] font-medium">
                        Request Demo
                    </Button>
                </div>
            </nav>
        </div>
    );
}
