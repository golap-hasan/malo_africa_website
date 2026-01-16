"use client";

import { 
  Megaphone, 
  Eye, 
  MessageSquare, 
  MoreVertical, 
  Edit3, 
  Trash2, 
  ExternalLink,
  Tag,
  MapPin,
  Clock
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Advert {
  id: string;
  title: string;
  price: string;
  location: string;
  status: "active" | "pending" | "expired";
  views: number;
  chats: number;
  image: string;
  category: string;
  createdAt: string;
}

const myAdverts: Advert[] = [
  {
    id: "1",
    title: "iPhone 15 Pro Max - Natural Titanium",
    price: "25,000 ZMW",
    location: "Lusaka, Zambia",
    status: "active",
    views: 1240,
    chats: 45,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800&q=80",
    category: "Electronics",
    createdAt: "2 days ago",
  },
  {
    id: "2",
    title: "Modern 3 Bedroom House for Rent",
    price: "12,000 ZMW/mo",
    location: "Kitwe, Zambia",
    status: "pending",
    views: 0,
    chats: 0,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    category: "Real Estate",
    createdAt: "Just now",
  },
  {
    id: "3",
    title: "Toyota Hilux 2022 - Double Cabin",
    price: "450,000 ZMW",
    location: "Livingstone, Zambia",
    status: "expired",
    views: 890,
    chats: 12,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
    category: "Vehicles",
    createdAt: "1 month ago",
  },
];

const statusStyles = {
  active: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  pending: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  expired: "bg-rose-500/10 text-rose-600 border-rose-500/20",
};

export default function MyAdvertsPage() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight flex items-center gap-3">
            <Megaphone className="h-8 w-8 text-primary" />
            My Adverts
          </h1>
          <p className="text-muted-foreground font-medium">
            Manage and track your active and past advertisements.
          </p>
        </div>
        <Button asChild className="rounded-2xl h-12 px-6 font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
          <Link href="/create/post">
            Post New Advert
          </Link>
        </Button>
      </div>
      
      {/* Adverts List */}
      <div className="grid gap-4">
        {myAdverts.map((advert) => (
          <Card 
            key={advert.id} 
            className="py-0 group relative hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="relative w-full md:w-56 h-48 md:h-auto shrink-0 overflow-hidden">
                <Image 
                  src={advert.image} 
                  alt={advert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={cn("px-2 py-1 rounded-lg border font-bold text-[10px] shadow-sm", statusStyles[advert.status])}>
                    {advert.status.toUpperCase()}
                  </Badge>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-4 md:p-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-widest">
                        <Tag className="h-3 w-3" />
                        {advert.category}
                      </div>
                      <h2 className="text-lg font-black tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                        {advert.title}
                      </h2>
                    </div>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-muted">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-44 rounded-xl p-1.5">
                        <DropdownMenuItem className="rounded-lg py-2 cursor-pointer text-sm font-medium gap-2 focus:bg-primary/10 focus:text-primary">
                          <Edit3 className="h-3.5 w-3.5" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-lg py-2 cursor-pointer text-sm font-medium gap-2 focus:bg-primary/10 focus:text-primary">
                          <ExternalLink className="h-3.5 w-3.5" /> View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-lg py-2 cursor-pointer text-sm font-medium gap-2 text-destructive focus:bg-destructive/10 focus:text-destructive">
                          <Trash2 className="h-3.5 w-3.5" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-muted-foreground font-medium">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-primary/60" />
                      {advert.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-primary/60" />
                      {advert.createdAt}
                    </div>
                  </div>

                  <div className="text-xl font-black text-primary">
                    {advert.price}
                  </div>
                </div>

                {/* Footer Stats & Actions */}
                <div className="pt-4 mt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center">
                        <Eye className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-muted-foreground uppercase leading-none mb-0.5">Views</p>
                        <p className="text-xs font-black">{advert.views.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-muted-foreground uppercase leading-none mb-0.5">Chats</p>
                        <p className="text-xs font-black">{advert.chats}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none rounded-xl h-9 px-4 font-bold border-2 text-xs">
                      Boost
                    </Button>
                    <Button size="sm" className="flex-1 sm:flex-none rounded-xl h-9 px-4 font-bold text-xs shadow-md shadow-primary/10">
                      Manage
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {myAdverts.length === 0 && (
        <div className="text-center py-20 bg-muted/30 rounded-[3rem] border-2 border-dashed space-y-4">
          <div className="h-20 w-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
            <Megaphone className="h-10 w-10" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-black">No Adverts Found</h3>
            <p className="text-muted-foreground font-medium">You haven&apos;t posted any advertisements yet.</p>
          </div>
          <Button className="rounded-2xl h-12 px-8 font-bold mt-4">
            Post Your First Advert
          </Button>
        </div>
      )}
    </div>
  );
}
