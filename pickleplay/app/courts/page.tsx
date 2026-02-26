"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Court = {
  id: number;
  name: string;
  location: string;
  hourly_rate: number;
  owner_id: number;
}

const Courts = () => {
  const [courts, setCourts] = useState<Court[]>([])
  const router = useRouter()

  useEffect(() => {
    // get all courts
    try {
    fetch('http://localhost:8080/courts')
      .then(response => response.json())
      .then(data => setCourts(data))
    } catch (error) {
      console.error('Error fetching courts:', error)
    }
  }, [])

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='space-y-4 w-1/2'>
        <h1 className='text-4xl font-bold'>Courts</h1>
        <ul className='space-y-2'>
          {courts.map((court) => (
            <li key={court.id} className='border rounded-md p-4'>
              <h2 className='text-2xl font-semibold'>{court.name}</h2>
              <p className='text-gray-600'>{court.location}</p>
              <p className='text-gray-800 font-medium'>Hourly Rate: ₱{court.hourly_rate}</p>
              <button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Check Availability</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Courts