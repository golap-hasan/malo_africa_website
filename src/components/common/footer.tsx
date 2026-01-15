"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "../ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "Products", href: "/products" },
      { name: "Services", href: "/services" },
      { name: "News", href: "/news" },
      { name: "Events", href: "/events" },
    ],
    categories: [
      { name: "Agriculture", href: "/category/agriculture" },
      { name: "Automotive", href: "/category/automotive" },
      { name: "Education", href: "/category/education" },
      { name: "Real Estate", href: "/category/real-estate" },
      { name: "Health", href: "/category/health" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Contact Us", href: "/contact" },
      { name: "Sitemap", href: "/sitemap" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
  ];

  return (
    <footer className="bg-primary/10 border-t">
      <div className="pt-16">
        <div className="px-4 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Malo Africa Logo"
                width={180}
                height={104}
                className="h-26 w-auto object-contain dark:invert"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Malo Africa is your premier hybrid marketplace for buying and
              selling products and professional services across the continent.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`p-2 rounded-xl bg-background border hover:shadow-md transition-all ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2">
            {/* Quick Links Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold tracking-tight">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold tracking-tight">
                Top Categories
              </h3>
              <ul className="space-y-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-tight">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="space-y-3">
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  placeholder="Your email address"
                  className="pl-10 rounded-xl bg-background border-muted group-focus-within:border-primary transition-all"
                />
              </div>
              <Button className="w-full rounded-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-95">
                Subscribe Now
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-4 space-y-3 border-t">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+260 970 000 000</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Lusaka, Zambia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="mt-8 mb-2" />

        <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-xs text-center md:text-left">
            &copy; {currentYear}{" "}
            <span className="text-primary font-bold">Malo Africa</span>. All
            rights reserved. Designed for the future of Africa.
          </p>
          <div className="flex items-center gap-8">
            {footerLinks.support.slice(1, 3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
