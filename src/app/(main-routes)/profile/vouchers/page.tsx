"use client";

import {
  Ticket,
  Building2,
  MapPin,
  Plus,
  MoreVertical,
  Edit3,
  Trash2,
  Eye,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function MyVouchersPage() {
  return (
    <div className="space-y-8">
      {/* --- Header Section --- */}
      <div className="flex items-end justify-between px-2">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold tracking-tight">
            My Vouchers
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            Manage your digital offers and track redemptions.
          </p>
        </div>
        <Button
          asChild
          className="rounded-2xl h-12 px-6 font-bold hidden sm:flex shadow-xl shadow-primary/20"
        >
          <Link href="/create/voucher">
            <Plus className="mr-2 h-5 w-5" /> Create New
          </Link>
        </Button>
      </div>

      {/* --- Vouchers List --- */}
      <div className="grid gap-5">
        {myVouchers.map((voucher) => (
          <Card
            key={voucher.id}
            className="py-0 group overflow-hidden rounded-[2rem] border-none bg-card shadow-sm hover:shadow-md transition-all relative"
          >
            <div className="flex flex-col sm:flex-row items-stretch min-h-40">
              {/* Image Section */}
              <Link 
                href={`/profile/vouchers/${voucher.id}`}
                className="relative w-full sm:w-44 h-40 sm:h-auto shrink-0 bg-muted overflow-hidden"
              >
                {voucher.image ? (
                  <Image
                    src={voucher.image}
                    alt={voucher.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/5">
                    <Ticket className="h-10 w-10 text-primary/20" />
                  </div>
                )}
                <Badge className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-primary hover:bg-white font-bold border-none shadow-sm">
                  {voucher.discount}% OFF
                </Badge>
              </Link>

              {/* Main Content */}
              <Link 
                href={`/profile/vouchers/${voucher.id}`}
                className="flex-1 p-6 flex flex-col justify-between border-y sm:border-y-0 sm:border-x border-dashed hover:bg-muted/10 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                        {voucher.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-1 text-muted-foreground">
                        <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider">
                          <Building2 className="h-3 w-3" />{" "}
                          {voucher.companyName}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider">
                          <MapPin className="h-3 w-3" /> {voucher.cityName}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {voucher.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/5 px-3 py-1.5 rounded-full">
                    <Clock className="h-3.5 w-3.5" />
                    Valid for {voucher.validityDays} Days
                  </div>
                  {voucher.status === "expired" && (
                    <Badge
                      variant="destructive"
                      className="rounded-full text-[10px] uppercase"
                    >
                      Expired
                    </Badge>
                  )}
                </div>
              </Link>

              {/* Stats & Actions */}
              <div className="w-full sm:w-36 flex sm:flex-col items-center justify-between sm:justify-center p-6 bg-muted/30 relative">
                <div className="text-center">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">
                    Used
                  </p>
                  <p className="text-3xl font-black">{voucher.usedCount}</p>
                </div>

                <div className="sm:mt-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-xl shadow-sm bg-background"
                      >
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-48 rounded-2xl p-2 shadow-2xl border-none"
                    >
                      <DropdownMenuItem asChild>
                        <Link 
                          href={`/profile/vouchers/${voucher.id}`}
                          className="rounded-xl py-2.5 cursor-pointer font-bold gap-3 focus:bg-primary/10 flex items-center"
                        >
                          <Eye className="h-4 w-4" /> View Details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-xl py-2.5 cursor-pointer font-bold gap-3 focus:bg-primary/10">
                        <Edit3 className="h-4 w-4" /> Edit Voucher
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-xl py-2.5 cursor-pointer font-bold gap-3 focus:bg-primary/10">
                        <Eye className="h-4 w-4" /> Analytics
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-xl py-2.5 cursor-pointer font-bold gap-3 text-destructive focus:bg-destructive/10">
                        <Trash2 className="h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Floating Button Mobile */}
      <Button className="fixed bottom-8 right-6 h-14 w-14 rounded-2xl shadow-2xl sm:hidden z-50 p-0 shadow-primary/40">
        <Plus className="h-8 w-8" />
      </Button>
    </div>
  );
}

interface Voucher {
  id: string;

  name: string;

  companyName: string;

  cityName: string;

  discount: number;

  validityDays: number;

  quantity: string;

  description: string;

  image?: string;

  status: "active" | "expired";

  usedCount: number;
}

const myVouchers: Voucher[] = [
  {
    id: "1",

    name: "Summer Sale Special",

    companyName: "Fashion Hub",

    cityName: "Lusaka",

    discount: 50,

    validityDays: 30,

    quantity: "100",

    description: "Get 50% off on all summer collections. Valid for one month.",

    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",

    status: "active",

    usedCount: 45,
  },

  {
    id: "2",

    name: "Weekend Dinner Deal",

    companyName: "Tasty Bites",

    cityName: "Livingstone",

    discount: 20,

    validityDays: 7,

    quantity: "50",

    description: "Enjoy a flat 20% discount on family dinners during weekends.",

    status: "active",

    usedCount: 12,
  },

  {
    id: "3",

    name: "Tech Upgrade Voucher",

    companyName: "Gadget World",

    cityName: "Kitwe",

    discount: 10,

    validityDays: 15,

    quantity: "Unlimited",

    description: "10% off on all smartphone accessories and smartwatches.",

    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",

    status: "expired",

    usedCount: 89,
  },
];
