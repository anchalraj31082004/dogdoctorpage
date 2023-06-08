import React from 'react'
import Button from './Button'

const DogCard = (props) =>{
    return (
      <div className='flex flex-col items-center max-w-xs gap-2 text-white'>
        <div>
          <img src={`/assets/${props.img} `}alt="" />
        </div>
        <div className='mt-5'>
          <h4 className='text-3xl mb-6'>{props.text}</h4>
          <Button color="#00bdcb" text="Buy Now" bor="border" borRad="rounded-3xl" />
        </div>
      </div>
    )
  }

export default DogCard
