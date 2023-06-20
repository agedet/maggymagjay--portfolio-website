import React from 'react'
import {motion} from 'framer-motion'

function Banner() {
  return (
    <div className='bg-[#ffffff] pt-12 pb-12 px-5 sm:h-[80],px-0' id='home '>
      <div className='container mx-auto flex flex-col sm:flex-row'>
        {/* left hand */}
        <div className='bg-[#ffffff] flex-1 h-[80]'>
          <motion.div 
            initial={{x: 100}}
            animate={{x: 0}}
            exit={{x: 0}}
            transition={{
              ease: 'easeIn',
              duration: '1'
            }}
          >
            <h1 className='font-[Roboto] leading-tight text-[40px] font-[700] align-top text-start uppercase sm:text-[80px]'>
              Digital
            </h1>
            <h1 className='font-[Roboto] leading-tight text-[40px] font-[700] align-top text-start uppercase sm:text-[80px]'>
              Marketer
            </h1>
          </motion.div>
          
          <div className='pt-3 pb-3 h-[50]'>
            <motion.img 
              initial={{scale: 0.2}}  
              animate={{scale: 1}} 
              exit={{scale: 2}} 
              transition={{
                ease: 'backInOut',
                duration: '2'
              }}
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
        <motion.div 
           initial={{x: 100}}
           animate={{x: 0}}
           exit={{x: 0}}
           transition={{
             ease: 'easeIn',
             duration: '1'
           }}
          className='bg-[#ffffff] h-[80] flex flex-col justify-end items-end flex-1'>
          <h1 className='font-[Roboto] leading-tight text-[40px] font-[700] items-end uppercase sm:text-[80px],items-end'>
            Margaret 
          </h1>
          <h1 className='font-[Roboto] leading-tight text-[40px] font-[700] align-top text-end uppercase sm:text-[80px]'>
              James
            </h1>
        </motion.div>
      </div>
      
    </div>
  )
}

export default Banner