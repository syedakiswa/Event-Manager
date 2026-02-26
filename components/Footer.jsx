'use client'
import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <>
    <footer className='min-h-[50vh] mt-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black border-t border-gray-800 px-8 md:px-20 py-16'>
        <div className='max-w-7xl mx-auto'>
          {/* Main Footer Content */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
            
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="logo">
        <Link href='/'>
          <span className="font-bold text-2xl leading-none block">
            CO<span className="text-orange-400">NN</span>ECT
            <br />
            <span className="ml-5">SPHERE</span>
          </span></Link>
        </div>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Connect with industry leaders, discover amazing events, and expand your professional network.
              </p>
              {/* Social Media Icons */}
              <div className='flex gap-4 pt-4'>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className='font-bold text-xl mb-6 text-white'>Quick Links</h2>
              <ul className='space-y-3'>
                <li>
                  <Link href='/' className='text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group'>
                    <span className='w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300'></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='/events' className='text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group'>
                    <span className='w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300'></span>
                    Events
                  </Link>
                </li>
                <li>
                  <Link href='/speakers' className='text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group'>
                    <span className='w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300'></span>
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link href='/networking' className='text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group'>
                    <span className='w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300'></span>
                    Networking
                  </Link>
                </li>
                <li>
                  <Link href='/contactus' className='text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group'>
                    <span className='w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300'></span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h2 className='font-bold text-xl mb-6 text-white'>Resources</h2>
              <ul className='space-y-3'>
                <li>
                  <Link href='/about' className='text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group'>
                    <span className='w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300'></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href='/blog' className='text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group'>
                    <span className='w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300'></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href='/faq' className='text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group'>
                    <span className='w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300'></span>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href='/privacy' className='text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group'>
                    <span className='w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300'></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href='/terms' className='text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group'>
                    <span className='w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300'></span>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className='font-bold text-xl mb-6 text-white'>Stay Updated</h2>
              <p className='text-gray-400 text-sm mb-4'>
                Subscribe to our newsletter for the latest events and updates.
              </p>
              <div className='space-y-3'>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors duration-300'
                />
                <button className='w-full bg-orange-500   text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8'></div>

          {/* Bottom Footer */}
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-500 text-sm'>
              © {new Date().getFullYear()} ConnectSphere. All rights reserved.
            </p>
            <div className='flex gap-6 text-sm'>
              <Link href='/privacy' className='text-gray-500 hover:text-orange-400 transition-colors duration-300'>
                Privacy
              </Link>
              <Link href='/terms' className='text-gray-500 hover:text-orange-400 transition-colors duration-300'>
                Terms
              </Link>
              <Link href='/cookies' className='text-gray-500 hover:text-orange-400 transition-colors duration-300'>
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
