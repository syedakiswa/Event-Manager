import React from 'react'
import Image from 'next/image'

export default function Networking() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-black"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="font-bold text-5xl md:text-8xl text-white tracking-wider mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">NETWORKING</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Connect with industry leaders, fellow attendees, and build meaningful relationships that last beyond the event
          </p>
          <div className="w-32 h-1 bg-orange-500 mx-auto mt-6 mb-8" />
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wide">
              Join Network
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-white/20">
              Browse Attendees
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">5,000+</h3>
              <p className="text-gray-400">Active Members</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">200+</h3>
              <p className="text-gray-400">Companies</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
              <p className="text-gray-400">Events Per Year</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">30+</h3>
              <p className="text-gray-400">Countries</p>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Attendees Section */}
      <section className="w-full py-16 px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl md:text-6xl text-white tracking-wider">
            FEATURED ATTENDEES
          </h2>
          <p className="text-gray-400 mt-4 text-lg">Connect with professionals from various industries</p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Attendee 1 */}
          <div className="group bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-orange-500/50">
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="John Smith" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-1">John Smith</h3>
                <p className="text-orange-400 text-sm mb-2">Software Engineer</p>
                <p className="text-gray-400 text-sm mb-3">Tech Corp • San Francisco</p>
                <div className="flex gap-2">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded transition-colors duration-300">
                    Connect
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded transition-colors duration-300">
                    Message
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">React</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Node.js</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">AWS</span>
            </div>
          </div>

          {/* Attendee 2 */}
          <div className="group bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-orange-500/50">
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Sarah Johnson" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-1">Sarah Johnson</h3>
                <p className="text-orange-400 text-sm mb-2">Product Designer</p>
                <p className="text-gray-400 text-sm mb-3">Design Co • New York</p>
                <div className="flex gap-2">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded transition-colors duration-300">
                    Connect
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded transition-colors duration-300">
                    Message
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">UI/UX</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Figma</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Prototyping</span>
            </div>
          </div>

          {/* Attendee 3 */}
          <div className="group bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-orange-500/50">
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Michael Chen" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-1">Michael Chen</h3>
                <p className="text-orange-400 text-sm mb-2">Marketing Director</p>
                <p className="text-gray-400 text-sm mb-3">Growth Inc • London</p>
                <div className="flex gap-2">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded transition-colors duration-300">
                    Connect
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded transition-colors duration-300">
                    Message
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">SEO</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Analytics</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Strategy</span>
            </div>
          </div>

          {/* Attendee 4 */}
          <div className="group bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-orange-500/50">
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Emily Davis" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-1">Emily Davis</h3>
                <p className="text-orange-400 text-sm mb-2">Data Scientist</p>
                <p className="text-gray-400 text-sm mb-3">AI Labs • Seattle</p>
                <div className="flex gap-2">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded transition-colors duration-300">
                    Connect
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded transition-colors duration-300">
                    Message
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Python</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">ML</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">TensorFlow</span>
            </div>
          </div>

          {/* Attendee 5 */}
          <div className="group bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-orange-500/50">
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="David Wilson" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-1">David Wilson</h3>
                <p className="text-orange-400 text-sm mb-2">Startup Founder</p>
                <p className="text-gray-400 text-sm mb-3">Venture Labs • Austin</p>
                <div className="flex gap-2">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded transition-colors duration-300">
                    Connect
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded transition-colors duration-300">
                    Message
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Business</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">SaaS</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Funding</span>
            </div>
          </div>

          {/* Attendee 6 */}
          <div className="group bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-orange-500/50">
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Lisa Wang" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-1">Lisa Wang</h3>
                <p className="text-orange-400 text-sm mb-2">VP of Engineering</p>
                <p className="text-gray-400 text-sm mb-3">Cloud Systems • Boston</p>
                <div className="flex gap-2">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded transition-colors duration-300">
                    Connect
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded transition-colors duration-300">
                    Message
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">DevOps</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Kubernetes</span>
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Cloud</span>
            </div>
          </div>

        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wide">
            View All Attendees
          </button>
        </div>
      </section>

      {/* Networking Opportunities Section */}
      <section className="w-full py-16 px-4 md:px-8 bg-gray-950">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl md:text-6xl text-white tracking-wider">
            NETWORKING OPPORTUNITIES
          </h2>
          <p className="text-gray-400 mt-4 text-lg">Multiple ways to connect and collaborate</p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Opportunity 1 */}
          <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-lg p-8 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-2xl mb-3">Speed Networking</h3>
            <p className="text-gray-400 mb-4">
              Quick 5-minute sessions to meet multiple attendees and exchange ideas
            </p>
            <button className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Opportunity 2 */}
          <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-lg p-8 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-2xl mb-3">Discussion Tables</h3>
            <p className="text-gray-400 mb-4">
              Join topic-specific tables to discuss industry trends and challenges
            </p>
            <button className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Opportunity 3 */}
          <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-lg p-8 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-2xl mb-3">Networking Lunch</h3>
            <p className="text-gray-400 mb-4">
              Casual dining sessions designed to foster connections in a relaxed setting
            </p>
            <button className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Opportunity 4 */}
          <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-lg p-8 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-2xl mb-3">Networking App</h3>
            <p className="text-gray-400 mb-4">
              Use our mobile app to connect before, during, and after the event
            </p>
            <button className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Opportunity 5 */}
          <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-lg p-8 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-2xl mb-3">Company Booths</h3>
            <p className="text-gray-400 mb-4">
              Visit exhibitor booths to learn about companies and career opportunities
            </p>
            <button className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Opportunity 6 */}
          <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-lg p-8 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-2xl mb-3">Evening Reception</h3>
            <p className="text-gray-400 mb-4">
              End the day with drinks and casual conversations in a relaxed atmosphere
            </p>
            <button className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      {/* Tips Section */}
      <section className="w-full py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl md:text-6xl text-white tracking-wider">
              NETWORKING TIPS
            </h2>
            <p className="text-gray-400 mt-4 text-lg">Make the most of your networking experience</p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4" />
          </div>

          <div className="space-y-6">
            
            {/* Tip 1 */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-500 hover:bg-gray-800 transition-colors duration-300">
              <h3 className="text-white font-bold text-xl mb-2">1. Prepare Your Elevator Pitch</h3>
              <p className="text-gray-400">
                Have a concise 30-second introduction ready that explains who you are, what you do, and what you're looking for.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-purple-500 hover:bg-gray-800 transition-colors duration-300">
              <h3 className="text-white font-bold text-xl mb-2">2. Set Clear Goals</h3>
              <p className="text-gray-400">
                Define what you want to achieve – whether it's finding potential clients, partners, or learning about new opportunities.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-500 hover:bg-gray-800 transition-colors duration-300">
              <h3 className="text-white font-bold text-xl mb-2">3. Listen Actively</h3>
              <p className="text-gray-400">
                Focus on understanding others' needs and interests. Ask thoughtful questions and show genuine interest in their work.
              </p>
            </div>

            {/* Tip 4 */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-purple-500 hover:bg-gray-800 transition-colors duration-300">
              <h3 className="text-white font-bold text-xl mb-2">4. Follow Up Promptly</h3>
              <p className="text-gray-400">
                Send a follow-up message within 24-48 hours after meeting someone. Reference your conversation to jog their memory.
              </p>
            </div>

            {/* Tip 5 */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-500 hover:bg-gray-800 transition-colors duration-300">
              <h3 className="text-white font-bold text-xl mb-2">5. Be Authentic</h3>
              <p className="text-gray-400">
                Be yourself and build genuine connections. Authenticity creates lasting professional relationships.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-3xl md:text-5xl text-white mb-6">
            Ready to Expand Your Network?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join thousands of professionals connecting at our events. Start building meaningful relationships today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wide shadow-lg hover:shadow-orange-500/50">
              Register Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 border border-white/20">
              Download App
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}