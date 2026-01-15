import Image from "next/image";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";
import PageLayout from "@/tools/PageLayout";
import { 
  Eye, MapPin, MessageCircle, Phone, Star, 
  ThumbsUp, Share2, Verified, Calendar, Clock 
} from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Service = {
  id: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  title: string;
  location: string;
  priceRange: string;
  views: number;
  providerName: string;
};

const services: Service[] = [
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
    views: 32,
    providerName: "Kinah Malama Kalisilira",
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
    views: 18,
    providerName: "Kinah Malama Kalisilira",
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
    views: 27,
    providerName: "Kinah Malama Kalisilira",
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
    views: 41,
    providerName: "Kinah Malama Kalisilira",
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
    views: 15,
    providerName: "Kinah Malama Kalisilira",
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
    views: 55,
    providerName: "Kinah Malama Kalisilira",
  },
];

const ServiceDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const service = services.find((item) => item.id === id);

  if (!service) notFound();

  return (
    <>
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.category, isCurrent: true },
        ]}
      />
      
      <PageLayout paddingSize="small">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="relative h-75 md:h-100 w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <Badge className="bg-primary hover:bg-primary text-white border-none px-4 py-1">
                  {service.category}
                </Badge>
                <h1 className="text-2xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
                  {service.title}
                </h1>
              </div>
              <div className="flex gap-3">
                 <button className="h-12 w-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/40 transition-all">
                    <ThumbsUp className="h-5 w-5" />
                 </button>
                 <button className="h-12 w-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/40 transition-all">
                    <Share2 className="h-5 w-5" />
                 </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card border border-border p-6 md:p-8 rounded-[2rem] shadow-sm">
                <h3 className="text-xl font-bold mb-4">About this Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.title} We provide top-notch {service.category.toLowerCase()} solutions tailored to your needs. 
                  Our approach ensures that every client receives personalized attention and high-quality results.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                   <div className="flex items-center gap-3 p-4 rounded-2xl bg-muted/30 border border-border/50">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground">Response Time</p>
                        <p className="text-sm font-semibold text-foreground">Fast (under 2 hrs)</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3 p-4 rounded-2xl bg-muted/30 border border-border/50">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-muted-foreground">Availability</p>
                        <p className="text-sm font-semibold text-foreground">Mon - Sat</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-primary/5 border border-primary/10 rounded-[2rem]">
                 <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-tighter">Estimated Starting Price</p>
                    <p className="text-2xl font-black text-primary">{service.priceRange}</p>
                 </div>
                 <div className="text-right">
                    <div className="flex items-center gap-1 justify-end">
                       <Eye className="h-4 w-4 text-muted-foreground" />
                       <span className="text-sm font-medium">{service.views} Views</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">Prices vary by project scope</p>
                 </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border p-6 rounded-[2rem] shadow-md sticky top-6">
                <div className="text-center space-y-4">
                  <div className="relative mx-auto h-24 w-24">
                    <div className="h-full w-full rounded-3xl bg-primary/10 flex items-center justify-center text-primary text-3xl font-black border-2 border-primary/20">
                      {service.providerName.charAt(0)}
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-background p-1 rounded-full shadow-lg">
                       <Verified className="h-6 w-6 text-blue-500 fill-blue-500" />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold">{service.providerName}</h4>
                    <p className="text-xs text-muted-foreground flex items-center justify-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" /> {service.location}, Zambia
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 py-2">
                    <div className="flex items-center bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
                      <span className="font-bold text-amber-700">{service.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({service.reviews} Reviews)</span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 pt-2">
                    <Button className="w-full h-12 rounded-2xl font-bold gap-2">
                      <Phone className="h-4 w-4" /> Call Provider
                    </Button>
                    <Button variant="outline" className="w-full h-12 rounded-2xl font-bold gap-2 border-primary text-primary hover:bg-primary/5">
                      <MessageCircle className="h-4 w-4" /> Live Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ServiceDetailPage;