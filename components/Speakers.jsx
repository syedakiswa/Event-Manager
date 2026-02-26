import React from 'react'
import Image from 'next/image'

export default function Speakers() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-black"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="font-bold text-5xl md:text-8xl text-white tracking-wider mb-6">
            OUR <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">SPEAKERS</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Meet the industry leaders, talented artists, and expert educators shaping the future
          </p>
          <div className="w-32 h-1 bg-orange-500 mx-auto mt-6" />
        </div>
      </section>

      {/* Singers Section */}
      <section className="w-full py-16 px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl md:text-6xl text-white tracking-wider">
            SINGERS
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4" />
        </div>

        <div className="relative max-w-7xl mx-auto group/container">
          {/* Left Arrow */}
          <button 
            onClick={() => {
              const container = document.querySelector('.singers-scroll');
              container.scrollBy({ left: -350, behavior: 'smooth' });
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover/container:opacity-100 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => {
              const container = document.querySelector('.singers-scroll');
              container.scrollBy({ left: 350, behavior: 'smooth' });
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover/container:opacity-100 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="singers-scroll overflow-x-auto hide-scrollbar scroll-smooth">
            <div className="flex gap-6 pb-6 min-w-max px-4">
              
              {/* Singer 1 */}
              <div className="relative group flex-shrink-0 w-[280px] md:w-[320px]">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=500&fit=crop" alt="Arijit Singh" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-2xl mb-2">Arijit Singh</h3>
                    <p className="text-gray-300 text-sm mb-4">Indian Singer</p>
                    
                    <div className="flex gap-3">
                      <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                      <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Singer 2 */}
              <div className="relative group flex-shrink-0 w-[280px] md:w-[320px]">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop" alt="Shreya Ghoshal" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-2xl mb-2">Shreya Ghoshal</h3>
                    <p className="text-gray-300 text-sm mb-4">Playback Singer</p>
                    
                    <div className="flex gap-3">
                      <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                      <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Singer 3 */}
              <div className="relative group flex-shrink-0 w-[280px] md:w-[320px]">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" alt="Darshan Raval" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-2xl mb-2">Darshan Raval</h3>
                    <p className="text-gray-300 text-sm mb-4">Indian Singer</p>
                    
                    <div className="flex gap-3">
                      <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                      <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Singer 4 */}
              <div className="relative group flex-shrink-0 w-[280px] md:w-[320px]">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop" alt="AR Rahman" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-2xl mb-2">A.R. Rahman</h3>
                    <p className="text-gray-300 text-sm mb-4">Music Composer</p>
                    
                    <div className="flex gap-3">
                      <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                      <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Singer 5 */}
              <div className="relative group flex-shrink-0 w-[280px] md:w-[320px]">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop" alt="Neha Kakkar" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-2xl mb-2">Neha Kakkar</h3>
                    <p className="text-gray-300 text-sm mb-4">Bollywood Singer</p>
                    
                    <div className="flex gap-3">
                      <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                      <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded flex items-center justify-center transition-all duration-300">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Industry Speakers Section */}
      <section className="w-full py-16 px-4 md:px-8 bg-gray-950">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl md:text-6xl text-white tracking-wider">
            INDUSTRY SPEAKERS
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Speaker 1 */}
          <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300">
            <div className="relative h-[350px]">
              <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" alt="Dr. Sarah Chen" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-bold text-2xl mb-1">Dr. Sarah Chen</h3>
              <p className="text-orange-400 text-sm mb-2">Chief Technology Officer</p>
              <p className="text-gray-300 text-sm">AI & Cloud Computing Expert</p>
            </div>
          </div>

          {/* Speaker 2 */}
          <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300">
            <div className="relative h-[350px]">
              <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" alt="Marcus Johnson" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-bold text-2xl mb-1">Marcus Johnson</h3>
              <p className="text-orange-400 text-sm mb-2">Product Designer</p>
              <p className="text-gray-300 text-sm">UX/UI Design Specialist</p>
            </div>
          </div>

          {/* Speaker 3 */}
          <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300">
            <div className="relative h-[350px]">
              <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" alt="Elena Rodriguez" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-bold text-2xl mb-1">Elena Rodriguez</h3>
              <p className="text-orange-400 text-sm mb-2">VP of Engineering</p>
              <p className="text-gray-300 text-sm">Scalable Solutions Architect</p>
            </div>
          </div>

          {/* Speaker 4 */}
          <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300">
            <div className="relative h-[350px]">
              <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="James Park" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-bold text-2xl mb-1">James Park</h3>
              <p className="text-orange-400 text-sm mb-2">Startup Founder</p>
              <p className="text-gray-300 text-sm">Entrepreneurship & Innovation</p>
            </div>
          </div>

          {/* Speaker 5 */}
          <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300">
            <div className="relative h-[350px]">
              <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" alt="Lisa Wong" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-bold text-2xl mb-1">Lisa Wong</h3>
              <p className="text-orange-400 text-sm mb-2">Data Scientist</p>
              <p className="text-gray-300 text-sm">Machine Learning & Analytics</p>
            </div>
          </div>

          {/* Speaker 6 */}
          <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300">
            <div className="relative h-[350px]">
              <Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" alt="David Kumar" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-bold text-2xl mb-1">David Kumar</h3>
              <p className="text-orange-400 text-sm mb-2">Marketing Director</p>
              <p className="text-gray-300 text-sm">Digital Strategy & Growth</p>
            </div>
          </div>

        </div>
      </section>

      {/* Music Teachers Section */}
      <section className="w-full py-16 px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl md:text-6xl text-white tracking-wider">
            MUSIC TEACHERS
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Teacher 1 */}
          <div className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative h-[300px]">
              <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" alt="Ravi Shankar" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            </div>
            
            <div className="p-6 text-center">
              <h3 className="font-bold text-xl text-white mb-2">Ravi Shankar</h3>
              <p className="text-orange-400 text-sm mb-2">Classical Guitar</p>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                15+ Years Experience
              </div>
            </div>
          </div>

          {/* Teacher 2 */}
          <div className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative h-[300px]">
              <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop" alt="Priya Sharma" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            </div>
            
            <div className="p-6 text-center">
              <h3 className="font-bold text-xl text-white mb-2">Priya Sharma</h3>
              <p className="text-orange-400 text-sm mb-2">Vocal Training</p>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                12 Years Experience
              </div>
            </div>
          </div>

          {/* Teacher 3 */}
          <div className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative h-[300px]">
              <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop" alt="Ahmed Ali" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            </div>
            
            <div className="p-6 text-center">
              <h3 className="font-bold text-xl text-white mb-2">Ahmed Ali</h3>
              <p className="text-orange-400 text-sm mb-2">Piano Instructor</p>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                10 Years Experience
              </div>
            </div>
          </div>

          {/* Teacher 4 */}
          <div className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative h-[300px]">
              <Image src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop" alt="Maria Lopez" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            </div>
            
            <div className="p-6 text-center">
              <h3 className="font-bold text-xl text-white mb-2">Maria Lopez</h3>
              <p className="text-orange-400 text-sm mb-2">Drums & Percussion</p>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                8 Years Experience
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-3xl md:text-5xl text-white mb-6">
            Want to Become a Speaker?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join our community of talented speakers, singers, and educators. Share your knowledge and inspire others.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wide shadow-lg hover:shadow-orange-500/50">
            Apply Now
          </button>
        </div>
      </section>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}