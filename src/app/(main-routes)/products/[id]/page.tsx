import Image from "next/image";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";
import PageLayout from "@/tools/PageLayout";
import { Eye, MapPin, MessageCircle, Phone, Star, ThumbsUp } from "lucide-react";
import { notFound } from "next/navigation";
import { Share2, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Product = {
  id: string;
  image: string;
  brand: string;
  title: string;
  priceRange: string;
  rating: number;
  reviews: number;
  views: number;
  sellerName: string;
  sellerLocation: string;
};

const products: Product[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    brand: "Garmin 165",
    title: "Garmin Device 165 Music",
    priceRange: "ZMW 5,000-7,500",
    rating: 4.6,
    reviews: 18,
    views: 42,
    sellerName: "Mulabita",
    sellerLocation: "Lusaka",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80",
    brand: "Perfume",
    title: "Club de nuit",
    priceRange: "ZMW 1,500-1,600",
    rating: 4.3,
    reviews: 9,
    views: 28,
    sellerName: "Mulabita",
    sellerLocation: "Lusaka",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    brand: "Sony",
    title: "Sony WH-1000XM4 Headphones",
    priceRange: "ZMW 6,000-8,000",
    rating: 4.9,
    reviews: 27,
    views: 64,
    sellerName: "Mulabita",
    sellerLocation: "Lusaka",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    brand: "Nike",
    title: "Nike Air Max Pulse - Sport Edition",
    priceRange: "ZMW 2,200-3,500",
    rating: 4.4,
    reviews: 21,
    views: 39,
    sellerName: "Mulabita",
    sellerLocation: "Lusaka",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    brand: "Rolex",
    title: "Submariner Date Oyster Classic",
    priceRange: "ZMW 15,000-25,000",
    rating: 4.8,
    reviews: 11,
    views: 19,
    sellerName: "Mulabita",
    sellerLocation: "Lusaka",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&q=80",
    brand: "Chitenge",
    title: "Handmade African Print Suit",
    priceRange: "ZMW 850-1,200",
    rating: 4.2,
    reviews: 7,
    views: 23,
    sellerName: "Mulabita",
    sellerLocation: "Lusaka",
  },
];

const ProductDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) notFound();

  return (
    <>
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: product.title, isCurrent: true },
        ]}
      />
      
      <PageLayout paddingSize="small">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            <div className="space-y-4">
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-border bg-muted shadow-lg group">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-5 right-5 flex flex-col gap-3">
                  <button className="h-10 w-10 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-md shadow-md hover:bg-primary hover:text-white transition-all">
                    <ThumbsUp className="h-5 w-5" />
                  </button>
                  <button className="h-10 w-10 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-md shadow-md hover:bg-primary hover:text-white transition-all">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
                <Badge className="absolute bottom-5 left-5 bg-black/50 backdrop-blur-md border-none px-4 py-1.5 rounded-full text-white">
                  <Eye className="h-3 w-3 mr-2" /> {product.views} Views
                </Badge>
              </div>
            </div>

            <div className="flex flex-col space-y-6 py-2">
              <div className="space-y-2">
                <Badge variant="outline" className="rounded-full px-4 py-1 border-primary text-primary font-bold">
                  {product.brand}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                  {product.title}
                </h1>
                <div className="flex items-center gap-4 pt-1">
                  <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-amber-700">{product.rating}</span>
                    <span className="text-xs text-amber-600">({product.reviews} Reviews)</span>
                  </div>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-green-500" /> Authentic Product
                  </span>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-[2rem] border border-border/50">
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Price Range</p>
                <h2 className="text-3xl font-black text-primary">
                  {product.priceRange}
                </h2>
                <p className="text-sm text-muted-foreground mt-2">Prices are subject to vendor availability and negotiation.</p>
              </div>

              <div className="p-5 rounded-[2rem] border border-border bg-card shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl border border-primary/20">
                      {product.sellerName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{product.sellerName}</h4>
                      <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {product.sellerLocation}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 border-none">Verified Seller</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button className="rounded-2xl h-12 flex-1 font-bold gap-2">
                    <Phone className="h-4 w-4" /> Call Now
                  </Button>
                  <Button variant="outline" className="rounded-2xl h-12 flex-1 font-bold gap-2 border-primary text-primary hover:bg-primary/5">
                    <MessageCircle className="h-4 w-4" /> Message
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                 <div className="flex items-center gap-3 p-3 rounded-2xl bg-muted/20 border border-border/40 text-xs font-medium">
                    <Truck className="h-5 w-5 text-primary" />
                    <span>Fast Delivery Available</span>
                 </div>
                 <div className="flex items-center gap-3 p-3 rounded-2xl bg-muted/20 border border-border/40 text-xs font-medium">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span>Safe Payment Guarantee</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ProductDetailPage;
