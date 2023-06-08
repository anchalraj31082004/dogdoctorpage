import React from 'react'
import DogCard from './DogCard'

const Breeds = () =>
{
    return (
      <div className='flex flex-col h-screen bg-[#ffc400] text-center text-white gap-10 '>
        <div className=' mt-10 gap-10 flex flex-col px-72'>
          <h2 className='text-6xl font-semibold' >DOG BREAD</h2>
          <h4 className='text-3xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam consequuntur harum, facilis debitis quas!</h4>
        </div>
        <div className='flex justify-evenly'>
          <DogCard text="$-50 $-30" img={`kutta1.png`} />
          <DogCard text="$-40 $-50" img={`kutta2.png`} />
          <DogCard text="$-50 $-25" img={`kutta3.png`} />
        </div>
      </div>
    )
  }
  

export default Breeds
