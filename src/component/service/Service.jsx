import React from 'react'

export default function Service() {
  return (
    <section className='py-16 lg:px-5 overflow-x-hidden'>
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-12 items-center">
          <div className="lg:col-span-4 col-span-12 flex flex-col gap-4">
            <span className='text-pink fw-bold leading-tight text-center lg:text-start text-base sm:text-2xl'>
              SERVICE
            </span>
            <h1 className='font-bold sm:text-5xl text-3xl leading-tight text-grey text-center lg:text-start'>Our top value categories for you</h1>
          </div>
          <div className="lg:col-span-8 col-span-12 flex flex-col sm:flex-row gap-5 lg:w-screen sm:w-auto sm:mt-16 mt-8 lg:mt-0">
            <div className='flex flex-col items-center justify-center gap-16 sm:w-[350px] w-full rounded-[32px] border lg:p-16 p-10  shadow-lg'>
              <div>
                <img src={'asset/icon/best-tour-guide.png'} alt="" />
              </div>
              <div className='flex gap-8 flex-col'>
                  <h2 className='font-bold text-grey text-lg text-center'>Best Tour Guide</h2>
                  <p className='text-lg leading-relaxed text-grey opacity-50 text-center'>What looked like a small patch of purple grass, above five feet.</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-16 sm:w-[350px] w-full rounded-[32px] border lg:p-16 p-10  shadow-lg'>
              <div>
                <img src={'asset/icon/booking.png'} alt="" />
              </div>
              <div className='flex gap-8 flex-col'>
                  <h2 className='font-bold text-grey text-lg text-center'>Easy Booking</h2>
                  <p className='text-lg leading-relaxed text-grey opacity-50 text-center'>Square, was moving across the sand in their direction.</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-16 sm:w-[350px] w-full rounded-[32px] border lg:p-16 p-10  shadow-lg'>
              <div>
                <img src={'asset/icon/weather.png'} alt="" />
              </div>
              <div className='flex gap-8 flex-col'>
                  <h2 className='font-bold text-grey text-lg text-center'>Weather Forecast</h2>
                  <p className='text-lg leading-relaxed text-grey opacity-50 text-center'>What looked like a small patch of purple glass above five feet.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
