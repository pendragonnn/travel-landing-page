"use client"

import React, { useState } from 'react'

export default function Navbar() {
  const [isMoreClicked, setIsMoreClicked] = useState(false)
  const [isNavActive, setIsNavActive] = useState(false)

  const onMoreClickHandler = () => {
    setIsMoreClicked(!isMoreClicked)
  }

  const onNavActiveHandler = () => {
    setIsNavActive(!isNavActive)
    setIsMoreClicked(false)
  }

  return (
    <nav className='py-9 px-4'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <img src={'asset/logo.png'} alt="" className='order-1 sm:order-2' />
          <img src={'asset/toggle.svg'} alt="" className='cursor-pointer order-2 sm-order-1 lg:hidden' onClick={() => onNavActiveHandler()} />
          <div className='order-2 hidden lg:block'>
            <ul className='flex gap-16'>
              <li className='text-grey font-bold text-sm'>
                <a href="">Home</a>
              </li>
              <li className='text-grey font-bold text-sm opacity-50'>
                <a href="">Discover</a>
              </li>
              <li className='text-grey font-bold text-sm opacity-50'>
                <a href="">Special Deals</a>
              </li>
              <li className='text-grey font-bold text-sm opacity-50'>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className='order-3 hidden sm:block'>
            <button className='grow bg-white px-8 py-4 font-bold text-grey rounded-full text-sm'>Login</button>
            <button className='grow bg-purple px-8 py-4 font-bold text-white rounded-full text-sm'>Sign Up</button>
          </div>

        </div>
      </div>
      {isNavActive && (
        <div className='z-50 fixed bottom-0 left-0 bg-white right-0 p-4 border lg:hidden'>
          <ul className='flex justify-between'>
            <li>
              <button className='flex justify-center flex-col items-center gap-1 text-purple'>
                <ion-icon name="home-outline"></ion-icon>
                <span className='text-base font-bold text-ungu'>Home</span>
              </button>
            </li>
            <li>
              <button className='flex justify-center flex-col items-center gap-1 opacity-50'>
                <ion-icon name="albums-outline" className='text-2xl'></ion-icon>
                <span className='text-grey text-base font-normal'>Discover</span>
              </button>
            </li>
            <li>
              <button className='flex justify-center flex-col items-center gap-1 opacity-50'>
                <ion-icon name="sparkles-outline" className='text-2xl'></ion-icon>
                <span className='text-grey text-base font-normal'>Special</span>
              </button>
            </li>
            <li>
              <button className='flex justify-center flex-col items-center gap-1 opacity-50'>
                <ion-icon name="megaphone-outline" className='text-2xl'></ion-icon>
                <span className='text-grey text-base font-normal'>Contact</span>
              </button>
            </li>
            <li>
              <button className='flex justify-center flex-col items-center gap-1 opacity-50' onClick={() => onMoreClickHandler()}>
                <ion-icon name="menu-outline" className='text-2xl'></ion-icon>
                <span className='text-grey text-base font-normal'>More</span>
              </button>
            </li>
          </ul>

          {isMoreClicked && (
            <div className='absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 w-3/4'>
              <button className='grow bg-white px-8 py-4 font-bold text-grey rounded-full text-sm'>Login</button>
              <button className='grow bg-purple px-8 py-4 font-bold text-white rounded-full text-sm'>Sign Up</button>
            </div>
          )}

        </div>
      )}
    </nav>
  )
}
