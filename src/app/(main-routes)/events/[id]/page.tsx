import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Ticket, 
  Share2, 
  Heart, 
  ChevronLeft,
  User,
  Info,
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";
import PageLayout from "@/tools/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";

// Temporary mock data (should ideally come from a shared constants file)
import { EVENTS } from "@/components/events/event-data" 


const EventDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const event = EVENTS.find((e) => e.id === id);

  if (!event) return notFound()

  return (
    <>
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events" },
          { name: event.title, href: `/events/${event.id}`, isCurrent: true },
        ]}
      />

      <PageLayout paddingSize="small">
        <div className="space-y-8 pb-12">
          {/* Hero Section */}
          <div className="relative h-75 md:h-112.5 w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
              <div className="max-w-4xl space-y-4">
                <Badge className="bg-primary hover:bg-primary/90 text-white border-none px-4 py-1 text-xs md:text-sm font-bold rounded-full">
                  {event.category}
                </Badge>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  {event.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90 text-sm md:text-base font-medium">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {event.dateLabel}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {event.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute top-6 right-6 flex gap-2">
              <Button size="icon" variant="secondary" className="rounded-full bg-white/20 backdrop-blur-md border-none text-white hover:bg-white/40">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full bg-white/20 backdrop-blur-md border-none text-white hover:bg-white/40">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-10">
              {/* Event Overview Card (Mobile only) */}
              <Card className="lg:hidden p-6 rounded-3xl border-primary/10 bg-primary/2 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Price</span>
                  <span className="text-2xl font-black text-primary">{event.pricing}</span>
                </div>
                <Button className="w-full h-12 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20">
                  Get Tickets
                </Button>
              </Card>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Info className="h-6 w-6 text-primary" />
                  About This Event
                </h3>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
                  {event.description}
                </div>
              </div>

              <Separator className="bg-border/50" />

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border rounded-3xl p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Time</h4>
                    <p className="text-muted-foreground">{event.time}</p>
                  </div>
                </div>
                <div className="bg-card border rounded-3xl p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Organizer</h4>
                    <p className="text-muted-foreground">{event.organization}</p>
                  </div>
                </div>
                <div className="bg-card border rounded-3xl p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Ticket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Capacity</h4>
                    <p className="text-muted-foreground">{event.capacity}</p>
                  </div>
                </div>
                <div className="bg-card border rounded-3xl p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Verified Event</h4>
                    <p className="text-muted-foreground">Malo Afrika Trust Member</p>
                  </div>
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Location
                </h3>
                <div className="relative h-75 w-full rounded-3xl overflow-hidden border">
                  {/* In a real app, you'd use Google Maps or Mapbox here */}
                  <div className="absolute inset-0 bg-muted flex items-center justify-center flex-col gap-2">
                    <MapPin className="h-10 w-10 text-muted-foreground" />
                    <span className="text-muted-foreground font-medium">{event.location}</span>
                    <Button variant="outline" size="sm" className="mt-2 rounded-xl">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar (Desktop) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <Card className="hidden lg:block p-8 rounded-[2.5rem] border-primary/10 bg-card shadow-xl shadow-primary/5 space-y-6">
                  <div className="space-y-1">
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Admission</span>
                    <div className="text-4xl font-black text-primary">{event.pricing}</div>
                  </div>
                  
                  <div className="space-y-4 py-4">
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>{event.dateLabel}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full h-14 rounded-2xl text-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                    Get Tickets
                  </Button>
                  
                  <p className="text-[10px] text-center text-muted-foreground px-4">
                    By purchasing, you agree to the Malo Afrika Terms of Service and Event Organizer&apos;s policies.
                  </p>
                </Card>

                {/* Organizer Info */}
                <Card className="p-6 rounded-[2rem] border-border bg-muted/30 space-y-4">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Hosted By</h4>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">{event.organization}</p>
                      <Link href="#" className="text-xs text-primary hover:underline font-semibold">View Profile</Link>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full rounded-xl h-10 border-primary/20 hover:bg-primary/5 text-primary">
                    Contact Organizer
                  </Button>
                </Card>

                {/* Back Link */}
                <Button asChild variant="ghost" className="w-full text-muted-foreground hover:text-primary">
                  <Link href="/events" className="flex items-center gap-2">
                    <ChevronLeft className="h-4 w-4" />
                    Back to all events
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default EventDetailPage;
