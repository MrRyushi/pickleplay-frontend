"use client"

import DateButtons from '@/components/DateButtons'
import { DatePicker } from '@/components/DatePicker'
import TimeSlots from '@/components/TimeSlots'
import React, { useState } from 'react'

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [baseDate, setBaseDate] = useState(new Date()); // start of 4-day window

  const handleSubmit = () => {
  

  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='space-y-2'>
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
        <TimeSlots selectedDate={selectedDate} />
      
        <div className='flex justify-center'>
          <button className='px-4 py-2 bg-blue-600 text-white rounded-md'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Booking