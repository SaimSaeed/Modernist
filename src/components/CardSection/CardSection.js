import React from 'react'
import Card from './Card'
import ImageCard from './ImageCard'

function CardSection() {
  return (
    <div className=' bg-lightRed py-20  xl:h-[120vh]  '>
      <div className='w-[80vw] mx-auto'>
        <div className='flex flex-wrap justify-between items-center w-[200px] mx-auto md:w-full'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          
        </div>

        <div className='mt-10 flex items-center'>
          <div className='h-[1vh] flex-1 bg-customGrey rounded-l'></div>
          <h2 className='text-xl text-center text-white bg-customGrey py-2 px-3 rounded-[10px] md:text-3xl'>LATEST WORK</h2>
          <div className='h-[1vh] flex-1 bg-customGrey rounded-r'></div>

        </div>
        <div className='flex flex-wrap justify-between items-center w-[290px] mx-auto md:w-full'>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>

        </div>
      </div>





    </div>
  )
}

export default CardSection