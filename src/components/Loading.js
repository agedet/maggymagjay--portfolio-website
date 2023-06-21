import React, { useEffect } from 'react';
import '../css/component/loader.css';
import Image from './Image';
import {easeIn, easeInOut, easeOut, motion} from 'framer-motion'

// variants 
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    }
  }
}

const item = {
  hidden : {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      // ease: [.6, .01, -.05, .95],
      ease: easeInOut,
      duration: 1.6,
    }
  },
  exit: {
    opacity: 0,
    y: -100, 
    transition: {
      ease: easeOut,
      duration: 0.8,
    }
  }
}

const itemMain = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easeIn,
      duration: 1.6,
    }
  }
}

function Loading({setLoading}) {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, [4000]);
  //   return () => clearTimeout(timer);
  // });

  return (
    <div
      // className='w-screen h-screen bg-[#fe1bfe22] flex items-center justify-center'
      className='loader'
    > {/* loader */}
      <motion.div 
        className='loader-inner' 
        variants={container}
        initial='hidden'
        animate='show'
        exit='exit'
        onAnimationComplete={() => setLoading(false)}
      > {/* loader inner */}
        <ImageBlock variants={item} id='image-11' />

        <motion.div 
          className='transition-image'
          variants={itemMain}
        > 
        {/*  transition image */}
          {/* <img  
            src='/images/banare.PNG' 
            src={process.env.PUBLIC_URL + `/images/image-16.jpg`}
            alt='loader' 
            height='200px'
            width='200px'
            id='image-2'
          /> */}
        </motion.div>
        <ImageBlock variants={item} id='image-13'  />
        <ImageBlock variants={item} id='image-14'  />
        <ImageBlock variants={item} id='image-15'  />
        {/* <img src='/images/banare.PNG' alt='loader' id='image-3' /> */}
        {/* <img src='/images/banare.PNG' alt='loader' id='image-4' /> */}
        {/* <img src='/images/banare.PNG' alt='loader' id='image-5' /> */}
        
      </motion.div>
    </div>
  );
};

export const ImageBlock = ({id, variants, posX, posY }) => {
  return (
    <motion.div className={`image-block ${id}`}
      variants={variants}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw`,
      }}
      // animate={{
      //   scale: .5,
      //   transition: {
      //     duration: 1,
      //   }
      // }}
    >
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        // fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
        // alt='loader smalls'
      />

    </motion.div>
  );
};

export default Loading;