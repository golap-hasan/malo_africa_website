"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "./nav-config";
import { Logo } from "./logo";

interface NavDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const NavDrawer = ({ open, setOpen }: NavDrawerProps) => {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden hover:bg-muted"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex w-70 flex-col p-0 border-r bg-background"
      >
        <SheetHeader className="p-5 border-b flex flex-row items-center justify-between">
          <Logo />
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6">
          <div className="flex flex-col gap-1 px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl text-[15px] font-semibold transition-all ${
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <link.icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
        
        <div className="p-5 border-t">
           <p className="text-[10px] text-center text-muted-foreground">
             © 2026 Malo Afrika. All rights reserved.
           </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};
