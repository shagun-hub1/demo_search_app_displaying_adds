import React from 'react'

const AddCard = ({image,heading,CTA}) => {
  return (
    <div className='border-[1px] border-slate-400 h-48 relative'> 
      <img 
      src={image} alt="" 
      className='w-full h-full'
      />
      <div className=' mx-4 text-center'>
    <p className='font-bold text-center text-sm my-2 text-slate-700'>{heading}</p>
    <button className='bg-blue-200 p-2 font-bold rounded  '>{CTA}</button>
      </div>
    </div>
  )
}

export default AddCard