import React from 'react'

function Footer() {
  return (
    <div className='bg-[#000000] h-[60] flex items-center py-10'>
      <div className='container mx-auto flex justify-between items-center px-10'>
        {/* logo */}
        <div>
          <h1 className='text-white font-semibold text-[30px]'>M J</h1>

          <p className='text-white font-[400] text-xs'>Copyright 2023. All Rights Reserved.</p>
        </div>

        {/* social links */}
        <div>
          <ul className='flex items-center justify-center'>
            <li className='mx-5'>
              <a href='#' className='text-white'>LinkedIn</a>
            </li>
            <li className='mx-5'>
              <a href='#'  className='text-white'>Facebook</a>
            </li>
            <li className='mx-5'>
              <a href='#'  className='text-white'>Instagram</a>
            </li>
            <li className='mx-5'>
              <a href='#'  className='text-white'>Twitter</a>
            </li>
          </ul>

        </div>
      </div>
      Footer
    </div>
  )
}

export default Footer