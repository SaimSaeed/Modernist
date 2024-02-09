import React from 'react'

function ImageCard() {
    
  return (
    <div className=' bg-customGrey border-4 my-6 relative group hover:border-lightGreen w-[290px] h-[190px]  xl:w-[400px] flex justify-center items-center'>
      <p className='text-white'>290x190px</p>
        <div className='bg-black absolute bottom-0 w-full text-white text-center group-hover:invisible'>LOPREM IPSUM DOLOR</div>
    </div>
  )
}

export default ImageCard