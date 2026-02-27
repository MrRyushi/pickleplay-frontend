"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

const DateButtons = ({
  selectedDate,
  setSelectedDate,
  setBaseDate,
  baseDate,
}: {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  setBaseDate: (date: Date) => void;
  baseDate: Date;
}) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dates = Array.from({ length: 4 }, (_, i) => {
    const d = new Date(baseDate);
    d.setDate(baseDate.getDate() + i);
    return d;
  });

  const handleBack = () => {
    const prev = new Date(baseDate)
    prev.setDate(baseDate.getDate() - 1)

    //if (prev < today) return

    setBaseDate(prev)
  }

  const handleForward = () => {
    const next = new Date(baseDate)
    next.setDate(baseDate.getDate() + 1)
    setBaseDate(next)
  }


  return (
    <div className="flex justify-center items-center">
      <div>
        <button onClick={handleBack} className="px-4 py-2 rounded-md">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {dates.map((date, index) => {
          const isActive = date.toDateString() === selectedDate.toDateString();

          return (
            <button
              key={index}
              onClick={() => setSelectedDate(date)}
              className={`px-4 py-2 rounded-md ${
                isActive ? "bg-green-600 text-white" : "bg-white text-black"
              }`}
            >
              {date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </button>
          );
        })}
      </div>

      <div>
        <button onClick={handleForward} className="px-4 py-2 rounded-md">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default DateButtons;
