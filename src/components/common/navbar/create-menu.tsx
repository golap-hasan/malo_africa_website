"use client";

import Link from "next/link";
import { Plus, FileText, Calendar, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const CreateMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full">
          <Plus className="h-5 w-5" />
          <span>Create</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 rounded-2xl p-2 shadow-xl border-muted/50"
      >
        <DropdownMenuLabel className="px-3 py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
          Post something new
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-muted" />
        <DropdownMenuItem
          asChild
          className="rounded-xl px-3 py-3 cursor-pointer focus:bg-primary/10 group"
        >
          <Link href="/create/post" className="flex items-center w-full">
            <div className="bg-primary/10 p-2 rounded-lg mr-3 group-focus:bg-primary/20 transition-colors">
              <FileText className="h-4 w-4 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm">Create Post</span>
              <span className="text-[10px] text-muted-foreground">
                List a product or service
              </span>
            </div>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          asChild
          className="rounded-xl px-3 py-3 cursor-pointer focus:bg-primary/10 group"
        >
          <Link href="/create/event" className="flex items-center w-full">
            <div className="bg-primary/10 p-2 rounded-lg mr-3 group-focus:bg-primary/20 transition-colors">
              <Calendar className="h-4 w-4 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm">Create Event</span>
              <span className="text-[10px] text-muted-foreground">
                Organize a new event
              </span>
            </div>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          asChild
          className="rounded-xl px-3 py-3 cursor-pointer focus:bg-primary/10 group"
        >
          <Link href="/create/voucher" className="flex items-center w-full">
            <div className="bg-primary/10 p-2 rounded-lg mr-3 group-focus:bg-primary/20 transition-colors">
              <Ticket className="h-4 w-4 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm">Create Voucher</span>
              <span className="text-[10px] text-muted-foreground">
                Add a discount offer
              </span>
            </div>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
