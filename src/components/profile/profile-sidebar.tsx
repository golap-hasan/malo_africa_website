"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, ChevronRight, LucideIcon } from "lucide-react";
import { userMenuItems } from "@/components/common/navbar/nav-config";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface UserMenuItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

interface NavItemProps {
  item: UserMenuItem;
  isActive: boolean;
}

const NavItem = ({ item, isActive }: NavItemProps) => (
  <Link
    href={item.href}
    className={cn(
      "flex items-center justify-between px-6 py-3.5 rounded-2xl text-[15px] font-bold transition-all group",
      isActive 
        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
    )}
  >
    <div className="flex items-center gap-4">
      <item.icon className={cn(
        "h-5 w-5 transition-colors",
        isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
      )} />
      <span>{item.name}</span>
    </div>
    {isActive && <ChevronRight className="h-4 w-4" />}
  </Link>
);

export const ProfileSidebar = () => {
  const pathname = usePathname();

  return (
    <Card className="rounded-4xl overflow-hidden shadow-2xl sticky top-24 border-none bg-card py-0">

      <div className="p-4 space-y-1">
        {(userMenuItems as UserMenuItem[]).map((item) => (
          <NavItem 
            key={item.name} 
            item={item} 
            isActive={pathname === item.href} 
          />
        ))}
        
        <div className="pt-4 mt-4 border-t">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-4 px-6 py-6 rounded-2xl text-[15px] font-bold text-destructive hover:bg-destructive/10 hover:text-destructive transition-all"
          >
            <LogOut className="h-5 w-5" />
            Logout Account
          </Button>
        </div>
      </div>
    </Card>
  );
};
