"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { 
  ShoppingBag, 
  Briefcase, 
  UploadCloud, 
  CheckCircle2, 
  MapPin, 
  Calendar,
  DollarSign,
  Layers,
  Plus,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type PostIntent = "buying" | "selling";
type PaymentOption = "free" | "paid" | "premium";

const ServiceForm = () => {
   const [intent, setIntent] = useState<PostIntent>("selling");
   const [paymentOption, setPaymentOption] = useState<PaymentOption>("free");
   const [images, setImages] = useState<string[]>([]);
   const fileInputRef = useRef<HTMLInputElement>(null);

   const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
     if (e.target.files && e.target.files.length > 0) {
       const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
       setImages(prev => [...prev, ...newImages]);
     }
   };

   const removeImage = (index: number) => {
     setImages(prev => prev.filter((_, i) => i !== index));
   };

   const triggerFileInput = () => {
     fileInputRef.current?.click();
   };

   return (
    <form className="animate-in fade-in-50 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Media & Core Info */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Intent Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Service Type</Label>
            <div className="grid grid-cols-2 gap-4">
              <div 
                onClick={() => setIntent("selling")}
                className={cn(
                  "cursor-pointer relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200",
                  intent === "selling" 
                    ? "border-primary bg-primary/5 text-primary" 
                    : "border-border hover:border-muted-foreground/20 bg-card"
                )}
              >
                {intent === "selling" && <div className="absolute top-2 right-2"><CheckCircle2 className="h-4 w-4 text-primary" /></div>}
                <Briefcase className="h-6 w-6" />
                <span className="font-semibold text-sm">Providing Service</span>
              </div>
              <div 
                onClick={() => setIntent("buying")}
                className={cn(
                  "cursor-pointer relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200",
                  intent === "buying" 
                    ? "border-primary bg-primary/5 text-primary" 
                    : "border-border hover:border-muted-foreground/20 bg-card"
                )}
              >
                {intent === "buying" && <div className="absolute top-2 right-2"><CheckCircle2 className="h-4 w-4 text-primary" /></div>}
                <ShoppingBag className="h-6 w-6" />
                <span className="font-semibold text-sm">Seeking Service</span>
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Portfolio / Images</Label>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              multiple 
              onChange={handleFileSelect}
            />
            <div 
              onClick={triggerFileInput}
              className="border-2 border-dashed border-muted-foreground/25 rounded-3xl bg-muted/5 p-8 text-center hover:bg-muted/10 transition-colors cursor-pointer group min-h-75 flex flex-col items-center justify-center"
            >
              <div className="h-16 w-16 rounded-full bg-background shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <UploadCloud className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Upload portfolio images</h3>
               <p className="text-sm text-muted-foreground max-w-50 mx-auto">
                Showcase your work (max. 5MB per file)
              </p>
            </div>
            
            {images.length > 0 && (
              <div className="grid grid-cols-4 gap-3 mt-4">
                {images.map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-xl border border-border bg-card overflow-hidden group">
                    <Image 
                      src={img} 
                      alt={`Preview ${i}`} 
                      fill 
                      className="object-cover"
                    />
                    <button 
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute top-1 right-1 h-6 w-6 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                <div 
                  onClick={triggerFileInput}
                  className="aspect-square rounded-xl border border-border bg-card flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors"
                >
                  <Plus className="h-5 w-5 text-muted-foreground/50" />
                </div>
              </div>
            )}
            
            {images.length === 0 && (
              <div className="grid grid-cols-4 gap-3 mt-4">
                 {[1, 2, 3, 4].map((_, i) => (
                   <div key={i} onClick={triggerFileInput} className="aspect-square rounded-xl border border-border bg-card flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors">
                      <Plus className="h-5 w-5 text-muted-foreground/50" />
                   </div>
                 ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Basic Details */}
          <div className="space-y-6 bg-card p-6 rounded-3xl border shadow-sm">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              Service Details
            </h2>
            
            <div className="space-y-2">
              <Label htmlFor="service-name">Service Title</Label>
              <Input id="service-name" placeholder="e.g. Professional Web Development" className="h-11 rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description & Experience</Label>
              <Textarea 
                id="description" 
                placeholder="Describe your service, experience, and what you offer..." 
                className="min-h-30 rounded-xl resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select>
                  <SelectTrigger className="h-11 rounded-xl">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT & Software</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                    <SelectItem value="design">Design & Creative</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Service Type</Label>
                <Select>
                  <SelectTrigger className="h-11 rounded-xl">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="onsite">On-Site</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Pricing & Location */}
          <div className="space-y-6 bg-card p-6 rounded-3xl border shadow-sm">
             <h2 className="text-lg font-semibold flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Pricing
            </h2>

            <div className="space-y-2">
               <Label>Rate (ZMW)</Label>
               <div className="flex items-center gap-4">
                 <div className="relative flex-1">
                    <Input placeholder="Amount" className="rounded-xl" type="number" />
                 </div>
                 <div className="w-30">
                    <Select defaultValue="fixed">
                      <SelectTrigger className="h-11 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fixed">Fixed</SelectItem>
                        <SelectItem value="hourly">/ Hour</SelectItem>
                        <SelectItem value="daily">/ Day</SelectItem>
                      </SelectContent>
                    </Select>
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label>Location</Label>
                <Select>
                  <SelectTrigger className="h-11 rounded-xl">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <SelectValue placeholder="Select City" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lusaka">Lusaka</SelectItem>
                    <SelectItem value="kitwe">Kitwe</SelectItem>
                    <SelectItem value="livingstone">Livingstone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Availability</Label>
                <Select>
                   <SelectTrigger className="h-11 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <SelectValue placeholder="When available?" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="weekends">Weekends Only</SelectItem>
                    <SelectItem value="book">By Booking</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

           {/* Payment Options */}
          <div className="space-y-4">
             <Label className="text-base">Promotion Options</Label>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  onClick={() => setPaymentOption("free")}
                  className={cn(
                    "cursor-pointer rounded-2xl border p-4 transition-all hover:shadow-md",
                    paymentOption === "free" ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"
                  )}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold">Free</span>
                    {paymentOption === "free" && <CheckCircle2 className="h-5 w-5 text-primary" />}
                  </div>
                  <p className="text-xs text-muted-foreground">Standard listing visibility.</p>
                </div>

                 <div 
                  onClick={() => setPaymentOption("paid")}
                  className={cn(
                    "cursor-pointer rounded-2xl border p-4 transition-all hover:shadow-md",
                    paymentOption === "paid" ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"
                  )}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold">Boost (750)</span>
                    {paymentOption === "paid" && <CheckCircle2 className="h-5 w-5 text-primary" />}
                  </div>
                  <p className="text-xs text-muted-foreground">Highlighted in service directory.</p>
                </div>

                 <div 
                  onClick={() => setPaymentOption("premium")}
                  className={cn(
                    "cursor-pointer rounded-2xl border p-4 transition-all hover:shadow-md",
                    paymentOption === "premium" ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"
                  )}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold">Premium</span>
                    {paymentOption === "premium" && <CheckCircle2 className="h-5 w-5 text-primary" />}
                  </div>
                  <p className="text-xs text-muted-foreground">Top spot + Social Media blast.</p>
                </div>
             </div>
          </div>

          <div className="pt-4">
            <Button size="lg" className="w-full md:w-auto md:min-w-50 h-12 text-base rounded-xl font-semibold shadow-lg shadow-primary/20">
              Publish Service
            </Button>
          </div>

        </div>
      </div>
    </form>
   );
}

export default ServiceForm;