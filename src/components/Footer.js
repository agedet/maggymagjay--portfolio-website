import React from 'react'

function Footer() {
  return (
    <div className='bg-[#000000] h-[60] flex items-center py-10'>
      <div className='container mx-auto flex flex-col justify-between items-center px-10 sm:flex-row'>
        {/* logo */}
        <div>
          <h1 className='font-[Roboto] text-white text-center font-semibold text-[30px] sm:text-start'>M J</h1>

          <p className='font-[Roboto] text-white font-[400] text-xs'>
            Copyright 2023. All Rights Reserved.
          </p>
        </div>

        {/* social links */}
        <div className='mt-3 sm:mt-0'>
          <ul className=' flex flex-col items-center justify-center sm:flex-row'>
            <li className='my-3 sm:mx-5 '>
              <a href='#' className='text-white py-5'>LinkedIn</a>
            </li>
            <li className='my-3 sm:mx-5'>
              <a href='#'  className='text-white py-5'>Facebook</a>
            </li>
            <li className='my-3 sm:mx-5'>
              <a href='#'  className='text-white py-5'>Instagram</a>
            </li>
            <li className='my-3 sm:mx-5'>
              <a href='#'  className='text-white py-5'>Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer