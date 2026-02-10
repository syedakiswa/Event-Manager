'use client'
import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <>
      <nav className="bg-transparent backdrop-blur-2xl text-white p-4 flex justify-between items-center">

        {/* Logo */}
        <div className="logo">
          <span className="font-bold text-2xl leading-none block">
            CO<span className="text-orange-400">NN</span>ECT
            <br />
            <span className="ml-5">SPHERE</span>
          </span>
        </div>

        {/* Links */}
        <ul className="flex gap-10 mt-5">
          {[
            { name: 'EVENTS', link: '/events' },
            { name: 'SPEAKERS', link: '/speakers' },
            { name: 'NETWORKING', link: '/networking' },
            { name: 'CONTACT US', link: '/contactus' },
          ].map((item, i) => (
            <li key={i} className="relative group">
              <Link
                href={item.link}
                className="transition-all duration-300 hover:text-orange-400"
              >
                {item.name}
              </Link>

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="button mt-5">
          <button className='cursor-pointer'>SAVE MY SPOT</button>
        </div>

      </nav>
    </>
  )
}
