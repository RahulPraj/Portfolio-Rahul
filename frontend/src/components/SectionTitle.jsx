import React from 'react'

function SectionTitle({title}) {
  return (
    <div className='flex flex-col gap-3 items-center justify-center '>
        <h1 className='text-4xl text-text_primary font-semibold font-sans'>{title}</h1>
        <div className='w-60 h-[1px] bg-text4'></div>
    </div>
  )
}

export default SectionTitle