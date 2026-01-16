"use client";

import Link from "next/link";
import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks, userMenuItems } from "./nav-config";

export const UserMenu = () => {
  // Filter out items that are already in navLinks
  const filteredUserMenuItems = userMenuItems.filter(
    (item) => !navLinks.some((navLink) => navLink.href === item.href)
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-muted relative h-10 w-10"
        >
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
            <User className="h-5 w-5 text-primary" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 rounded-2xl border-none shadow-2xl p-2"
      >
        <div className="flex items-center gap-3 p-3 mb-2 bg-muted/30 rounded-xl">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="font-bold text-sm truncate">Golap Hasan</span>
            <span className="text-[10px] text-muted-foreground truncate">
              golap.hasan@example.com
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1">
          {filteredUserMenuItems.map((item) => (
            <DropdownMenuItem
              key={item.name}
              asChild
              className="cursor-pointer rounded-lg py-2.5 px-3 focus:bg-primary/10 group"
            >
              <Link href={item.href} className="flex items-center gap-3 w-full">
                <item.icon className="h-4 w-4 text-muted-foreground group-focus:text-primary transition-colors" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </div>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuItem className="cursor-pointer rounded-lg py-2.5 px-3 text-destructive focus:text-destructive focus:bg-destructive/10 group">
          <LogOut className="mr-3 h-4 w-4" />
          <span className="text-sm font-bold">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
