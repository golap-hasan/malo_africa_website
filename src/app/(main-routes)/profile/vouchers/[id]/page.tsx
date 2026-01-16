import { 
  Ticket, 
  Building2, 
  MapPin, 
  Calendar, 
  ChevronLeft, 
  Share2, 
  FileText, 
  Info,
  Users,
  Phone,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

// Simulated data fetching function
async function getVoucherData(id: string) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // In a real app, this would be a database call
  return {
    id,
    name: "Summer Sale Special",
    companyName: "Fashion Hub",
    cityName: "Lusaka",
    discount: 50,
    phone: "+260 9413045320",
    validityDays: 30,
    quantity: "100",
    remaining: 55,
    description: "Get 50% off on all summer collections. This offer includes all t-shirts, shorts, and summer accessories. Valid for one month from the date of creation.",
    terms: "1. Valid only on summer collections.\n2. Cannot be combined with other offers.\n3. One voucher per customer.\n4. Valid only at Lusaka branch.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80",
    status: "active",
    createdAt: "Jan 10, 2026",
    expiryDate: "Feb 10, 2026",
    analytics: {
      views: 1240,
      redeemed: 45,
      conversion: "3.6%",
      lastUsed: "2 hours ago"
    }
  };
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function VoucherDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const voucherData = await getVoucherData(id);
  
  return (
    <div className="space-y-8 animate-in fade-in-50 duration-500">
      {/* Top Navigation & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link 
          href="/profile/vouchers" 
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-bold group"
        >
          <div className="h-9 w-9 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all">
            <ChevronLeft className="h-5 w-5" />
          </div>
          Back to Vouchers
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-xl h-10 font-bold border-2 gap-2">
            <Share2 className="h-4 w-4" /> Share
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Visual Representation & Analytics */}
        <div className="lg:col-span-5 space-y-6">
        

           {/* Cover Image Preview (If exists) */}
          {voucherData.image && (
            <Card className="relative h-64 w-full rounded-[2rem] border-none overflow-hidden shadow-sm group">
              <Image 
                src={voucherData.image} 
                alt="Voucher Preview" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white/70 text-[10px] font-bold uppercase tracking-wider mb-1">Voucher Banner</p>
                <h4 className="text-white text-lg font-black">{voucherData.name}</h4>
              </div>
            </Card>
          )}

            {/* Main Ticket View */}
          <div className={cn(
            "relative overflow-hidden bg-sky-400 dark:bg-sky-600 text-white p-8 rounded-[2rem] shadow-2xl",
            "before:content-[''] before:absolute before:-left-3.75 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-8 before:bg-background before:rounded-full before:z-10",
            "after:content-[''] after:absolute after:-right-3.75 after:top-1/2 after:-translate-y-1/2 after:w-8 after:h-8 after:bg-background after:rounded-full after:z-10"
          )}>
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-start">
                <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Ticket className="h-10 w-10 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md font-bold uppercase tracking-wider">
                  {voucherData.status}
                </Badge>
              </div>

              <div className="space-y-2">
                <p className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">Special Offer</p>
                <h1 className="text-3xl font-black leading-tight">{voucherData.name}</h1>
              </div>

              <div className="flex items-end gap-2">
                <span className="text-6xl font-black leading-none">{voucherData.discount}%</span>
                <span className="text-2xl font-bold uppercase pb-1">Off</span>
              </div>

              <div className="pt-6 border-t border-dashed border-white/30 flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Company</p>
                  <p className="font-bold">{voucherData.companyName}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Expires</p>
                  <p className="font-bold">{voucherData.expiryDate}</p>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -right-8 -bottom-8 h-40 w-40 bg-white/5 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Right Column: Information Details */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Info Card */}
          <Card className="p-8 rounded-[2rem] border-none shadow-sm space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <Info className="h-6 w-6 text-primary" />
                Voucher Information
              </h2>
              <p className="text-muted-foreground leading-relaxed font-medium">
                {voucherData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider leading-none mb-1">Company</p>
                    <p className="font-black">{voucherData.companyName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider leading-none mb-1">Location</p>
                    <p className="font-black">{voucherData.cityName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider leading-none mb-1">Contact</p>
                    <p className="font-black">{voucherData.phone}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider leading-none mb-1">Validity</p>
                    <p className="font-black">{voucherData.validityDays} Days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                    <Users className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider leading-none mb-1">Inventory</p>
                    <p className="font-black">{voucherData.remaining} / {voucherData.quantity} Left</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms & Conditions Section */}
            <div className="pt-8 border-t space-y-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Terms & Conditions
              </h3>
              <div className="bg-muted/30 p-5 rounded-2xl">
                <ul className="space-y-3">
                  {voucherData.terms.split('\n').map((term, i) => (
                    <li key={i} className="flex gap-3 text-sm font-medium text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {term.replace(/^\d+\.\s*/, '')}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* CTA Section from image6.png */}
          <div className="pt-4 space-y-6 text-center">
            <div className="space-y-2">
              <p className="text-sky-500 font-bold text-sm md:text-base">
                Get the voucher and redeem at your favourite store!
              </p>
              <Button className="w-full md:w-auto md:min-w-75 h-14 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-black text-lg shadow-lg shadow-sky-200 transition-all hover:scale-[1.02] active:scale-[0.98] gap-3">
                Get Voucher
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
