import React from 'react'
import TreatmentCard from './TreatmentCard'

const DogTreatment = () => {
  return (
    <div className='flex flex-col h-screen bg-[#ffc400] text-center text-white gap-10 '>
      <div className=' mt-10 gap-10 flex flex-col px-72'>
        <h2 className='text-6xl font-semibold' >TITLE HERE</h2>
        <h4 className='text-3xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam consequuntur harum, facilis debitis quas!</h4>
      </div>
      <div className='flex justify-evenly'>
        <TreatmentCard img={`card1.png`} text="Vaterinarian" />
        <TreatmentCard img={`card2.png`} text="Vaccination Care" />
        <TreatmentCard img={`card3.png`} text="Dental Care" />
      </div>
    </div>
  )
}

export default DogTreatment
