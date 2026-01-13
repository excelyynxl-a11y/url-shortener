import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-20 bg-[rgba(10,10,10,0.8)] flex justify-between px-3 items-center text-white'>
        <div className='font-mono text-lg font-bold text-white logo'>
            <Link href="/">
                LikeItShort
            </Link>
        </div>
        <ul className='flex justify-center gap-4 items-center '>
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:text-white hover:bg-gray-700">
                <li>
                    Home
                </li>
            </Link>
            <Link href="/about" className="block px-2 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:text-white hover:bg-gray-700">
                <li>
                    About
                </li>
            </Link>
            <Link href="/shorten" className="block px-2 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:text-white hover:bg-gray-700">
                <li>
                    Shorten
                </li>
            </Link>
            <Link href="/contact" className="block px-2 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:text-white hover:bg-gray-700">
                <li>
                    Contact Us
                </li>
            </Link>

            <li className='flex gap-3'>
                <Link href="/shorten" >
                    <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold hover:bg-purple-600'>Try Now</button>
                </Link>
                <Link href="/github">
                    <button className='bg-purple-800 rounded-lg shadow-lg p-3 py-1 font-bold hover:bg-purple-900'>GitHub</button>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar