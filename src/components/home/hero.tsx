"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Search,
  MapPin,
  ArrowRight,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const carouselImages = [
    {
      // ১. ফ্যাশন ও শপিং (Premium Fashion)
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      alt: "Premium Shopping Experience",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
      alt: "Expert Professional Services",
    },
    {
      src: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200&auto=format&fit=crop",
      alt: "Reliable Logistics and Delivery",
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
      alt: "Innovative Technology Solutions",
    },
    {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
      alt: "Luxury Accessories Collection",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      alt: "Marketing and Branding Growth",
    },
    {
      src: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1200&auto=format&fit=crop",
      alt: "Smart Gadgets and Electronics",
    },
    {
      src: "https://images.unsplash.com/photo-1512418490979-92798cec1380?q=80&w=1200&auto=format&fit=crop",
      alt: "Handcrafted Unique Products",
    },
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
      alt: "Empowering Your Business Journey",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-primary/20 pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold animate-fade-in">
              <Sparkles className="h-4 w-4" />
              <span>Zambia&apos;s #1 Marketplace & Service Hub</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              Everything You Need, <br />
              <span className="text-gradient bg-clip-text">
                All in One Place.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover local products, professional services, latest news, and
              upcoming events in your community.
            </p>

            {/* Search Bar - Desktop Style */}
            <div className="hidden md:flex items-center gap-2 p-2 bg-card border rounded-2xl shadow-xl shadow-primary/5 max-w-xl">
              <div className="flex-1 flex items-center px-3 gap-2 border-r">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="What are you looking for?"
                  className="border-none focus-visible:ring-0 text-base bg-transparent h-12"
                />
              </div>
              <div className="flex items-center px-3 gap-2 min-w-37.5">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">All Zambia</span>
              </div>
              <Button
                size="lg"
                className="rounded-xl px-8 font-bold h-12 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
              >
                Search
              </Button>
            </div>

            {/* Mobile CTA */}
            {/* <div className="flex md:hidden flex-col gap-3">
              <Button size="lg" className="rounded-xl w-full font-bold h-14 shadow-lg shadow-primary/20">
                Start Exploring
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl w-full font-bold h-14">
                Create Post
              </Button>
            </div> */}

            {/* Stats/Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold leading-none">50k+</p>
                  <p className="text-xs text-muted-foreground mt-1">Products</p>
                </div>
              </div>
              <div className="h-12 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold leading-none">10k+</p>
                  <p className="text-xs text-muted-foreground mt-1">Services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Carousel Visual */}
          <div className="flex-1 relative w-full max-w-150 lg:max-w-none">
            <div className="relative z-10 animate-float">
              <Carousel
                setApi={setApi}
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border-8 border-white dark:border-muted group">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                          <p className="text-lg font-bold">{image.alt}</p>
                          <p className="text-sm opacity-80">
                            Explore the best of Zambia
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Indicators */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300",
                        current === index
                          ? "w-8 bg-primary shadow-lg shadow-primary/20"
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      )}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </Carousel>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 md:-right-10 p-4 bg-card rounded-2xl shadow-xl border animate-bounce-slow hidden sm:block z-20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground">
                      New Items
                    </p>
                    <p className="text-sm font-black">+1,200 Today</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 md:-left-10 p-4 bg-card rounded-2xl shadow-xl border animate-float-slow hidden sm:block z-20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground">
                      Location
                    </p>
                    <p className="text-sm font-black">All Across Zambia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Blob for Carousel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full -z-10 blur-[60px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
