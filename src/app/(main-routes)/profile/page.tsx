/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Camera,
  Edit3,
  User,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProfilePage = () => {
  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="rounded-3xl bg-card p-6 md:p-8 shadow-none">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Avatar Area - Simple Round */}
          <div className="relative">
            <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center border-2 shadow-sm">
              <User className="h-10 w-10 text-muted-foreground/30" />
            </div>
            <Button
              size="icon"
              className="absolute bottom-0 right-0 h-8 w-8 rounded-full border-2 border-background"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>

          {/* Info Area */}
          <div className="flex-1 text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <h1 className="text-2xl font-bold tracking-tight">Golap Hasan</h1>
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              Business Owner & Tech Enthusiast
            </p>
          </div>

          {/* Action Button */}
          <Button
            variant="outline"
            className="rounded-xl h-10 px-5 font-bold gap-2"
          >
            <Edit3 className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </Card>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatsCard label="Adverts" value="12" icon={Briefcase} />
        <StatsCard label="Events" value="04" icon={Calendar} />
        <StatsCard label="Likes" value="128" icon={User} />
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 p-6 rounded-[2rem] border-none bg-muted/20 space-y-6">
          <h3 className="font-bold text-sm uppercase tracking-widest text-primary">
            About Me
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Passionate business owner based in Lusaka, focusing on bringing
            high-quality services to the local community.
          </p>
          <div className="space-y-4 pt-2">
            <InfoItem icon={Mail} value="golap.hasan@example.com" />
            <InfoItem icon={Phone} value="+260 970 000 000" />
            <InfoItem icon={MapPin} value="Lusaka, Zambia" />
          </div>
        </Card>

        <Card className="md:col-span-2 p-8 rounded-[2rem] border-none bg-card shadow-sm flex flex-col justify-center">
          <div className="flex items-center justify-between p-4 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="space-y-1">
              <p className="font-bold">Membership Status</p>
              <p className="text-sm text-muted-foreground">
                Your premium plan expires in 240 days.
              </p>
            </div>
            <Badge className="bg-primary text-white px-4 py-1.5 rounded-xl font-bold">
              PREMIUM
            </Badge>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 border rounded-2xl border-dashed text-center">
              <p className="text-xs text-muted-foreground font-bold uppercase">
                Join Date
              </p>
              <p className="font-bold">12 Jan 2024</p>
            </div>
            <div className="p-4 border rounded-2xl border-dashed text-center">
              <p className="text-xs text-muted-foreground font-bold uppercase">
                Last Login
              </p>
              <p className="font-bold">Today, 8:45 PM</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// --- Balanced Sub-components ---

const StatsCard = ({ label, value, icon: Icon }: any) => (
  <Card className="p-6 rounded-[2rem] border-none bg-card shadow-sm flex items-center gap-4 group hover:bg-primary/5 transition-colors">
    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
      <Icon className="h-6 w-6" />
    </div>
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl font-black tracking-tight">{value}</p>
      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
        {label}
      </p>
    </div>
  </Card>
);

const InfoItem = ({ icon: Icon, value }: any) => (
  <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
    <Icon className="h-4 w-4 text-primary" />
    <span>{value}</span>
  </div>
);

export default ProfilePage;
