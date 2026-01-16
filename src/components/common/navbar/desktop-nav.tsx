"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./nav-config";

export const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center gap-8">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-sm font-semibold transition-colors relative group py-2 ${
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {link.name}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
        );
      })}
    </div>
  );
};
