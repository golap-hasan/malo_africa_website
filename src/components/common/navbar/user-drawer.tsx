"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Edit3, LogOut, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { userMenuItems } from "./nav-config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface UserDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const UserDrawer = ({ open, setOpen }: UserDrawerProps) => {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="left"
        className="flex w-75 flex-col border-none p-0 focus:ring-0 outline-none"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>User Profile Menu</SheetTitle>
        </SheetHeader>

        {/* --- Profile Section --- */}
        <div className="flex flex-col items-center p-6 bg-linear-to-b from-primary/5 to-transparent border-b-4 rounded-b-[40px]">
          <div className="relative group">
            <Avatar className="h-24 w-24 border-4 border-background shadow-2xl transition-transform group-hover:scale-105">
              <AvatarImage src="" alt="Golap Hasan" />
              <AvatarFallback className="bg-muted text-primary/40">
                <User className="h-12 w-12" />
              </AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full shadow-lg border-2 border-background"
            >
              <Edit3 className="h-3.5 w-3.5" />
            </Button>
          </div>

          <div className="mt-4 space-y-0.5">
            <h2 className="text-xl font-black tracking-tight">Golap Hasan</h2>
            <p className="text-xs text-muted-foreground font-medium">Premium Merchant</p>
          </div>
        </div>

        {/* --- Menu Links --- */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <nav className="space-y-1">
            {userMenuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between group px-4 py-3 rounded-2xl transition-all duration-200 ${
                    isActive 
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <item.icon className={`h-5 w-5 ${isActive ? "text-current" : "group-hover:text-primary transition-colors"}`} />
                    <span className="text-sm font-semibold">{item.name}</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 opacity-0 group-hover:opacity-100 transition-all ${isActive ? "hidden" : ""}`} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* --- Footer / Logout --- */}
        <div className="p-4 mt-auto border-t border-border/40">
          <Button
            variant="ghost"
            onClick={() => setOpen(false)}
            className="w-full justify-start gap-4 h-12 rounded-2xl text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-bold text-sm">Logout Account</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};