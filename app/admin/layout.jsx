import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import Header from '@/components/admin/Header';

export const metadata = {
    title: 'Admin Dashboard | Findexa',
    description: 'Findexa Admin Dashboard',
};

export default function AdminLayout({ children }) {
    return (
        <SidebarProvider defaultOpen={true}>
            <div className="h-screen overflow-hidden bg-[#1a1a1a] flex w-full font-sans antialiased">
                {/* Shadcn Sidebar Component */}
                <AppSidebar />

                {/* Main Content */}
                <div className="flex flex-col flex-1 w-full h-screen overflow-hidden">
                    <div className="sticky top-0 z-20 flex items-center w-full bg-[#141414] border-b border-[#222]">
                        {/* Sidebar trigger for both mobile and desktop */}
                        <div className="px-4">
                            <SidebarTrigger className="text-white hover:bg-white/10" />
                        </div>
                        <div className="flex-1">
                            <Header />
                        </div>
                    </div>

                    <main className="flex-1 overflow-y-auto px-6 pb-8 bg-[#1a1a1a] custom-scrollbar">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}
