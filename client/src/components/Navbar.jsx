import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

function Navbar() {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>TRESS</h1>
        
          </div>
          <div className='hidden md:flex pr-4'>
          <button className="border-none bg-transparent text-black mr-4">Learn More</button>
            <button className='px-8 py-3'>Support</button>
          </div>
          <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
            
          </div>
        </div>
        
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          
        <div className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <button className='font-montserrat bg-transparent text-indigo-600 px-8 py-3 mb-4'>Learn More</button>
            <button className='font-montserrat px-8 py-3'>Support</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar