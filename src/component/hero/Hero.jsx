import React from 'react'

export default function Hero() {
  return (
    <section>
      <div className="container mx-auto px-4 py-4 lg:py-16">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 lg:col-span-4  order-2 lg:order-1">
            <div>
              <button className='px-8 py-4 bg-white text-pink flex gap-2 text-sm font-bold shadow-lg rounded-full mx-auto lg:mx-0'>
                Explore the world!
                <img src="asset/icon/icon-bag.svg" alt="" />
              </button>
              <h1 className='font-bold text-[40px] lg:text-[69px] text-grey leading-tight text-center mt-4 mb-6 md:text-[56px] md:mb-[43px] md:mt-[43px] lg:text-start'>
                Travel <span className='text-pink'>top destination</span>  of the world
              </h1>
              <p className='md:w-3/4 mx-auto text-center text-base text-grey opacity-50 mb-8 md:text-[18px] md:mb-[43px] lg:w-full lg:text-start'>
                We always make our customer happy by providing as many as possible
              </p>
              <div className='flex flex-col md:flex-row justify-center gap-6 lg:justify-start'>
                <button className='py-6 px-8 bg-purple shadow-xl text-white rounded-full text-sm font-bold'>
                  Get Started
                </button>
                <button className='justify-center items-center flex gap-2 py-6 px-8 bg-white text-black border border-[#eeeeee] rounded-full text-sm font-bold'>
                  <img src={'asset/icon/icon-play.svg'} alt="" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 col-span-12 order-1 lg:order-2 ">
            <div>
              <img src={'asset/hero.png'} className="w-full" alt="" />
            </div>
          </div>
          <div className="col-span-12 order-3 py-8">
            <div className='flex justify-center gap-6 sm:gap-7 flex-wrap lg:justify-between'>
              <div>
                <img src={'asset/logo/tripadvisor-logo.svg'} className="h-5 sm:h-8" alt="" />
              </div>
              <div>
                <img src={'asset/logo/expedia-logo.svg'} className="h-5 sm:h-8" alt="" />
              </div>
              <div>
                <img src={'asset/logo/booking-logo.svg'} className="h-5 sm:h-8" alt="" />
              </div>
              <div>
                <img src={'asset/logo/airbnb-logo.svg'} className="h-5 sm:h-8" alt="" />
              </div>
              <div>
                <img src={'asset/logo/orbit-logo.svg'} className="h-5 sm:h-8" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
