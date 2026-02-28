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
  const [filteredCourts, setFilteredCourts] = useState<Court[]>([])
  const [searchTerm, setSearchTerm] = useState("")
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

  useEffect(() => {
    if (searchTerm === "") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFilteredCourts(courts);
    } else {
      const filtered = courts.filter(court => 
        court.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        court.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourts(filtered);
    }
  }, [searchTerm, courts]);

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='space-y-4 md:w-1/2'>
        <h1 className='text-4xl font-bold'>Courts</h1>
        <div>
          <input className="border border-gray-300 rounded-md p-2 w-full" placeholder="Search court name or location" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <ul className='space-y-2 grid md:grid-cols-2 gap-4'>
          {filteredCourts.map((court) => (
            <li key={court.id} className='border rounded-md p-4'>
              <h2 className='text-2xl font-semibold'>{court.name}</h2>
              <p className=''>{court.location}</p>
              <p className='font-medium'>Hourly Rate: ₱{court.hourly_rate}</p>
              <button onClick={() => router.push(`booking/${court.id}`)} className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Check Availability</button>
            </li>
          ))}
        </ul>

        <div>
          <button onClick={() => router.push("/landing")} className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'>Back</button>
        </div>
      </div>
    </div>
  )
}

export default Courts