"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { NEWS_ITEMS } from "./news-data";

const NewsList = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          News & Updates
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">
          Stay up to date with what&apos;s happening on Malo Africa.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {NEWS_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="group"
          >
            <Card className="py-0 flex flex-col rounded-3xl border-border bg-card/80 hover:bg-card transition-colors shadow-sm group-hover:shadow-md overflow-hidden h-full">
              <div className="relative w-full h-40 md:h-44 lg:h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform"
                />
              </div>

              <div className="flex-1 space-y-2 p-4 md:p-5">
                <div className="flex items-center flex-wrap gap-2 text-[11px] text-muted-foreground">
                  <Badge
                    variant="outline"
                    className="text-[10px] font-semibold rounded-full px-2 py-0.5 border-primary/40 text-primary"
                  >
                    {item.category}
                  </Badge>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {item.publishedAt}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.time}
                  </span>
                </div>

                <h2 className="text-sm md:text-base font-semibold leading-snug line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 md:line-clamp-3">
                  {item.summary}
                </p>

                <span className="mt-1 inline-flex items-center gap-1 text-[11px] md:text-xs font-semibold text-primary group-hover:underline">
                  Read more
                  <ChevronRight className="h-3 w-3" />
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
