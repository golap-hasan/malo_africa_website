"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSmartFilter } from "@/hooks/useSmartFilter";
import { categories as navCategories } from "@/const/categories";

const LeftFilter = () => {
  const {
    updateFilter,
    updateBatch,
    toggleFilter,
    isSelected,
    getFilter,
    clearAll,
  } = useSmartFilter();

  const rawMode = getFilter("mode");
  const mode = rawMode || "buying";
  const minPriceParam = Number(getFilter("min_price")) || 0;
  const maxPriceParam = Number(getFilter("max_price")) || 100000;

  const [priceRange, setPriceRange] = useState([minPriceParam, maxPriceParam]);

  useEffect(() => {
    if (!rawMode) {
      updateFilter("mode", "buying");
    }
  }, [rawMode, updateFilter]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPriceRange([minPriceParam, maxPriceParam]);
  }, [minPriceParam, maxPriceParam]);

  return (
    <div className="space-y-4 bg-card p-4 rounded-2xl border sticky top-24">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <SlidersHorizontal className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold tracking-tight">Filters</h2>
      </div>

      {/* Refine Results */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold">Refine Results</h3>
        </div>
        <Button
          onClick={() => clearAll(["mode"])}
          variant="ghost"
          size="sm"
          className="h-7 px-2 text-xs text-primary"
        >
          Reset
        </Button>
      </div>

      {/* Mode Toggle: Buying / Selling using Shadcn Tabs */}
      <div>
        <Tabs
          value={mode}
          onValueChange={(val) => updateFilter("mode", val)}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 border rounded-full">
            <TabsTrigger
              value="buying"
              className="rounded-full text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Buying
            </TabsTrigger>
            <TabsTrigger
              value="selling"
              className="rounded-full text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Selling
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Accordion
        type="multiple"
        defaultValue={["category", "condition", "price"]}
        className="w-full border-t"
      >
        <AccordionItem value="category">
          <AccordionTrigger className="text-sm font-semibold">
            Category
          </AccordionTrigger>
          <AccordionContent>
            <ScrollArea className="h-64">
              <div className="space-y-2 pr-2">
                {navCategories.map((cat) => (
                  <div
                    key={cat.name}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <Checkbox
                        id={cat.name}
                        checked={isSelected("category", cat.name)}
                        onCheckedChange={() => toggleFilter("category", cat.name)}
                        className="h-4 w-4 rounded border"
                      />
                    </div>
                    <Label htmlFor={cat.name} className="text-sm cursor-pointer">
                      {cat.name}
                    </Label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-semibold">
            Price Range (BDT)
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Select Range</span>
                <span className="text-primary">
                  ৳ {priceRange[0].toLocaleString()} - ৳ {priceRange[1].toLocaleString()}
                </span>
              </div>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                onValueCommit={(val) => {
                  updateBatch({
                    min_price: val[0],
                    max_price: val[1],
                  });
                }}
                max={100000}
                step={1000}
              />
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  value={priceRange[0] || ""}
                  onChange={(e) => {
                    const val = e.target.value ? Number(e.target.value) : 0;
                    const newRange = [val, priceRange[1]];
                    setPriceRange(newRange);
                    updateFilter("min_price", val, 500);
                  }}
                  placeholder="Min"
                  className="rounded-full"
                />
                <span className="text-xs text-muted-foreground">to</span>
                <Input
                  type="number"
                  value={priceRange[1] || ""}
                  onChange={(e) => {
                    const val = e.target.value ? Number(e.target.value) : 0;
                    const newRange = [priceRange[0], val];
                    setPriceRange(newRange);
                    updateFilter("max_price", val, 500);
                  }}
                  placeholder="Max"
                  className="rounded-full"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LeftFilter;
