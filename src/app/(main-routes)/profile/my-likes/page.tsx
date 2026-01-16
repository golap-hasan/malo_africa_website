"use client";

import { MessageCircle, Trash2, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const likedItems = [
  {
    id: "1",
    name: "Marketing Consultation",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
    category: "Services",
  },
  {
    id: "2",
    name: "Namus Cakery",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
    category: "Food",
  },
  {
    id: "3",
    name: "Tech Solutions Ltd",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    category: "Tech",
  },
];

export default function MyLikesPage() {
  return (
    <div className="space-y-6 pb-10">
      <div className="border-b pb-4">
        <h1 className="text-xl font-bold tracking-tight">
          Saved Items ({likedItems.length})
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {likedItems.map((item) => (
          <Card
            key={item.id}
            className="py-0 group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-none hover:border-primary/50 transition-all"
          >
            {/* Image Section - Fixed Height */}
            <div className="relative aspect-square overflow-hidden bg-muted rounded-t-2xl">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority={false}
              />

              {/* Overlay on hover for better visibility */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg translate-y-1 group-hover:translate-y-0"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Content Section - Minimal */}
            <div className="p-3 space-y-2">
              <div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-tighter mb-0.5">
                  {item.category}
                </p>
                <h3 className="font-bold text-sm leading-tight line-clamp-1">
                  {item.name}
                </h3>
              </div>

              <div className="flex gap-2 pt-1">
                <Button className="flex-1 h-8 rounded-lg text-[11px] font-bold gap-1.5 shadow-none">
                  <MessageCircle className="h-3.5 w-3.5" /> Chat
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-lg shrink-0"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
