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
  Tag,
  Building2,
  Percent,
  FileText,
  Ticket,
  Info
} from "lucide-react";
import Image from "next/image";

const VoucherForm = () => {
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Media */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-card rounded-3xl p-6 border shadow-sm space-y-4">
            <div className="space-y-2">
              <Label className="text-lg font-semibold flex items-center gap-2">
                <UploadCloud className="h-5 w-5 text-primary" />
                Voucher Image
              </Label>
              <p className="text-sm text-muted-foreground">
                Upload an attractive image for your voucher.
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

        {/* Right Column: Voucher Details */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Section: General Info */}
          <div className="bg-card rounded-3xl p-6 md:p-8 border shadow-sm space-y-6">
             <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-4">
              <Ticket className="h-5 w-5 text-primary" />
              Voucher Information
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Voucher Name</Label>
                <div className="relative">
                  <Input placeholder="e.g. 50% Off Summer Sale" className="pl-10 h-11" />
                  <Tag className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Company Name</Label>
                  <div className="relative">
                    <Input placeholder="Enter company name" className="pl-10 h-11" />
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>City Name</Label>
                  <Select>
                    <SelectTrigger className="pl-10 relative h-11">
                       <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <SelectValue placeholder="Select city" />
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
            </div>
          </div>

          {/* Section: Offer Details */}
          <div className="bg-card rounded-3xl p-6 md:p-8 border shadow-sm space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-4">
              <Percent className="h-5 w-5 text-primary" />
              Offer Details
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Discount Offer</Label>
                <div className="relative">
                  <Input placeholder="Enter offer from 1-100" className="pl-10 pr-16 h-11 text-lg font-semibold" type="number" min="1" max="100" />
                  <Percent className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <span className="absolute right-3 top-3 text-sm text-muted-foreground font-medium bg-muted/50 px-2 rounded">Percentage</span>
                </div>
                <p className="text-xs text-muted-foreground">How much discount are you offering?</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Post Validity</Label>
                  <Select>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select Days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 Days</SelectItem>
                      <SelectItem value="15">15 Days</SelectItem>
                      <SelectItem value="30">30 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Quantity Available</Label>
                  <Select>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select Quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 Vouchers</SelectItem>
                      <SelectItem value="50">50 Vouchers</SelectItem>
                      <SelectItem value="100">100 Vouchers</SelectItem>
                      <SelectItem value="unlimited">Unlimited</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Additional Details */}
          <div className="bg-card rounded-3xl p-6 md:p-8 border shadow-sm space-y-6">
             <h3 className="text-lg font-bold flex items-center gap-2 border-b pb-4">
              <Info className="h-5 w-5 text-primary" />
              Additional Details
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea 
                  placeholder="Describe what this voucher covers..." 
                  className="min-h-25 resize-none text-base"
                />
              </div>

              <div className="space-y-2">
                <Label>Terms & Conditions</Label>
                <div className="relative">
                  <Textarea 
                    placeholder="Enter specific terms (e.g. Valid only on weekends)" 
                    className="min-h-25 resize-none pl-10 text-base"
                  />
                  <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>

          <Button size="lg" className="w-full h-14 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
            Create Voucher
          </Button>
        </div>
      </div>
    </form>
  );
};

export default VoucherForm;
