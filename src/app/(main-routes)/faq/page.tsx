"use client";

import { useState } from "react";
import { HelpCircle, Search, MessageCircle, Shield, CreditCard, Calendar, ShoppingBag, Building2, Info, LucideIcon } from "lucide-react";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";
import PageLayout from "@/tools/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { FAQ_DATA } from "@/components/faq/faq-data";

const categoryIcons: Record<string, LucideIcon> = {
  General: Info,
  Account: Shield,
  Business: Building2,
  Events: Calendar,
  Marketplace: ShoppingBag,
  Support: MessageCircle,
  Payments: CreditCard,
  Security: Shield,
};

const FaqPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = FAQ_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <CustomBreadcrumb
        links={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "FAQ",
            href: "/faq",
            isCurrent: true,
          },
        ]}
      />
      
      <PageLayout paddingSize="small">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-2xl mb-2">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
              How can we <span className="text-primary">help you?</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about Malo Afrika. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
            </p>
            
            <div className="relative max-w-xl mx-auto mt-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for questions..." 
                className="pl-12 h-14 rounded-2xl border-border bg-card/50 text-lg shadow-sm focus:ring-primary/20 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-primary/5">
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {filteredFaqs.map((faq) => {
                    const Icon = categoryIcons[faq.category] || Info;
                    return (
                      <AccordionItem 
                        key={faq.id} 
                        value={faq.id}
                        className="border border-border/50 rounded-2xl px-4 overflow-hidden transition-all data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"
                      >
                        <AccordionTrigger className="hover:no-underline py-5 text-base md:text-lg font-bold text-left gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center shrink-0 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors">
                              <Icon className="h-5 w-5" />
                            </div>
                            <span>{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pl-14">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl font-bold">No results found</p>
                    <p className="text-muted-foreground">
                      We couldn&apos;t find any questions matching &quot;{searchTerm}&quot;
                    </p>
                  </div>
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="text-primary font-bold hover:underline"
                  >
                    Clear search and show all
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold">Still have questions?</h3>
            <p className="text-muted-foreground">
              Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button className="px-8 h-12 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity">
                Contact Us
              </button>
              <button className="px-8 h-12 rounded-xl bg-background border border-border font-bold hover:bg-muted transition-colors">
                Support Center
              </button>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default FaqPage;