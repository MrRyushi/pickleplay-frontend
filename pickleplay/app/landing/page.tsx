import React from 'react'

const Landing = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='text-center'>
            <h1 className='text-5xl font-bold'>Welcome to PicklePlay!</h1>
            <p className='mt-4 text-lg'>Your one-stop platform for booking pickleball courts and joining open play sessions.</p>
            <div className='mt-8 space-x-4'>
                <a href="/courts" className='bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600'>Book a Court</a>
                <a href="/openplays" className='bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600'>Join Open Plays</a>
            </div>
        </div>
    </div>
  )
}


export default Landing