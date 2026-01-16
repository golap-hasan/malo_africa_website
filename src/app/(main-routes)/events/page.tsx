import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, Clock, MapPin, Ticket } from "lucide-react";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";
import PageLayout from "@/tools/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EventsFilterBar from "@/components/events/events-filter-bar";
import { EVENTS } from "@/components/events/event-data";

const EventsPage = () => {

  return (
    <>
      <CustomBreadcrumb
        links={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Events",
            href: "/events",
            isCurrent: true,
          },
        ]}
      />
      <PageLayout paddingSize="small">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                Discover Events Around You
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Explore concerts, expos, conferences and more happening across
                Zambia. Find something exciting to attend or promote your own.
              </p>
            </div>
            <div className="flex flex-col items-stretch md:items-end gap-3">
              <span className="text-xs uppercase tracking-[0.18em] font-semibold text-muted-foreground">
                Host an event
              </span>
              <Button asChild size="lg" className="rounded-2xl h-11 px-6">
                <Link href="/create/event">
                  <Ticket className="h-4 w-4" />
                  <span>Create event</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card/60 p-4 md:p-5 shadow-sm">
            <EventsFilterBar />
            
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {EVENTS.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group"
              >
                <Card className="py-0 flex flex-col rounded-3xl border-border bg-card/80 hover:bg-card transition-colors shadow-sm group-hover:shadow-md overflow-hidden h-full">
                  <div className="relative w-full h-48 md:h-52">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
                        <Calendar className="h-3.5 w-3.5" />
                        {event.dateLabel}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-background/85 px-3 py-1 text-[11px] text-muted-foreground shadow-sm">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3 p-4 md:p-5">
                    <div className="flex items-center flex-wrap gap-2 text-[11px] text-muted-foreground">
                      <Badge
                        variant="outline"
                        className="text-[10px] font-semibold rounded-full px-2 py-0.5 border-primary/40 text-primary"
                      >
                        {event.category}
                      </Badge>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Ticket className="h-3 w-3" />
                        {event.pricing}
                      </span>
                    </div>

                    <h2 className="text-sm md:text-base font-semibold leading-snug line-clamp-2">
                      {event.title}
                    </h2>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 md:line-clamp-3">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <span className="inline-flex items-center gap-1 text-[11px] md:text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] md:text-xs font-semibold text-primary group-hover:underline">
                        View details
                        <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default EventsPage;
