/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo } from "react";
import { 
  HelpCircle, Search, MessageCircle, Shield, CreditCard, 
  Calendar, ShoppingBag, Building2, Info, LifeBuoy, 
} from "lucide-react";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";
import PageLayout from "@/tools/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { FAQ_DATA } from "@/components/faq/faq-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, any> = {
  General: Info,
  Account: Shield,
  Business: Building2,
  Events: Calendar,
  Marketplace: ShoppingBag,
  Payments: CreditCard,
  Security: Shield,
};

const FaqPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(FAQ_DATA.map((faq) => faq.category)))];
  }, []);

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <CustomBreadcrumb
        links={[
          { name: "Home", href: "/" },
          { name: "Help Center", isCurrent: true },
        ]}
      />

      <PageLayout paddingSize="small">
        <div className="space-y-8">
          
          {/* Header Section */}
          <div className="text-center space-y-6 relative py-10">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full -z-10 h-32 w-full top-10" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
              <HelpCircle className="h-3.5 w-3.5" />
              Support Resources
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground">
              Hello, how can we <br /><span className="text-primary">help you?</span>
            </h1>
            
            <div className="relative max-w-2xl mx-auto mt-10 group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Search for articles, topics or keywords..."
                className="pl-14 h-16 rounded-3xl border-none bg-card shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] text-lg focus-visible:ring-primary/20 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Quick Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-2xl text-sm font-bold transition-all border",
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="min-h-100">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full space-y-4">
                {filteredFaqs.map((faq) => {
                  const Icon = categoryIcons[faq.category] || Info;
                  return (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="border-none bg-card/50 rounded-[2rem] px-6 transition-all hover:bg-card overflow-hidden group data-[state=open]:shadow-xl data-[state=open]:shadow-primary/5 data-[state=open]:bg-card"
                    >
                      <AccordionTrigger className="hover:no-underline py-7 text-lg md:text-xl font-bold text-left gap-4 group-data-[state=open]:text-primary">
                        <div className="flex items-center gap-5">
                          <div className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center shrink-0 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-all duration-500">
                            <Icon className="h-6 w-6" />
                          </div>
                          <span className="leading-tight tracking-tight">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8 pl-16 pr-6">
                        <div className="prose prose-sm dark:prose-invert">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            ) : (
              <div className="text-center py-20 bg-muted/20 rounded-[3rem] border-2 border-dashed border-border/50">
                <Search className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-2xl font-black">No matching questions</h3>
                <p className="text-muted-foreground mt-2">Try using different keywords or clear the filters.</p>
                <Button variant="link" onClick={() => {setSearchTerm(""); setActiveCategory("All")}} className="mt-4 text-primary font-bold">
                  Reset everything
                </Button>
              </div>
            )}
          </div>

          {/* Premium Support Footer */}
          <div className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 text-center space-y-8">
            <div className="absolute top-0 right-0 p-10 opacity-10">
               <HelpCircle className="h-64 w-64 text-white" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-4xl font-black text-white tracking-tight">Still stuck?</h3>
              <p className="text-slate-400 max-w-lg mx-auto text-lg">
                Our support experts are available 24/7 to help you with any issues you might have.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Button asChild size="lg" className="rounded-2xl px-10 h-16 text-lg font-black shadow-2xl transition-transform hover:scale-105">
                  <Link href="/contact">
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Start Live Chat
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-2xl px-10 h-16 text-lg font-black bg-transparent border-slate-700 text-white hover:bg-slate-800 transition-transform hover:scale-105">
                  <LifeBuoy className="mr-3 h-6 w-6 text-primary" />
                  Technical Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default FaqPage;