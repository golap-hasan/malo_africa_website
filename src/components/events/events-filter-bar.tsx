"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, RotateCcw } from "lucide-react";
import { useSmartFilter } from "@/hooks/useSmartFilter";

const quickFilters = [
  { label: "Today", key: "today", value: "true" },
  { label: "This week", key: "thisWeek", value: "true" },
  { label: "Free", key: "free", value: "true" },
  { label: "Paid", key: "paid", value: "true" },
] as const;

const EventsFilterBar = () => {
  const { updateFilter, getFilter, toggleFilter, isSelected, isFilterActive, clearAll, getActiveCount } =
    useSmartFilter();

  const filterKeys = ["today", "thisWeek", "free", "paid"];

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Input
            placeholder="Search events by name or city"
            className="pl-9 h-11"
            defaultValue={getFilter("searchTerm")}
            onChange={(e) => updateFilter("searchTerm", e.target.value, 400)}
          />
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            className="rounded-full text-xs font-semibold h-9"
            onClick={() => clearAll()}
            disabled={!isFilterActive(filterKeys)}
          >
            <RotateCcw className="h-3.5 w-3.5 mr-2" />
            Reset {getActiveCount()}
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className={`rounded-full font-semibold ${
            !isFilterActive(filterKeys)
              ? "border-primary/60 bg-primary/5 text-primary"
              : "border-border/70 bg-background/60 text-muted-foreground hover:border-primary/30 hover:text-primary"
          }`}
          onClick={() => clearAll(["searchTerm"])}
        >
          All events
        </Button>

        {quickFilters.map((filter) => (
          <Button
            key={filter.label}
            type="button"
            variant="outline"
            size="sm"
            className={`rounded-full font-semibold ${
              isSelected(filter.key, filter.value)
                ? "border-primary/60 bg-primary/5 text-primary"
                : "border-border/70 bg-background/60 text-muted-foreground hover:border-primary/30 hover:text-primary"
            }`}
            onClick={() => toggleFilter(filter.key, filter.value)}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </>
  );
};

export default EventsFilterBar;
