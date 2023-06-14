import React from 'react'

function Banner() {
  return (
    <div className='h-[80] bg-[#ffffff] pt-12' id='home '>
      <div className='container mx-auto flex'>
        {/* left hand */}
        <div className='bg-[#ffffff] flex-1 h-[80]'>
          <div>
            <h1 className='font-[Roboto] font text-[80px] font-[700] align-top text-start uppercase '>
              Digital
            </h1>
            <h1 className='font-[Roboto] font text-[80px] font-[700] align-top text-start uppercase '>
              Marketer
            </h1>
          </div>
          
          <div className='w-100 h-[50] my-3'>
            <img 
              src='/images/banare.png'
              alt='magaret james'
              width='70%'
              height='50%'
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
        <div className='bg-[#ffffff] h-[80] flex justify-end items-end flex-1'>
          <h1 className='font-[Roboto] text-[80px] font-[700] items-end uppercase'>
            Margaret <br></br> James
          </h1>
        </div>
      </div>
      
    </div>
  )
}

export default Banner