"use client";

import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  MoreVertical, 
  Edit3, 
  Trash2, 
  ExternalLink,
  Ticket,
  Eye,
  Tag
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

interface MyEvent {
  id: string;
  title: string;
  category: string;
  startDate: string;
  startTime: string;
  location: string;
  fees: string;
  status: "upcoming" | "active" | "past";
  image: string;
  views: number;
  interested: number;
  registrationUrl?: string;
}

const myEvents: MyEvent[] = [
  {
    id: "1",
    title: "Summer Music Festival 2024",
    category: "Music & Entertainment",
    startDate: "25 June, 2024",
    startTime: "18:00",
    location: "Lusaka National Park",
    fees: "250 ZMW",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    views: 1540,
    interested: 230,
    registrationUrl: "https://example.com/tickets",
  },
{
  id: "2",
  title: "Tech Startup Summit",
  category: "Technology",
  startDate: "12 May, 2024",
  startTime: "09:00",
  location: "Bongo Hive, Lusaka",
  fees: "Free",
  status: "active",
  image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80", 
  views: 890,
  interested: 120,
},
  {
    id: "3",
    title: "Annual Charity Marathon",
    category: "Sports",
    startDate: "10 April, 2024",
    startTime: "06:00",
    location: "Livingstone City Center",
    fees: "50 ZMW",
    status: "past",
    image: "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=800&q=80",
    views: 2100,
    interested: 450,
  },
];

const statusStyles = {
  upcoming: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  active: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  past: "bg-muted text-muted-foreground border-muted-foreground/20",
};

export default function MyEventsPage() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-black tracking-tight flex items-center gap-2.5">
            <Calendar className="h-7 w-7 text-primary" />
            My Events
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            Manage your organized events and track attendance.
          </p>
        </div>
        <Button className="rounded-xl h-11 px-5 font-bold shadow-lg shadow-primary/10 hover:scale-[1.02] transition-transform">
          <Link href="/create/event">
            Create Event
          </Link>
        </Button>
      </div>

      {/* Events List */}
      <div className="grid gap-4">
        {myEvents.map((event) => (
          <Card 
            key={event.id} 
            className={cn(
              "py-0 group relative overflow-hidden hover:shadow-xl transition-all duration-300"
            )}
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="relative w-full md:w-56 h-48 md:h-auto shrink-0 overflow-hidden">
                <Image 
                  src={event.image} 
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={cn("px-2 py-1 rounded-lg border font-bold text-[10px] shadow-sm", statusStyles[event.status])}>
                    {event.status.toUpperCase()}
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
                        {event.category}
                      </div>
                      <h2 className="text-lg font-black tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                        {event.title}
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
                          <ExternalLink className="h-3.5 w-3.5" /> View Live
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-lg py-2 cursor-pointer text-sm font-medium gap-2 text-destructive focus:bg-destructive/10 focus:text-destructive">
                          <Trash2 className="h-3.5 w-3.5" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs text-muted-foreground font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-primary/60" />
                      {event.startDate}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-primary/60" />
                      {event.startTime}
                    </div>
                    <div className="flex items-center gap-1.5 sm:col-span-2">
                      <MapPin className="h-3.5 w-3.5 text-primary/60" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Ticket className="h-4 w-4 text-primary" />
                    <span className="text-lg font-black text-primary">{event.fees}</span>
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
                        <p className="text-xs font-black">{event.views.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-muted-foreground uppercase leading-none mb-0.5">Interested</p>
                        <p className="text-xs font-black">{event.interested}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    {event.registrationUrl && (
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none rounded-xl h-9 px-4 font-bold border-2 text-xs">
                        Tickets
                      </Button>
                    )}
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

      {myEvents.length === 0 && (
        <div className="text-center py-16 bg-muted/30 rounded-3xl border-2 border-dashed space-y-4">
          <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
            <Calendar className="h-8 w-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-black">No Events Found</h3>
            <p className="text-sm text-muted-foreground font-medium">You haven&apos;t created any events yet.</p>
          </div>
          <Button className="rounded-xl h-11 px-6 font-bold mt-2">
            Create Your First Event
          </Button>
        </div>
      )}
    </div>
  );
}
