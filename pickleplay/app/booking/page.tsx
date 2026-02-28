"use client";

import DateButtons from "@/components/DateButtons";
import { DatePicker } from "@/components/DatePicker";
import TimeSlots from "@/components/TimeSlots";
import React, { useState } from "react";

const Booking = ({params} : {params: {courtId: string}}) => {
  const courtId = params.courtId;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [baseDate, setBaseDate] = useState(new Date()); 
  const [selectedSlots, setSelectedSlots] = useState<number[]>([]);

  const pad = (n: number) => n.toString().padStart(2, "0");

  const formatLocalDateTime = (date: Date) => {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:00`;
  };

  const handleSubmit = () => {
    if (selectedSlots.length === 0) {
      alert("Please select at least one time slot.");
      return;
    }

    const sortedSlots = [...selectedSlots].sort((a, b) => a - b);

    const start = new Date(selectedDate);
    start.setHours(sortedSlots[0], 0, 0, 0);

    const end = new Date(selectedDate);
    end.setHours(sortedSlots[sortedSlots.length - 1] + 1, 0, 0, 0);

    alert(`Booking from ${formatLocalDateTime(start)} to ${formatLocalDateTime(end)}`);

    try {
      fetch("http://localhost:8080/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          start: formatLocalDateTime(start),
          end: formatLocalDateTime(end),
          courtId: courtId, // hardcoded for now,
          userId: 1, // hardcoded for now
        })
      })
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Failed to submit booking. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 md:px-0">
      <div className="space-y-4">
        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setBaseDate={setBaseDate}
        />
        <DateButtons
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setBaseDate={setBaseDate}
          baseDate={baseDate}
        />
        <TimeSlots
          selectedDate={selectedDate}
          selectedSlots={selectedSlots}
          setSelectedSlots={setSelectedSlots}
        />

        <div className="flex justify-center">
          <button
            onClick={() => setSelectedSlots([])}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-md mr-2"
          >
            Clear
          </button>
          <button
            onClick={() => handleSubmit()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
