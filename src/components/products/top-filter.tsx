"use client";

import { Filter, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSmartFilter } from "@/hooks/useSmartFilter";
import { ZAMBIAN_CITIES } from "@/const/locations";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LeftFilter from "./left-filter";

const TopFilter = () => {
  const { updateFilter, getFilter } = useSmartFilter();

  return (
    <div className="flex flex-col gap-3 mb-4 md:flex-row md:items-center md:gap-4">
      <div className="flex items-center gap-2">
        <Select
          defaultValue={getFilter("location") || "all"}
          onValueChange={(val) =>
            updateFilter("location", val === "all" ? null : val)
          }
        >
          <SelectTrigger className="md:w-50 h-12 rounded-full bg-muted/30 border-none focus:ring-2 focus:ring-primary/20 px-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <SelectValue placeholder="Location" />
            </div>
          </SelectTrigger>

          <SelectContent className="rounded-xl max-h-75">
            <SelectItem value="all" className="font-bold">
              All Locations
            </SelectItem>
            {ZAMBIAN_CITIES.sort().map((city) => (
              <SelectItem
                key={city}
                value={city.toLowerCase().replace(/\s+/g, "-")}
              >
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="rounded-full md:hidden">
              <Filter />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[80%] overflow-hidden md:hidden"
          >
            <SheetHeader className="px-4 pt-4 pb-2 border-b">
              <SheetTitle className="text-sm font-semibold">
                Filters
              </SheetTitle>
            </SheetHeader>
            <div className="flex-1 overflow-y-auto p-4">
              <LeftFilter />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="relative w-full group">
        <Input
          defaultValue={getFilter("searchTerm")}
          onChange={(e) => updateFilter("searchTerm", e.target.value, 500)}
          placeholder="Search products..."
          className="rounded-full"
        />
        <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary p-1.5 rounded-full cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-sm">
          <Search className="h-4 w-4 text-primary-foreground" />
        </div>
      </div>
    </div>
  );
};

export default TopFilter;
