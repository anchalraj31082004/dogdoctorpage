import React from 'react'
import DoctorCard from './DoctorCard'

const PetcareTeam = () => {
    return (
      <div className='flex flex-col h-screen text-center text-black gap-10 '>
        <div className=' mt-10 gap-10 flex flex-col px-72'>
          <h2 className='text-5xl font-semibold' >THE PETCARE TEAM</h2>
          <h4 className='text-2xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam consequuntur harum, facilis debitis quas!</h4>
        </div>
        <div className='flex justify-evenly '>
          <DoctorCard img={`doctorcard1.png`} text="Jeniffer Mullen" />
          <DoctorCard img={`doctorcard2.png`} text="Shreiren Collein" />
          <DoctorCard img={`doctorcard3.png`} text="Jellius nikaol" />
        </div>
      </div>
    )
  }

export default PetcareTeam
