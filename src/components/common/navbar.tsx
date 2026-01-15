"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  Bell,
  PlusCircle,
  Plus,
  FileText,
  Ticket,
  User,
  Home,
  ShoppingBag,
  Briefcase,
  Newspaper,
  Calendar,
  LogOut,
  Settings,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ThemeToggle } from "./theme-toggle";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Products", href: "/products", icon: ShoppingBag },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "News", href: "/news", icon: Newspaper },
    { name: "Events", href: "/events", icon: Calendar },
  ];
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-22 container items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Logo & Mobile Menu */}
        <div className="flex items-center gap-4">
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
              className="flex w-[320px] flex-col p-0 border-r text-foreground"
            >
              <SheetHeader className="p-6 text-left bg-muted/30 border-b">
                <SheetTitle className="flex items-center gap-2">
                  {/* <Image
                     src="/logo.png"
                     alt="Malo Africa Logo"
                     width={150}
                     height={56}
                     className="h-14 w-auto object-contain dark:invert"
                   /> */}
                  <div className="flex flex-col">
                    <span className="text-lg font-bold leading-none text-primary">Malo Africa</span>
                    <span className="text-xs text-muted-foreground mt-1">Marketplace & More</span>
                  </div>
                </SheetTitle>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto py-4 px-3">
                <div className="space-y-1 px-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-all group ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-lg transition-colors ${
                            isActive
                              ? "bg-primary/90 text-primary-foreground"
                              : "bg-muted group-hover:bg-primary/10"
                          }`}
                        >
                          <link.icon className="h-5 w-5" />
                        </div>
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-8 px-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-1">
                    <Link
                      href="/favorites"
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 py-2 text-sm font-medium transition-colors ${
                        pathname === "/favorites"
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          pathname === "/favorites" ? "fill-primary" : ""
                        }`}
                      />{" "}
                      Favorites
                    </Link>
                    <Link
                      href="/settings"
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 py-2 text-sm font-medium transition-colors ${
                        pathname === "/settings"
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      <Settings className="h-4 w-4" /> Settings
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t bg-muted/20">
                <Button className="w-full justify-center gap-2 h-12 rounded-xl font-bold shadow-md active:scale-95 transition-all">
                  <Plus className="h-5 w-5" />
                  Create
                </Button>
                <div className="mt-4 flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs font-bold">Guest User</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button variant="ghost" size="sm" className="text-xs font-bold text-muted-foreground hover:text-destructive">
                      <LogOut className="h-4 w-4 mr-1" /> Login
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Malo Africa Logo"
              width={180}
              height={64}
              className="h-16 w-auto object-contain dark:invert hidden sm:flex"
              priority
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors relative group py-2 ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            );
          })}
        </div>

        {/* Right: Search, Location, Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Desktop Search Bar */}
          <div className="hidden md:flex relative w-48 lg:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search..." 
              className="pl-10 pr-4 rounded-full bg-muted/50 focus-visible:ring-2 focus-visible:ring-primary/20 transition-all"
            />
          </div>

          {/* Create Dropdown */}
          <div className="hidden sm:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-full">
                  <Plus className="h-5 w-5" />
                  <span>Create</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-xl border-muted/50">
                <DropdownMenuLabel className="px-3 py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Post something new
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-muted" />
                <DropdownMenuItem className="rounded-xl px-3 py-3 cursor-pointer focus:bg-primary/10 group">
                  <div className="bg-primary/10 p-2 rounded-lg mr-3 group-focus:bg-primary/20 transition-colors">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Create Post</span>
                    <span className="text-[10px] text-muted-foreground">List a product or service</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl px-3 py-3 cursor-pointer focus:bg-primary/10 group">
                  <div className="bg-primary/10 p-2 rounded-lg mr-3 group-focus:bg-primary/20 transition-colors">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Create Event</span>
                    <span className="text-[10px] text-muted-foreground">Organize a new event</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl px-3 py-3 cursor-pointer focus:bg-primary/10 group">
                  <div className="bg-primary/10 p-2 rounded-lg mr-3 group-focus:bg-primary/20 transition-colors">
                    <Ticket className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">Create Voucher</span>
                    <span className="text-[10px] text-muted-foreground">Add a discount offer</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-muted">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-muted group">
              <Bell className="h-5 w-5 transition-transform group-hover:rotate-12" />
              <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-destructive border-2 border-background animate-pulse"></span>
            </Button>
            
            <div className="hidden sm:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted relative">
                    <User className="h-5 w-5 text-primary" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 rounded-xl border-none shadow-xl">
                  <DropdownMenuLabel className="font-bold">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer rounded-lg">
                    <User className="mr-2 h-4 w-4" /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer rounded-lg text-primary font-semibold">
                    <PlusCircle className="mr-2 h-4 w-4" /> Post Your Ad
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer rounded-lg">
                    <Heart className="mr-2 h-4 w-4" /> Favorites
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer rounded-lg">
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer rounded-lg text-destructive focus:text-destructive">
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Button variant="ghost" size="icon" className="sm:hidden text-primary rounded-full hover:bg-primary/5">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
