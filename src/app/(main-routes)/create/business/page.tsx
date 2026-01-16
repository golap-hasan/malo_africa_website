"use client";

import { Building2, Mail, Phone, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import PageLayout from "@/tools/PageLayout";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";

export default function AddBusinessAccountPage() {
  return (
    <>
      <CustomBreadcrumb
        links={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Create Business Account",
            isCurrent: true,
          },
        ]}
      />
      <PageLayout paddingSize="small">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-2">
            <div className="h-16 w-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-black tracking-tight">
              Business Information
            </h1>
            <p className="text-muted-foreground">
              Fill in the details below to register your business account.
            </p>
          </div>

          <Card className="rounded-4xl p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Business Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="businessName"
                  className="text-sm font-bold ml-1"
                >
                  Business Name
                </Label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="businessName"
                    placeholder="Enter your business name"
                    className="h-14 pl-12 rounded-2xl bg-muted/50 focus-visible:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-bold ml-1">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="business@example.com"
                    className="h-14 pl-12 rounded-2xl bg-muted/50 focus-visible:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              {/* Phone Number Section */}
              <div className="space-y-2">
                <Label className="text-sm font-bold ml-1">Mobile Number</Label>
                <div className="flex gap-3">
                  <div className="relative w-32 shrink-0">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="+260"
                      className="h-14 pl-12 rounded-2xl bg-muted/50 focus-visible:ring-primary/20 transition-all text-center"
                    />
                  </div>
                  <div className="relative flex-1">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="970 000 000"
                      className="h-14 pl-12 rounded-2xl bg-muted/50 focus-visible:ring-primary/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button className="w-full h-14 rounded-2xl text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all gap-2">
                  Next Step
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </Card>

          {/* Footer Info */}
          <p className="text-center text-sm text-muted-foreground px-8">
            By clicking Next, you agree to our{" "}
            <span className="text-primary font-bold cursor-pointer hover:underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-primary font-bold cursor-pointer hover:underline">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </PageLayout>
    </>
  );
}
