"use client"

import * as React from "react"
import {
  LayoutDashboard,
  PieChart,
  MessageSquare,
  CreditCard,
  FileText,
  Repeat,
  UserCircle,
  MessageCircle,
  Zap
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Sajibur Rahman",
    email: "sajibur@findexa.com",
    avatar: "/avatars/user.jpg",
  },
  teams: [
    {
      name: "Findexa",
      logo: Zap,
      plan: "Pro",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Analytics",
      url: "#",
      icon: PieChart,
    },
    {
      title: "Message",
      url: "#",
      icon: MessageSquare,
    },
    {
      title: "Transactions",
      url: "#",
      icon: CreditCard,
    },
    {
      title: "Invoices",
      url: "#",
      icon: FileText,
    },
  ],
  projects: [
    {
      name: "Recurring",
      url: "#",
      icon: Repeat,
    },
    {
      name: "Subscriptions",
      url: "#",
      icon: UserCircle,
    },
    {
      name: "Feedback",
      url: "#",
      icon: MessageCircle,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-[#222] bg-[#141414]" {...props}>
      {/* 
        Hide default browser scrollbars dynamically within the Shadcn sidebar 
        content area to maintain a sleek, premium dark-themed look.
      */}
      <style jsx global>{`
        [data-sidebar="content"]::-webkit-scrollbar {
          display: none;
        }
        [data-sidebar="content"] {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <SidebarHeader className="bg-[#141414] border-b border-[#222] p-0">
        {/* 
          Logo Area:
          Fixed h-[68px] to strictly align the transparent bottom border 
          perfectly with the adjoining Topbar component.
          group-data-[state=expanded]:px-4 is removed strictly in collapsed mode
          to ensure perfect 32x32px (size-8) centering within the 48px rail.
        */}
        <div className="flex items-center gap-3 h-[60px] justify-center group-data-[state=expanded]:px-4">
          <div className="w-8 h-8 rounded-lg bg-[#3b82f6] flex items-center justify-center shrink-0">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="text-[19px] font-bold text-white tracking-tight truncate group-data-[state=collapsed]:hidden">Findexa</span>
          <button onClick={toggleSidebar} className="ml-auto text-gray-500 hover:text-white transition-colors group-data-[state=collapsed]:hidden focus:outline-none">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
          </button>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-[#141414] gap-0 overflow-y-auto pb-4 group-data-[state=expanded]:px-2">
        <NavMain items={data.navMain} />
        <div className="mt-2 border-t border-[#222] pt-2">
          <NavProjects projects={data.projects} />
        </div>
      </SidebarContent>

      <SidebarFooter className="bg-[#141414] border-t border-[#222] p-2">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
