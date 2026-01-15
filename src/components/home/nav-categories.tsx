"use client";

import Link from "next/link";
import {
  ShoppingBag,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { categories } from "@/const/categories";

const NavCategories = () => {

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/buying"
            className="flex-1 bg-gradient text-primary-foreground py-5 px-8 rounded-2xl flex items-center justify-center gap-4 font-black text-xl shadow-lg hover:opacity-90 transition-all active:scale-95 group"
          >
            <div className="p-2 bg-white/20 rounded-xl group-hover:rotate-12 transition-transform">
              <ShoppingBag className="h-7 w-7" />
            </div>
            Buyers
          </Link>
          <Link
            href="/selling"
            className="flex-1 bg-secondary text-secondary-foreground py-5 px-8 rounded-2xl flex items-center justify-center gap-4 font-black text-xl shadow-lg hover:bg-secondary/80 transition-all active:scale-95 group"
          >
            <div className="p-2 bg-primary/10 rounded-xl group-hover:rotate-12 transition-transform">
              <Users className="h-7 w-7" />
            </div>
            Sellers
          </Link>
        </div>

        {/* Categories Flex Wrap - Centered for better balance */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group flex flex-col items-center gap-3 p-2 rounded-2xl hover:bg-accent hover:text-accent-foreground transition-all duration-300 w-25 sm:w-30"
            >
              <div
                className={cn(
                  "h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:-translate-y-1",
                  cat.color
                )}
              >
                <cat.icon className="h-7 w-7" />
              </div>
              <span className="text-xs text-center leading-tight transition-colors uppercase tracking-wide">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavCategories;
