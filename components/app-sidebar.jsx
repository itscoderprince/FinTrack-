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
  Settings,
  HelpCircle,
  LogOut,
  Zap
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  useSidebar
} from "@/components/ui/sidebar"

// Findexa specific navigation data
const data = {
  navMain: [
    {
      title: "MAIN MENU",
      items: [
        { title: "Dashboard", url: "/admin", icon: LayoutDashboard, isActive: true },
        { title: "Analytics", url: "#", icon: PieChart },
        { title: "Message", url: "#", icon: MessageSquare, badge: "20" },
        { title: "Transactions", url: "#", icon: CreditCard },
        { title: "Invoices", url: "#", icon: FileText },
      ],
    },
    {
      title: "FEATURES",
      items: [
        { title: "Recurring", url: "#", icon: Repeat },
        { title: "Subscriptions", url: "#", icon: UserCircle },
        { title: "Feedback", url: "#", icon: MessageCircle },
      ],
    },
    {
      title: "GENERAL",
      items: [
        { title: "Settings", url: "#", icon: Settings },
        { title: "Help Desk", url: "#", icon: HelpCircle },
        { title: "Log out", url: "#", icon: LogOut },
      ],
    },
  ],
}

export function AppSidebar({ ...props }) {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar className="border-r border-[#222] bg-[#141414]" {...props}>
      <SidebarHeader className="bg-[#141414]">
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-3 pt-4 pb-2">
          <div className="w-8 h-8 rounded-xl bg-[#3b82f6] flex items-center justify-center shrink-0">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="text-[17px] font-bold text-white tracking-wide truncate group-[[data-state=collapsed]]:hidden">Findexa</span>
          <button onClick={toggleSidebar} className="ml-auto text-gray-500 hover:text-white transition-colors group-[[data-state=collapsed]]:hidden focus:outline-none">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
          </button>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-[#141414] px-2 gap-0 overflow-y-auto">
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title} className="py-2">
            <SidebarGroupLabel className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest px-2 mb-1">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive}
                      className={`transition-colors py-5 ${item.isActive ? 'bg-[#252525] text-white hover:bg-[#252525] hover:text-white' : 'text-gray-400 hover:text-gray-200 hover:bg-[#1e1e1e]'}`}
                    >
                      <a href={item.url} className="flex justify-between w-full">
                        <div className="flex items-center gap-2">
                          <item.icon className="w-[16px] h-[16px]" />
                          <span className="text-[13px] font-medium">{item.title}</span>
                        </div>
                        {item.badge && (
                          <span className="text-[10px] bg-[#2a2a2a] border border-[#444] text-gray-300 px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                            {item.badge}
                          </span>
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
