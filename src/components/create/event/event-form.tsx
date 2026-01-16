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
  UploadCloud, 
  X,
  Plus,
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  Link as LinkIcon,
  DollarSign,
  CheckCircle2,
  Type,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const EventForm = () => {
  const [images, setImages] = useState<string[]>([]);
  const [postingType, setPostingType] = useState<"free" | "paid">("free");
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Media */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-card rounded-3xl p-6 border shadow-sm space-y-4">
            <div className="space-y-2">
              <Label className="text-lg font-semibold flex items-center gap-2">
                <UploadCloud className="h-5 w-5 text-primary" />
                Event Cover Image
              </Label>
              <p className="text-sm text-muted-foreground">
                Upload a high-quality image to attract more attendees.
              </p>
            </div>

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
              className="border-2 border-dashed border-primary/20 rounded-2xl bg-primary/5 p-10 text-center hover:bg-primary/10 transition-colors cursor-pointer group min-h-75 flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-20 w-20 rounded-full bg-background shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <UploadCloud className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-foreground relative z-10">Click to upload image</h3>
              <p className="text-sm text-muted-foreground max-w-50 mx-auto relative z-10">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
            </div>
            
            {images.length > 0 && (
              <div className="grid grid-cols-4 gap-3 pt-2">
                {images.map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-xl border border-border bg-background overflow-hidden group shadow-sm">
                    <Image 
                      src={img} 
                      alt={`Preview ${i}`} 
                      fill 
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(i);
                      }}
                      className="absolute top-1 right-1 h-6 w-6 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                <div 
                  onClick={triggerFileInput}
                  className="aspect-square rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/10 flex items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <Plus className="h-6 w-6 text-muted-foreground/70" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Event Details */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Section: Basic Details */}
          <div className="bg-card rounded-3xl p-6 md:p-8 border shadow-sm space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-4">
              <Type className="h-5 w-5 text-primary" />
              Event Details
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Event Name</Label>
                <Input placeholder="e.g. Summer Music Festival 2024" className="h-12 text-base" />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea 
                  placeholder="Tell people what your event is about..." 
                  className="min-h-30 resize-none text-base"
                />
              </div>
            </div>
          </div>

          {/* Section: Schedule & Location */}
          <div className="bg-card rounded-3xl p-6 md:p-8 border shadow-sm space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-4">
              <CalendarIcon className="h-5 w-5 text-primary" />
              Schedule & Location
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <div className="relative">
                  <Input type="date" className="pl-10 h-11" />
                  <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <div className="relative">
                  <Input type="date" className="pl-10 h-11" />
                  <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Start Time</Label>
                <div className="relative">
                  <Input type="time" className="pl-10 h-11" />
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>End Time</Label>
                <div className="relative">
                  <Input type="time" className="pl-10 h-11" />
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Location</Label>
              <Select>
                <SelectTrigger className="pl-10 relative data-[size=default]:h-11">
                   <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="ldn">London</SelectItem>
                  <SelectItem value="dhaka">Dhaka</SelectItem>
                  <SelectItem value="lusaka">Lusaka</SelectItem>
                  <SelectItem value="livingstone">Livingstone</SelectItem>
                  <SelectItem value="kitwe">Kitwe</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Section: Additional Info */}
          <div className="bg-card rounded-3xl p-6 md:p-8 border shadow-sm space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-4">
              <Globe className="h-5 w-5 text-primary" />
              Additional Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Post Validity</Label>
                <Select>
                  <SelectTrigger className="data-[size=default]:h-11">
                    <SelectValue placeholder="Select Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">7 Days</SelectItem>
                    <SelectItem value="15">15 Days</SelectItem>
                    <SelectItem value="30">30 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Event Fees</Label>
                <div className="relative">
                  <Input placeholder="0" className="pl-10 pr-12 h-11" />
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <span className="absolute right-3 top-3 text-sm text-muted-foreground font-medium bg-muted/50 px-2 rounded">ZMW</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>External Link / Registration URL</Label>
              <div className="relative">
                <Input placeholder="https://..." className="pl-10 h-11" />
                <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Section: Posting Type */}
          <div className="bg-card rounded-3xl p-6 md:p-8 border shadow-sm space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Posting Options
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                onClick={() => setPostingType("free")}
                className={cn(
                  "cursor-pointer relative flex flex-col gap-3 p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-md",
                  postingType === "free" 
                    ? "border-primary bg-primary/5 shadow-primary/10" 
                    : "border-border hover:border-primary/30 bg-card"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn("font-bold text-lg", postingType === "free" ? "text-primary" : "text-foreground")}>Free Post</span>
                  <div className={cn("h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors", postingType === "free" ? "border-primary bg-primary text-white" : "border-muted-foreground/30")}>
                    {postingType === "free" && <CheckCircle2 className="h-4 w-4" />}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Basic visibility for your event.</p>
              </div>

              <div 
                onClick={() => setPostingType("paid")}
                className={cn(
                  "cursor-pointer relative flex flex-col gap-3 p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-md",
                  postingType === "paid" 
                    ? "border-primary bg-primary/5 shadow-primary/10" 
                    : "border-border hover:border-primary/30 bg-card"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={cn("font-bold text-lg", postingType === "paid" ? "text-primary" : "text-foreground")}>Paid Post</span>
                    <span className="bg-primary/10 text-primary text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Recommended</span>
                  </div>
                  <div className={cn("h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors", postingType === "paid" ? "border-primary bg-primary text-white" : "border-muted-foreground/30")}>
                    {postingType === "paid" && <CheckCircle2 className="h-4 w-4" />}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Boosted visibility & top placement.</p>
                <div className="mt-1 pt-3 border-t border-border/50 flex justify-between items-center">
                   <span className="text-xs text-muted-foreground font-medium">Fee</span>
                   <span className="text-lg font-black text-primary">ZMW 750</span>
                </div>
              </div>
            </div>
          </div>

          <Button size="lg" className="w-full h-14 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
            Publish Event
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EventForm;
