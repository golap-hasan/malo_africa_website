"use client";

import Link from "next/link";
import { 
  ShoppingBag, 
  Users, 
  Sprout,
  UserCircle,
  Car,
  HardHat,
  GraduationCap,
  Zap,
  Film,
  Landmark,
  UtensilsCrossed,
  Stethoscope,
  Home,
  Factory,
  Briefcase,
  Package,
  Pickaxe,
  Leaf,
  MoreHorizontal,
  Heart,
  Building2,
  Building,
  ShieldCheck,
  Wrench,
  ShoppingCart,
  Trophy,
  Truck
} from "lucide-react";
import { cn } from "@/lib/utils";

const NavCategories = () => {
  const categories = [
    { name: "Agriculture", icon: Sprout, color: "bg-emerald-500", href: "/category/agriculture" },
    { name: "Artist/Personality", icon: UserCircle, color: "bg-pink-500", href: "/category/artist" },
    { name: "Automotive", icon: Car, color: "bg-blue-500", href: "/category/automotive" },
    { name: "Construction", icon: HardHat, color: "bg-amber-600", href: "/category/construction" },
    { name: "Education", icon: GraduationCap, color: "bg-indigo-500", href: "/category/education" },
    { name: "Energy", icon: Zap, color: "bg-yellow-500", href: "/category/energy" },
    { name: "Entertainment", icon: Film, color: "bg-purple-500", href: "/category/entertainment" },
    { name: "Finance", icon: Landmark, color: "bg-green-600", href: "/category/finance" },
    { name: "Food/Hospitality", icon: UtensilsCrossed, color: "bg-orange-500", href: "/category/food" },
    { name: "Health/Medical", icon: Stethoscope, color: "bg-red-500", href: "/category/health" },
    { name: "Home & Garden", icon: Home, color: "bg-lime-600", href: "/category/home-garden" },
    { name: "Industrial", icon: Factory, color: "bg-slate-600", href: "/category/industrial" },
    { name: "Job Seekers", icon: Briefcase, color: "bg-sky-600", href: "/category/jobs" },
    { name: "Manufacturing", icon: Package, color: "bg-teal-600", href: "/category/manufacturing" },
    { name: "Mining", icon: Pickaxe, color: "bg-stone-700", href: "/category/mining" },
    { name: "Natural Resources", icon: Leaf, color: "bg-green-500", href: "/category/natural-resources" },
    { name: "Personal Services", icon: Heart, color: "bg-rose-400", href: "/category/personal-services" },
    { name: "Public Org/Gov", icon: Building2, color: "bg-blue-700", href: "/category/government" },
    { name: "Real Estate", icon: Building, color: "bg-violet-600", href: "/category/real-estate" },
    { name: "Safety & Legal", icon: ShieldCheck, color: "bg-zinc-600", href: "/category/safety-legal" },
    { name: "Services", icon: Wrench, color: "bg-blue-400", href: "/category/services" },
    { name: "Shopping", icon: ShoppingCart, color: "bg-pink-600", href: "/category/shopping" },
    { name: "Sport & Training", icon: Trophy, color: "bg-amber-500", href: "/category/sport" },
    { name: "Transportation", icon: Truck, color: "bg-orange-600", href: "/category/transportation" },
    { name: "Other", icon: MoreHorizontal, color: "bg-gray-400", href: "/category/other" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/buying"
            className="flex-1 bg-primary text-primary-foreground py-5 px-8 rounded-2xl flex items-center justify-center gap-4 font-black text-xl shadow-lg hover:opacity-90 transition-all active:scale-95 group"
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
              <div className={cn(
                "h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:-translate-y-1",
                cat.color
              )}>
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
