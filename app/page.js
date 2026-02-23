import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import LogoTicker from '@/components/sections/LogoTicker';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import DashboardShowcase from '@/components/sections/DashboardShowcase';
import LifeStyleFeature from '@/components/sections/LifeStyleFeature';
import TestimonialsStats from '@/components/sections/TestimonialsStats';

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <LogoTicker />
        <FeaturesGrid />
        <DashboardShowcase />
        <LifeStyleFeature />
        <TestimonialsStats />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200 text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4 text-[#00102a]">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            <span className="text-xl font-bold">FinTrack</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FinTrack Inc. All rights reserved. <br /> Highly crafted by AI.
          </p>
        </div>
      </footer>
    </div>
  );
}
