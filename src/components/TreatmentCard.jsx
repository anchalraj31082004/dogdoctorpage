import React from 'react'

const TreatmentCard = (props) => {
  return (
    <div className='flex flex-col items-center max-w-xs gap-2 text-white'>
      <div>
        <img src={`/assets/${props.img} `}alt="" />
      </div>
      <div>
        <h4 className='text-3xl'>{props.text}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laboriosam ea error ex sed maiores.</p>
      </div>
    </div>
  )
}

export default TreatmentCard
