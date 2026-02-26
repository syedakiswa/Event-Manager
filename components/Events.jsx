'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock,  Coffee,  LocateFixed, Mic, Mic2, User2, Users } from 'lucide-react'

export default function Eventmanager() {
  return (
    <>
      {/* ===========MAIN SECTION============= */}
      <div className="relative w-[100vw] h-[80vh] mx-auto">
        
        {/* Background Image */}
        <Image
          src="/eventpage.avif"
          alt="Event Page"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          
          {/* Heading */}
          <h2 className="text-white text-5xl md:text-6xl font-bold mb-4">
            Tech Innovation Summit 2026
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 max-w-2xl text-lg md:text-xl mb-6">
            Join industry leaders and innovators for a day of insights, networking, and inspiration.
          </p>

          {/* Date & Time */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-gray-300 text-lg md:text-xl">
            
            {/* Date */}
            <span className="flex items-center gap-2">
              <Calendar />
              March 15, 2026
            </span>

            {/* Separator */}
            <span className="hidden md:inline">|</span>

            {/* Time */}
            <span className="flex items-center gap-2">
              <Clock />
              10:00 AM - 5:00 PM
            </span>
                       {/* Separator */}
            <span className="hidden md:inline">|</span>
            {/* Location */}
            <span className="flex items-center gap-2">
              <LocateFixed />
     San Francisco Convention Center
            </span>

          </div>
{/* Buttons */}
<div className="btns py-10 ">
  <Link href='/register'>
  
          <button className=' p-3 px-10 font-semibold text-xl cursor-pointer bg-orange-400 text-white  rounded-xl '>
            Register now
          </button></Link>
</div>
        </div>

      </div>


      {/* Satisfication */}
  <div className="min-h-[40vh] flex flex-wrap justify-center items-center gap-10  py-16">
  
  {/* Card 1 */}
  <div className="flex flex-col items-center justify-center text-center bg-gray-950 p-12 w-64 h-60 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
    <Users className="text-orange-400 text-5xl mb-4" />
    <span className="text-4xl font-bold mb-2 text-white">500+</span>
    <h3 className="text-gray-300 text-xl">Attendees</h3>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center justify-center text-center bg-gray-950 p-12 w-64 h-60 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
    <Mic className="text-orange-400 text-5xl mb-4" />
    <span className="text-4xl font-bold mb-2 text-white">50+</span>
    <h3 className="text-gray-300 text-xl">Speakers</h3>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center justify-center text-center bg-gray-950 p-12 w-64 h-60 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
    <Coffee className="text-orange-400 text-5xl mb-4" />
    <span className="text-4xl font-bold mb-2 text-white">10+</span>
    <h3 className="text-gray-300 text-xl">Workshops</h3>
  </div>

</div>



{/* ==========About the event ============ */}
<div className="flex flex-col justify-center items-center text-center bg-black text-white min-h-screen px-6 md:px-10 py-20">
  {/* Heading */}
  <h2 className="text-4xl md:text-7xl font-bold mb-8">ABOUT THE EVENT</h2>
          <div className="w-32 h-1 bg-orange-500 mx-auto mt-6" />

  {/* Paragraph */}
  <p className="text-gray-300 max-w-5xl text-lg md:text-xl leading-relaxed mb-6">
    The <span className="font-semibold text-orange-400">Tech Innovation Summit</span> brings together visionaries, entrepreneurs, and industry leaders for a full day of knowledge sharing, networking, and collaboration.
  </p>

  <p className="text-gray-300 max-w-5xl text-lg md:text-xl leading-relaxed mb-6">
    Whether you're a startup founder, corporate executive, or tech enthusiast, this event offers valuable insights into the latest trends, best practices, and future directions in technology and innovation.
  </p>

  <p className="text-gray-300 max-w-5xl text-lg md:text-xl leading-relaxed">
    Featuring keynote presentations, panel discussions, hands-on workshops, and ample networking opportunities, the summit is designed to inspire and empower attendees to drive meaningful change in their organizations and communities.
  </p>
</div>


{/* ===============feautred speakers================= */}

<div className=' justify-center items-center text-center bg-black text-white min-h-[70vh] '>
  <h2 className="text-4xl md:text-7xl font-bold mb-8">Featured Speakers</h2>
          <div className="w-32 h-1 bg-orange-500 mx-auto mt-6" />
  <div className='flex gap-20 p-20 '>
<div className='relative bg-gray-900 h-[66vh] w-[25vw] rounded-3xl shadow shadow-orange-400'>
  <div className="absolute h-[40vh] w-[24vw] ml-2 mt-3 rounded-2xl overflow-hidden">
  <Image
    src="/feature1.png"
    alt="Feature 1"
    fill
    className="object-cover"
  />

</div>

<div className='absolute py-76 px-4'>
  <h2 className='text-white text-xl font-sans font-semibold'>Dr. Sarah Chen</h2>
  <span className='text-lg text-orange-400'>Chief Technology Officer, TechVision
</span>
<p className='text-xs text-gray-300 font-semibold py-2'>Leading expert in AI and machine learning with 15+ years of industry experience.</p>
</div>
</div>
<div className='relative bg-gray-900 h-[66vh] w-[25vw] rounded-3xl shadow shadow-orange-400'>
  <div className="absolute h-[40vh] w-[24vw] ml-2 mt-3 rounded-2xl overflow-hidden">
  <Image
    src="/feature2.png"
    alt="Feature 1"
    fill
    className="object-cover"
  />

</div>

<div className='absolute py-76 px-4'>
  <h2 className='text-white text-xl font-sans font-semibold'>Marcus Johnson</h2>
  <span className='text-lg text-orange-400'>Founder & CEO, InnovateLabs
</span>
<p className='text-xs text-gray-300 font-semibold py-2'>Serial entrepreneur and thought leader in digital transformation and startup ecosystems.</p>
</div>
</div>
<div className='relative bg-gray-900 h-[66vh] w-[25vw] rounded-3xl shadow shadow-orange-400'>
  <div className="absolute h-[40vh] w-[24vw] ml-2 mt-3 rounded-2xl overflow-hidden">
  <Image
    src="/feature3.png"
    alt="Feature 1"
    fill
    className="object-cover"
  />

</div>

<div className='absolute py-76 px-4'>
  <h2 className='text-white text-xl font-sans font-semibold'>Elena Rodriguez</h2>
  <span className='text-lg text-orange-400'>Head of Product, CloudScale
</span>
<p className='text-xs text-gray-300 font-semibold py-2'>Product visionary specializing in user experience and scalable platform development.</p>
</div>
</div>

  </div>
<div>

</div>
</div>
{/* =================EVENT SCHEDULE=============== */}

  <section className="w-full bg-black py-16 px-4 md:px-8">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl md:text-7xl text-white tracking-wider">
          EVENT SCHEDULE
        </h2>
        <div className="w-32 h-1 bg-orange-500 mx-auto mt-6" />
      </div>

      {/* Schedule Table */}
      <div className="max-w-6xl mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-orange-500 to-orange-600">
                <th className="px-6 py-4 text-left text-white font-bold text-lg border-b-2 border-gray-700 w-32">
                  Time
                </th>
                <th className="px-6 py-4 text-left text-white font-bold text-lg border-b-2 border-gray-700">
                  Session
                </th>
                <th className="px-6 py-4 text-left text-white font-bold text-lg border-b-2 border-gray-700 w-48">
                  Speaker
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="bg-gray-900 hover:bg-gray-800 transition-colors duration-300 group">
                <td className="px-6 py-6 text-orange-400 font-bold text-xl border-b border-gray-700">
                  9:00 AM
                </td>
                <td className="px-6 py-6 border-b border-gray-700">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    Registration & Welcome Coffee
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Check-in, networking, and refreshments to start the day.
                  </p>
                </td>
                <td className="px-6 py-6 text-gray-400 border-b border-gray-700">
                  -
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="bg-gray-950 hover:bg-gray-800 transition-colors duration-300 group">
                <td className="px-6 py-6 text-orange-400 font-bold text-xl border-b border-gray-700">
                  10:00 AM
                </td>
                <td className="px-6 py-6 border-b border-gray-700">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    Opening Keynote: The Future of Technology
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Exploring emerging trends in AI, cloud computing, and their impact on business innovation.
                  </p>
                </td>
                <td className="px-6 py-6 border-b border-gray-700">
                  <p className="text-white font-semibold">Dr. Sarah Chen</p>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="bg-gray-900 hover:bg-gray-800 transition-colors duration-300 group">
                <td className="px-6 py-6 text-orange-400 font-bold text-xl border-b border-gray-700">
                  11:15 AM
                </td>
                <td className="px-6 py-6 border-b border-gray-700">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    Panel Discussion: Building Scalable Solutions
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Industry leaders discuss best practices for creating products that scale.
                  </p>
                </td>
                <td className="px-6 py-6 border-b border-gray-700">
                  <p className="text-white font-semibold">Marcus Johnson</p>
                  <p className="text-gray-400 text-sm">Elena Rodriguez & Team</p>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="bg-gray-950 hover:bg-gray-800 transition-colors duration-300 group">
                <td className="px-6 py-6 text-orange-400 font-bold text-xl border-b border-gray-700">
                  12:30 PM
                </td>
                <td className="px-6 py-6 border-b border-gray-700">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    Networking Lunch
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Connect with fellow attendees, speakers, and sponsors over lunch.
                  </p>
                </td>
                <td className="px-6 py-6 text-gray-400 border-b border-gray-700">
                  -
                </td>
              </tr>

              {/* Row 5 */}
              <tr className="bg-gray-900 hover:bg-gray-800 transition-colors duration-300 group">
                <td className="px-6 py-6 text-orange-400 font-bold text-xl border-b border-gray-700">
                  2:00 PM
                </td>
                <td className="px-6 py-6 border-b border-gray-700">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    Workshop: Product Design Thinking
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Hands-on workshop exploring user-centric design methodologies and rapid prototyping.
                  </p>
                </td>
                <td className="px-6 py-6 border-b border-gray-700">
                  <p className="text-white font-semibold">Elena Rodriguez</p>
                </td>
              </tr>

              {/* Row 6 */}
              <tr className="bg-gray-950 hover:bg-gray-800 transition-colors duration-300 group">
                <td className="px-6 py-6 text-orange-400 font-bold text-xl border-b border-gray-700">
                  3:30 PM
                </td>
                <td className="px-6 py-6 border-b border-gray-700">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    Breakout Sessions
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Multiple tracks covering topics in engineering, design, and business strategy.
                  </p>
                </td>
                <td className="px-6 py-6 text-gray-400 border-b border-gray-700">
                  Multiple Speakers
                </td>
              </tr>

              {/* Row 7 */}
              <tr className="bg-gray-900 hover:bg-gray-800 transition-colors duration-300 group">
                <td className="px-6 py-6 text-orange-400 font-bold text-xl">
                  5:00 PM
                </td>
                <td className="px-6 py-6">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    Closing Remarks & Networking Reception
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Day wrap-up followed by cocktails and networking opportunities.
                  </p>
                </td>
                <td className="px-6 py-6 text-gray-400">
                  -
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Register Button */}
        <div className="text-center mt-12">
         <Link href='/register'>
          <button className="bg-orange-500 cursor-pointer text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wide shadow-lg hover:shadow-orange-500/50">
            Register for Event
          </button></Link>
        </div>
      </div>
    </section>


{/* ======================= EVENT LOCATION =================== */}

<section className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-6">

  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-5xl md:text-7xl font-extrabold tracking-widest">
      VENUE
    </h2>
    <div className="w-32 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
  </div>

  {/* Glass Card */}
  <div className="w-full max-w-6xl bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-2xl border border-white/10">

    {/* Address */}
    <p className="text-center text-gray-300 mb-8 text-lg">
      Port Grand – Karachi, Pakistan
    </p>

    {/* Map */}
    <div className="overflow-hidden rounded-2xl shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5617779408863!2d66.99091290000001!3d24.8446557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315fd9484034d%3A0xa34ea99b28ea0c40!2sPort%20Grand%20-%20Karachi!5e0!3m2!1sen!2s!4v1770900479367!5m2!1sen!2s"
        className="w-full h-[400px] md:h-[500px] rounded-2xl"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

  </div>

</section>

    </>
  )
}
