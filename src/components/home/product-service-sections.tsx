"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ThumbsUp,
  Star,
  MapPin,
  ShoppingBag,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import PageLayout from "@/tools/PageLayout";
import { Button } from "../ui/button";
import { StarRating } from "@/tools/StarRating";

export interface Product {
  id: string;
  image: string;
  brand: string;
  title: string;
  priceRange: string;
}

export interface Service {
  id: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  title: string;
  location: string;
  priceRange: string;
}

export const products: Product[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    brand: "Garmin 165",
    title: "Garmin Device 165 Music",
    priceRange: "ZMW 5,000-7,500",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80",
    brand: "Perfume",
    title: "Club de nuit",
    priceRange: "ZMW 1,500-1,600",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    brand: "Sony",
    title: "Sony WH-1000XM4 Headphones",
    priceRange: "ZMW 6,000-8,000",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    brand: "Nike",
    title: "Nike Air Max Pulse - Sport Edition",
    priceRange: "ZMW 2,200-3,500",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", // ঘড়ির অল্টারনেটিভ
    brand: "Rolex",
    title: "Submariner Date Oyster Classic",
    priceRange: "ZMW 15,000-25,000",
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f", // ক্লোথিং অল্টারনেটিভ
    brand: "Chitenge",
    title: "Handmade African Print Suit",
    priceRange: "ZMW 850-1,200",
  },
];

export const services: Service[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    category: "Marketing",
    rating: 4.8,
    reviews: 31,
    title: "Helping businesses turn online marketing into real in-store sales.",
    location: "Lusaka",
    priceRange: "ZMW 1,500-3,500",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80",
    category: "Media and Marketing",
    rating: 4.5,
    reviews: 13,
    title: "Advertising consultation, branding and promotions.",
    location: "Lusaka",
    priceRange: "ZMW 500-4,000",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80",
    category: "IT Support",
    rating: 5.0,
    reviews: 24,
    title: "Web development and software maintenance services.",
    location: "Kitwe",
    priceRange: "ZMW 3,000-10,000",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=500&q=80",
    category: "Photography",
    rating: 4.9,
    reviews: 45,
    title: "Professional wedding and event photography sessions.",
    location: "Livingstone",
    priceRange: "ZMW 2,500-8,000",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&q=80",
    category: "Legal",
    rating: 4.7,
    reviews: 18,
    title: "Legal advice and business registration consultancy.",
    location: "Lusaka",
    priceRange: "ZMW 1,200-5,000",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
    category: "Delivery",
    rating: 4.2,
    reviews: 102,
    title: "Same-day bike delivery across Lusaka metropolitan area.",
    location: "Lusaka",
    priceRange: "ZMW 50-250",
  },
];

export const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-card rounded-3xl overflow-hidden shadow-sm border border-border flex flex-col h-full hover:shadow-md transition-shadow">
    <div className="relative aspect-4/3 w-full">
      <Image
        src={product.image}
        alt={product.title}
        fill
        className="object-cover"
      />
      <div className="absolute bottom-2 left-2">
        <div className="bg-primary/90 text-primary-foreground p-1 rounded-full">
          <ThumbsUp className="h-3 w-3" fill="currentColor" />
        </div>
      </div>
    </div>
    <div className="p-4 flex flex-col flex-1 gap-1">
      <span className="text-xs font-medium text-primary uppercase tracking-wider">
        {product.brand}
      </span>
      <h3 className="font-semibold text-sm line-clamp-2 leading-tight flex-1">
        {product.title}
      </h3>
      <p className="text-xs font-bold text-muted-foreground mt-1">
        {product.priceRange}
      </p>
    </div>
  </div>
);

export const ServiceCard = ({ service }: { service: Service }) => (
  <div className="bg-card rounded-3xl overflow-hidden shadow-sm border border-border flex flex-col h-full hover:shadow-md transition-shadow">
    <div className="relative aspect-4/3 w-full">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover"
      />
      <div className="absolute bottom-2 left-2">
        <div className="bg-primary/90 text-primary-foreground p-1 rounded-full">
          <ThumbsUp className="h-3 w-3" fill="currentColor" />
        </div>
      </div>
    </div>
    <div className="p-4 flex flex-col flex-1 gap-1">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {service.category}
        </span>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <Star className="h-2.5 w-2.5 text-amber-400" />
          <span>{service.rating.toFixed(1)}/5</span>
          <span className="flex items-center gap-0.5 ml-1">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-2.5 w-2.5"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {service.reviews}
          </span>
        </div>
      </div>

      <div className="flex gap-1 mb-1">
        {/* {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="h-3 w-3 text-muted-foreground/30" />
        ))} */}
        <StarRating size={10} rating={service.rating} totalStars={5} />
      </div>

      <h3 className="font-semibold text-sm line-clamp-2 leading-tight">
        {service.title}
      </h3>

      <div className="flex items-center gap-1 text-[10px] text-muted-foreground mt-1">
        <MapPin className="h-3 w-3" />
        <span>{service.location}</span>
      </div>

      <p className="text-xs font-bold text-primary mt-1">
        {service.priceRange}
      </p>
    </div>
  </div>
);

export default function ProductServiceSections() {
  return (
    <div className="space-y-16 pb-20">
      {/* Products Section */}
      <div className="bg-primary/10 py-12 md:py-18 px-5">
        <PageLayout paddingSize="none">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2.5 rounded-2xl shadow-lg shadow-primary/20 hidden sm:block">
                <ShoppingBag className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Products</h2>
                <p className="text-xs text-muted-foreground font-medium">
                  Explore our premium products
                </p>
              </div>
            </div>
            <Button variant="link" size="sm" asChild>
              <Link href="/products" className="flex items-center gap-1">
                View More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group transition-transform duration-300 hover:-translate-y-1"
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Services Section */}
      <div className="px-5">
        <PageLayout paddingSize="none">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-secondary p-2.5 rounded-2xl shadow-lg shadow-secondary/20 hidden sm:block">
                <Briefcase className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Services</h2>
                <p className="text-xs text-muted-foreground font-medium">
                  Professional services for you
                </p>
              </div>
            </div>
            <Button variant="link" size="sm" asChild>
              <Link href="/services" className="flex items-center gap-1">
                View More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group transition-transform duration-300 hover:-translate-y-1"
              >
                <ServiceCard service={service} />
              </Link>
            ))}
          </div>
        </PageLayout>
      </div>
    </div>
  );
}
