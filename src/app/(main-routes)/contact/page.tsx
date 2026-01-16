/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Mail, Phone, MapPin, Send, MessageSquare, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";
import PageLayout from "@/tools/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const ContactPage = () => {
  return (
    <>
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Contact Us", isCurrent: true },
        ]}
      />

      <PageLayout paddingSize="small">
        <div className="space-y-8">
          
          {/* Header Section - Modern & Bold */}
          <div className="relative text-center space-y-6 overflow-hidden py-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -z-10" />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest animate-fade-in">
              <MessageSquare className="h-4 w-4" />
              Contact Support
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-foreground">
              Let&apos;s build <span className="text-primary italic">something</span> <br /> 
              great together.
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Have a question or need assistance? Our team is ready to support you 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Info & Experience */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-black tracking-tight">Quick Connect</h2>
                <p className="text-muted-foreground font-medium">
                  We aim to respond to all inquiries within 12 hours. For urgent matters, please use our direct hotline.
                </p>
              </div>

              <div className="space-y-4">
                <ContactCard 
                  icon={Mail} title="Email Address" 
                  value="hello@maloafrika.com" href="mailto:hello@maloafrika.com"
                  sub="Best for general inquiries"
                />
                <ContactCard 
                  icon={Phone} title="Direct Line" 
                  value="+260 970 000 000" href="tel:+260970000000"
                  sub="Mon-Fri, 8am - 5pm"
                />
                <ContactCard 
                  icon={MapPin} title="Headquarters" 
                  value="Lusaka, Zambia" href="#"
                  sub="Visit our experience center"
                />
              </div>

              {/* Social Connect */}
              <div className="bg-muted/30 p-8 rounded-[2.5rem] border border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
                 <p className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Follow Our Journey</p>
                 <div className="flex gap-3">
                   <SocialButton icon={Facebook} />
                   <SocialButton icon={Twitter} />
                   <SocialButton icon={Instagram} />
                 </div>
              </div>
            </div>

            {/* Right side: Modern Form */}
            <div className="lg:col-span-7">
              <Card className="p-8 md:p-12 rounded-[3rem] border-none bg-card shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] dark:shadow-none dark:bg-slate-900/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-primary/5 -z-10">
                  <Send className="h-32 w-32 -rotate-12" />
                </div>
                
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-widest ml-1 text-muted-foreground">Full Name</Label>
                      <Input placeholder="John Doe" className="bg-muted/50 border-none h-14 rounded-2xl focus-visible:ring-primary/20" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-widest ml-1 text-muted-foreground">Email</Label>
                      <Input type="email" placeholder="john@company.com" className="bg-muted/50 border-none h-14 rounded-2xl focus-visible:ring-primary/20" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-widest ml-1 text-muted-foreground">Subject</Label>
                    <Input placeholder="Project Inquiry" className="bg-muted/50 border-none h-14 rounded-2xl focus-visible:ring-primary/20" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-widest ml-1 text-muted-foreground">Tell us more</Label>
                    <Textarea placeholder="How can we help you?" className="bg-muted/50 border-none min-h-45 rounded-2xl focus-visible:ring-primary/20 py-5" />
                  </div>

                  <Button className="w-full h-16 rounded-[1.5rem] text-lg font-black gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                    Send Message <ArrowRight className="h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </div>

          </div>
        </div>
      </PageLayout>
    </>
  );
};

// Sub-components for better readability
const ContactCard = ({ icon: Icon, title, value, sub, href }: any) => (
  <a href={href} className="group flex items-center gap-5 p-4 rounded-3xl bg-background border border-border/50 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5">
    <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">{title}</p>
      <p className="text-lg font-black text-foreground group-hover:text-primary transition-colors tracking-tight">{value}</p>
      <p className="text-xs text-muted-foreground/60">{sub}</p>
    </div>
  </a>
);

const SocialButton = ({ icon: Icon }: any) => (
  <button className="h-12 w-12 rounded-2xl bg-background border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all hover:rotate-6 shadow-sm">
    <Icon className="h-5 w-5" />
  </button>
);

export default ContactPage;