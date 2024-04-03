import React from 'react'

export default function College() {
  return (
    <div className='mt-12 shadow-sm shadow-gray-400 pb-10'>
        <div className='flex flex-row justify-around'>
        <img src="https://icaccs.sece.ac.in/images/logo-head.png" className='  w-72  h-20' alt="logo" />

        <div className=' flex flex-col gap-8 font-bold text-2xl text-sky-700 items-center'>
            
       <p>
          <span className='mx-24'>10 <sup>th</sup> International Conference on </span> <br></br>
           Advanced Computing and Communication Systems <br></br>
           
           <span className='mx-52'> ICACCS 2024 </span>
       </p>
           <p>14 - 15 March 2024</p> 
          
        </div>
        <div className='flex flex-col'>
            <p> <span className='ml-10 text-gray-700 font-semibold'>Technically Sponsored by </span></p>
        <div className='flex flex-row gap-1'>  
        <img src="https://icaccs.sece.ac.in/images/ieee.jpg" className=' h-12  w-32' alt="" />
        <img src="https://icaccs.sece.ac.in/images/ieee_madras.png" className=' h-12  w-32' alt="" />
        </div>
        </div>
      
       
          
        </div>
       
    </div>
  )
}
