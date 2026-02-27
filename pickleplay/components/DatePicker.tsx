"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"

export function DatePicker({ selectedDate, setSelectedDate, setBaseDate }: { selectedDate: Date | undefined; setSelectedDate: (date: Date) => void; setBaseDate: (date: Date) => void }) {
  const handleChange = (date: Date) => {
    if (!date) return;

    setSelectedDate(date);
    setBaseDate(date); // reset 4-day window
  };

  return (
    <Field className="mx-auto w-44 text-center">
      <FieldLabel htmlFor="date-picker-simple" className="">Select Date</FieldLabel>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker-simple"
            className="justify-start font-normal"
          >
            {selectedDate ? (
              format(selectedDate, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleChange}
            defaultMonth={selectedDate}
            required
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}