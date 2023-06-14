import React from 'react'

function Navbar() {
  return (
    <div className='h-[74px] flex items-center px-3 '> 
      <div className='container mx-auto flex items-center justify-between'>
        <div>
          <h1 className='font-semibold text-[30px]'>MJ</h1>
        </div>

        <div>
          <ul className='flex justify-between'>
            <li className='mx-5'>
              <a href='#home' className='px-4'>Home</a>
            </li>
            <li className='mx-5'>
              <a href='#about' className='px-4'>About</a>
            </li>
            <li className='mx-5'>
              <a href='#portfolio' className='px-4'>Portfolio</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className='mx-2'>
              <a href='#contact' 
                className='border-2 border-[#fe1bfe22] rounded-3xl px-4 py-3'
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar