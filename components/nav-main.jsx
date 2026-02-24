"use client"

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2 mb-1 border-b border-[#222] w-full pb-1 h-6 group-data-[state=collapsed]:hidden">MAIN MENU</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          // Render a direct flat link for navigation items without children.
          if (!item.items || item.items.length === 0) {
            return (
              <SidebarMenuItem key={item.title}>
                {/* 
                  Custom Findexa Active State:
                  Expanded Mode: White background with black text/icons.
                  Collapsed Mode: Blue background with white text/icons (size-8 centering).
                */}
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  isActive={item.isActive}
                  className={`transition-all duration-200 relative ${item.isActive
                    ? 'group-data-[state=expanded]:bg-white group-data-[state=expanded]:text-black group-data-[state=collapsed]:bg-[#3b82f6] group-data-[state=collapsed]:text-white shadow-md rounded-lg'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-[#1e1e1e] rounded-lg'
                    }`}
                >
                  <a href={item.url || "#"} className="flex items-center w-full">
                    {/* Blue Indicator for Expanded Mode only */}
                    {item.isActive && (
                      <div className="absolute left-[2px] top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-[#3b82f6] z-10 group-data-[state=collapsed]:hidden" />
                    )}

                    {item.icon && <item.icon className="size-[18px] shrink-0" />}

                    <span className="ml-3 font-semibold truncate group-data-[state=collapsed]:hidden flex-1">
                      {item.title}
                    </span>

                    {item.badge && (
                      <span className="ml-auto bg-[#3b82f6] text-white text-[10px] font-bold px-2 py-0.5 rounded-full group-data-[state=collapsed]:hidden">
                        {item.badge}
                      </span>
                    )}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  {/* Replicated Findexa active state for collapsible headers */}
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={item.isActive}
                    className={`transition-all duration-200 relative ${item.isActive
                      ? 'group-data-[state=expanded]:bg-white group-data-[state=expanded]:text-black group-data-[state=collapsed]:bg-[#3b82f6] group-data-[state=collapsed]:text-white shadow-md rounded-lg'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-[#1e1e1e] rounded-lg'
                      }`}
                  >
                    {/* Blue Indicator for Expanded Mode only */}
                    {item.isActive && (
                      <div className="absolute left-[2px] top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-[#3b82f6] z-10 group-data-[state=collapsed]:hidden" />
                    )}

                    {item.icon && <item.icon className="size-[18px] shrink-0" />}

                    <span className="ml-3 font-semibold truncate group-data-[state=collapsed]:hidden flex-1">
                      {item.title}
                    </span>

                    <ChevronRight
                      className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 group-data-[state=collapsed]:hidden" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub className="group-data-[state=collapsed]:hidden">
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
