import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='mt-4 mr-4 sm:mr-16 md:mr-32 lg:mr-64'>
            <ul  className="flex justify-around cursor-pointer font-bold text-sm text-sky-950">
                <li className='transition-colors duration-300 hover:text-yellow-500'>HOME</li>
                <li className='transition-colors duration-300 hover:text-yellow-500'>HISTORY</li>
                <li className='transition-colors duration-300 hover:text-yellow-500'>COMMITTEE</li>
                <li className='transition-colors duration-300 hover:text-yellow-500'>CALL FOR <br /> PAPERS</li>
                <li className='transition-colors duration-300 hover:text-yellow-500'>PROGRAM <br /> SCHEDULE</li>
                <li className='transition-colors duration-300 hover:text-yellow-500'>REGISTRATION</li>
                <li className='transition-colors duration-300 hover:text-yellow-500'>PLAN <br /> TRAVEL</li>
                <li className='transition-colors duration-300 hover:text-yellow-500'>DOWNLOADS</li>
                <li className='transition-colors duration-300 hover:text-yellow-500'>KEYNOTE</li>
                <li className='transition-colors duration-300 hover:text-yellow-500'>CONTACT US</li>
            </ul>
        </nav>
    </div>
  )
}
