import React from 'react'

const InstrumentCard = (props) => {
  return (
    <div className=' flex flex-col max-w-xs items-center gap-2 text-white '>
      <div>
        <img src= {`/assets/${props.img}`} />
      </div>
      <div className='flex flex-col gap-3 text-center'>
        <p className='text-2xl mt-3'>{props.num}</p>
        <h4 className='text-3xl mt-3'>{props.text}</h4>
      </div>
    </div>
  )
}

export default InstrumentCard
