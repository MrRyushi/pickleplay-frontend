"use client";
import React, { useState } from "react";

const TimeSlots = ({ selectedDate }: { selectedDate: Date }) => {
  const times = Array.from({ length: 18 }, (_, i) => 6 + i); // 6AM → 11PM
  const [selectedSlots, setSelectedSlots] = useState<number[]>([]);

  const toggleSlot = (hour: number) => {
    if (selectedSlots.length === 0) {
      // Start a new range
      setSelectedSlots([hour]);
      return;
    }

    const min = Math.min(...selectedSlots);
    const max = Math.max(...selectedSlots);

    if (hour < min - 1 || hour > max + 1) {
      // Not contiguous, ignore
      return;
    }

    if (selectedSlots.includes(hour)) {
      // Deselect from the end
      if (hour === min) {
        setSelectedSlots(selectedSlots.filter(h => h !== min));
      } else if (hour === max) {
        setSelectedSlots(selectedSlots.filter(h => h !== max));
      }
      // clicking middle of range does nothing
      return;
    }

    // Add contiguous slot
    setSelectedSlots([...selectedSlots, hour].sort((a, b) => a - b));
  };

  const formatHour = (hour: number) => {
    const suffix = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour}:00 ${suffix}`;
  };

  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {times.map(hour => {
        const isSelected = selectedSlots.includes(hour);
        return (
          <button
            key={hour}
            onClick={() => toggleSlot(hour)}
            className={`py-3 rounded-md transition ${
              isSelected
                ? "bg-green-600 text-white"
                : "bg-gray-200 hover:bg-green-500 hover:text-white text-black"
            }`}
          >
            {formatHour(hour)}
          </button>
        );
      })}
    </div>
  );
};

export default TimeSlots;