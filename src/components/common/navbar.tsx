"use client";

import { useState } from "react";
import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Logo } from "./navbar/logo";
import { DesktopNav } from "./navbar/desktop-nav";
import { NavDrawer } from "./navbar/nav-drawer";
import { UserDrawer } from "./navbar/user-drawer";
import { UserMenu } from "./navbar/user-menu";
import { CreateMenu } from "./navbar/create-menu";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-22 container items-center justify-between px-5">
        {/* Left: Logo & Mobile Menu */}
        <div className="flex items-center gap-4">
          <NavDrawer open={navOpen} setOpen={setNavOpen} />
          <Logo />
        </div>

        {/* Center: Desktop Navigation Links */}
        <DesktopNav />

        {/* Right: Search, Actions */}
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
            <CreateMenu />
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-muted"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full hover:bg-muted group"
            >
              <Bell className="h-5 w-5 transition-transform group-hover:rotate-12" />
              <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-destructive border-2 border-background animate-pulse"></span>
            </Button>

            <div className="hidden sm:block">
              <UserMenu />
            </div>

            <UserDrawer open={userOpen} setOpen={setUserOpen} />

            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden text-primary rounded-full hover:bg-primary/5"
              onClick={() => setUserOpen(true)}
            >
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
