"use client";

import { motion } from "framer-motion";
import { Star } from 'lucide-react';

const logos = [
    { name: 'Square', icon: '◻️' },
    { name: 'GitHub', icon: '🐈' },
    { name: 'pendo', icon: '💧' },
    { name: 'Adobe', icon: 'A' },
    { name: 'Trello', icon: '📊' },
];

export default function LogoTicker() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="py-16 bg-white border-b border-gray-100"
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px] text-center">
                <p className="text-[13.5px] font-medium text-gray-500 mb-8 tracking-wide max-w-[280px] sm:max-w-md md:max-w-full mx-auto leading-relaxed">
                    Empowering Team Worldwide - <span className="text-gray-800 font-bold block sm:inline">Over 20+ Million Users</span> Trust Taskko For Peak Productivity
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* We'll just use styled text to resemble the logos perfectly since we don't have SVGs */}

                    <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
                        <div className="w-5 h-5 border-4 border-gray-800 rounded-sm"></div>
                        Square
                    </div>

                    <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        GitHub
                    </div>

                    <div className="flex items-center gap-1.5 font-bold text-xl text-gray-800">
                        <span className="text-pink-500 text-2xl">☁</span> pendo
                    </div>

                    <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
                        <div className="w-6 h-6 bg-red-600 text-white flex justify-center items-center text-xs font-black">A</div>
                        Adobe
                    </div>

                    <div className="flex items-center gap-2 font-bold text-xl text-gray-800">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-blue-600"><path d="M20.536 24h-17.072c-1.913 0-3.464-1.551-3.464-3.464v-17.072c0-1.913 1.551-3.464 3.464-3.464h17.072c1.913 0 3.464 1.551 3.464 3.464v17.072c0 1.913-1.551 3.464-3.464 3.464zm-12.536-19h-3c-.552 0-1 .448-1 1v12c0 .552.448 1 1 1h3c.552 0 1-.448 1-1v-12c0-.552-.448-1-1-1zm6 0h-3c-.552 0-1 .448-1 1v7c0 .552.448 1 1 1h3c.552 0 1-.448 1-1v-7c0-.552-.448-1-1-1z" /></svg>
                        Trello
                    </div>

                </div>
            </div>
        </motion.section>
    );
}
