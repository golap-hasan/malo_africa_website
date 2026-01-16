import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, Clock, MapPin, Ticket } from "lucide-react";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";
import PageLayout from "@/tools/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EventsFilterBar from "@/components/events/events-filter-bar";

type EventItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  dateLabel: string;
  time: string;
  location: string;
  pricing: string;
  image: string;
};

const EVENTS: EventItem[] = [
  {
    id: "1",
    title: "Lusaka Summer Music & Food Festival",
    // আপডেট করা মিউজিক ফেস্টিভ্যাল ইমেজ
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    description: "Live performances, food trucks, and local vendors all in one vibrant outdoor experience.",
    category: "Music & Culture",
    dateLabel: "Sat, 22 Feb",
    time: "15:00 - 23:00",
    location: "Lusaka Showgrounds",
    pricing: "From ZMW 150",
  },
  {
    id: "2",
    title: "Livingstone Tourism & Adventure Expo",
    image: "https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?w=800&q=80",
    description: "Discover tour operators, resorts and adventure packages around Victoria Falls.",
    category: "Travel & Tourism",
    dateLabel: "Fri, 7 Mar",
    time: "09:00 - 17:00",
    location: "Livingstone Civic Center",
    pricing: "Free Entry",
  },
  {
    id: "3",
    title: "SME Growth & Networking Conference",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    description: "Panels, workshops and networking sessions for entrepreneurs and small business owners.",
    category: "Business & Networking",
    dateLabel: "Thu, 27 Mar",
    time: "08:30 - 16:30",
    location: "Manda Hill Conference Center, Lusaka",
    pricing: "Early Bird ZMW 550",
  },
  {
    id: "4",
    title: "Kitwe Tech & Innovation Meetup",
    // আপডেট করা টেক মিটআপ ইমেজ
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    description: "Monthly meetup for developers, designers and startups to connect and share ideas.",
    category: "Tech & Innovation",
    dateLabel: "Wed, 5 Mar",
    time: "18:00 - 20:30",
    location: "Kitwe Hub",
    pricing: "Free, RSVP Required",
  },
  {
    id: "5",
    title: "Family Market Day & Kids Fun Fair",
    // আপডেট করা ফ্যামিলি ফান ফেয়ার ইমেজ
    image: "https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?w=800&q=80",
    description: "Local vendors, kids activities and live entertainment for the whole family.",
    category: "Family & Community",
    dateLabel: "Sun, 16 Mar",
    time: "10:00 - 18:00",
    location: "Woodlands Stadium, Lusaka",
    pricing: "From ZMW 50",
  },
  {
    id: "6",
    title: "Zambia Fashion & Lifestyle Showcase",
    // আপডেট করা ফ্যাশন শো ইমেজ
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    description: "Runway shows, pop-up shops and designer showcases from across the country.",
    category: "Fashion & Lifestyle",
    dateLabel: "Sat, 29 Mar",
    time: "17:00 - 22:00",
    location: "Radisson Blu, Lusaka",
    pricing: "VIP From ZMW 750",
  },
];

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
