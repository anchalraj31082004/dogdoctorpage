import React from 'react'
import InstrumentCard from './InstrumentCard'

const Instrument = () => {
  return (
    <div className='bg-[url("/assets/background.png")] bg-cover bg-[#ffc400cf] bg-blend-multiply w-full h-[550px] flex justify-evenly items-center'>
      <InstrumentCard img ={`plusIcon.png`} text="Happy Clients" num="+35478" />
      <InstrumentCard img ={`kangojar.png`} text="Department" num="+35478" />
      <InstrumentCard img ={`suii-icon.png`} text="Vaccination" num="+35478" />
    </div>
  )
  }
  export default Instrument
