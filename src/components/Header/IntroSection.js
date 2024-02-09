import React from 'react'



function IntroSection({ left, right }) {
  return (
    <div className='flex justify-center items-center h-[88.5vh]'>


      <div className='flex flex-col-reverse justify-between items-center xl:w-[80vw] lg:flex-row '>
        <div className='hidden md:hidden lg:block'>
        
          <img src={left} alt="" className='w-[100px]' />
        </div>
        <div className='px-8  '>
          <h1 className=' text-xl text-white py-3 text-center md:text-center lg:text-left lg:text-5xl xl:text-left'>Cursus penati<br /> saccum nulla.</h1>
          <p className=' text-xs text-center text-slate py-6 lg:text-base lg:text-justify  '>Nullamlacus dui ipsum conseque loborttis non euisque<br /> morbi penas dapibulum orna. Urnaultrices quis <br />curabitur phasellentesque congue
            magnis vestibulum<br /> quismodo nulla et fouglat adipiscinia pellentum leo.</p>
          <div className='flex justify-center items-center md:justify-center lg:float-left'>
            <button className=' px-3 py-2 bg-lightGreen text-white float-center text-xs rounded-[5px] lg:rounded-[10px] lg:text-lg '>Read More Here &#8250;</button>

          </div>
        </div>
        <div className='px-8 '>

          <div className=' bg-darkGrey rounded-full  border-[1rem] w-[300px] h-[300px] border-lightGrey flex justify-center items-center md:w-[380px] md:h-[380px] lg:w-[380px] lg:h-[380px] xl:w-[400px] xl:h-[400px]'>
            <p className='text-white'>380x380px</p>
          </div>


        </div>
        <div className='hidden md:hidden lg:block'>
           <img src={right} alt="" className='w-[100px]' />

        </div>


      </div>
    </div>
  )
}

export default IntroSection