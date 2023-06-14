import React from 'react'

function Banner() {
  return (
    <div className=' bg-[#ffffff] pt-12 px-5 sm:h-[80]:px-0' id='home '>
      <div className='container mx-auto flex flex-col sm:flex-row'>
        {/* left hand */}
        <div className='bg-[#ffffff] flex-1 h-[80]'>
          <div>
            <h1 className='font-[Roboto] text-[40px] font-[700] align-top text-start uppercase sm:text-[80px]'>
              Digital
            </h1>
            <h1 className='font-[Roboto] text-[40px] font-[700] align-top text-start uppercase sm:text-[80px]'>
              Marketer
            </h1>
          </div>
          
          <div className='h-[50]'>
            <img 
              src='/images/banare.png'
              alt='magaret james'
              // width='70%'
              // height='50%'
              className='scale-y-60 scale-x-70'
            />
          </div>

          <div className='flex h-50 w-50 my-5'>
            <div className='flex flex-1 justify-center items-center w-50'>
              <span class="material-symbols-rounded">
                arrow_downward
              </span>
            </div>
            <div className='flex-1 w-50'>
              <p className='font-[Roboto]'>
                Dolor deserunt accusamus officiis nam sit vero atque corporis natus!
                {/* Quasi laudantium porro ipsam quia totam harum et? */}
              </p>
            </div>
          </div>
        </div>

        {/* right box */}
        <div className='bg-[#ffffff] h-[80] flex justify-end items-end flex-1 sm:'>
          <h1 className='font-[Roboto] text-[40px] font-[700] items-start uppercase sm:text-[80px]items-end'>
            Margaret <br></br> James
          </h1>
        </div>
      </div>
      
    </div>
  )
}

export default Banner