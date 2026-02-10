import React from 'react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <>
    <footer className='min-h-[40vh] mt-20 bg-gray-950 border border-gray-500 rounded-2xl  px-20 py-10'>
<div className='flex  gap-40'>
         {/* Logo */}
        <div className="logo">
          <span className="font-bold text-2xl leading-none block">
            CO<span className="text-orange-400">NN</span>ECT
            <br />
            <span className="ml-5">SPHERE</span>
          </span>
        </div>

        {/* Pages links */}

        <div className='grid grid-cols-3  '>
<div>
     <h2 className='font-bold text-2xl'>Links</h2>
 <ul>
    <li>

        <Link href='/'>Home</Link>
    </li>
    <li>
        <Link href='/events'>Events</Link>
    </li>
    <li>
        <Link href='/speakers'>Speakers</Link>
    </li>
    <li>
        <Link href='/networking'>Networking</Link>
    </li>
    <li>
        <Link href='/contactus'>Contact Us</Link>
    </li>
 </ul>
</div>
        </div>

</div>
    </footer>
    </>
  )
}
