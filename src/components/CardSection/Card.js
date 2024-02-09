import React from 'react'

function Card() {
  return (
    
    <div className='w-[200px] h-[300px] bg-white text-center py-4 my-2  group hover:bg-lightGreen'>
<div className='w-[120px] h-[120px] flex justify-center items-center bg-black mx-auto group-hover:bg-white' >
  <p className='text-white group-hover:text-black'>120x120px</p>
</div>
<h3 className='text-4xl py-2  group-hover:text-white'>Service Title</h3>
<p className='text-xs px-2 py-1  group-hover:text-white'>Vestassapede et donec ut est libe ros sus et eget sed eget quisq ueta habitur augue</p>
    </div>
  )
}

export default Card