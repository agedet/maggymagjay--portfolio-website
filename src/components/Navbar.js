import React, { useState } from 'react'

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className='h-[74px] w-[100] flex justify-between items-center px-3'> 
      <div className='container mx-auto'>
        <div className='flex  items-center justify-between'>
          <div className='h-[74px]'>
            <h1 className='font-semibold text-[30px]'>MJ</h1>
          </div>

          <nav>
            <div className='DESKTOP-MENU hidden  sm:flex '>
              <div className='flex justify-center items-center'>
                <ul className='flex justify-center items-center '>
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

            {/* NAv MENU */}
            <section className='MOBILE-MENU flex justify-center items-center sm:hidden '>
              <div
                className='HAMBURGER-ICON space-y-1.5 cursor-pointer'
                onClick={() => setIsNavOpen((prev) => !prev)} //toggle nav on clck
              >
                <span className='block h-0.5 w-6 animate-pulse bg-black'  ></span>
                <span className='block h-0.5 w-7 animate-pulse bg-black' ></span>
                <span className='block h-0.5 w-8 animate-pulse bg-black' ></span>
              </div>

              <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}> {/* toggle class based on isNavOpen */}
                <div
                  className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
                  onClick={() => setIsNavOpen(false)} //change isNavMenu to false on click
                >
                  <svg
                    className='h-8 w-8 text-gray-600'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <line x1='18' y1='6' x2='6' y2='18' />
                    <line x1='6' y1='6' x2='18' y2='18' />
                  </svg>
                </div>
                <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] '>
                  <li className='border-b border-gray-400 my-8 capitalize'>
                    <a href='#Home'>Home</a>
                  </li>
                  <li className='border-b border-gray-400 my-8 capitalize'>
                    <a href='#about'>About</a>
                  </li>
                  <li className='border-b border-gray-400 my-8 capitalize'>
                    <a href='#skills'>Skills</a>
                  </li>
                  <li className='border-b border-gray-400 my-8 capitalize'>
                    <a href='#portfolio'>Portfolio</a>
                  </li>
                  <li className='border-b border-gray-400 my-8 capitalize'>
                    <a href='#contact'>Contact</a>
                  </li>
                </ul>
              </div>
            </section>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar