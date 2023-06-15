import React from 'react'

function About() {
  return (
    <div className='pt-10 px-5 sm:h-screen,px-0 ' id='about'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center px-8'>
          <h1 className='items-center text-[40px] font-[500]'>About Me</h1>
        </div>

        <div className='flex flex-col h-[100] pt-20 sm:flex-row'>
          <div className='flex-1 p-10 flex justify-center items-center '>
            <div className='border border-cyan-500 p-10 bg-[#000000] h-[300px] w-60  relative'>
              <div className=' bg-[#fe1bfe22] h-[300px] w-60 absolute -top-10'>

              </div>

            </div>
          </div>

          <div className='flex-1 flex justify-center items-center'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero necessitatibus, adipisci sunt maxime repellendus, commodi perspiciatis, alias voluptates ad delectus possimus? Perferendis consectetur quas sapiente quae placeat veniam eius, totam tenetur minus distinctio voluptatum exercitationem, commodi ipsum facere vel. Cumque nostrum nam id earum voluptates consequatur distinctio velit perspiciatis, nihil, optio laboriosam? Doloremque dicta fugit quo ipsa distinctio aut cumque nisi nemo placeat. Quaerat architecto dicta vitae tenetur!
            </p>

          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default About