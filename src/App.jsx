import React from 'react'
import Header from './components/Header'
import AnimalLover from './components/AnimalLover'
import DogTreatment from './components/DogTreatment'
import Breeds from './components/Breeds'
import PetcareTeam from './components/PetcareTeam'
import Instrument from './components/Instrument'
import Post from './components/Post'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <AnimalLover fdirection={"flex-row"} img={`Injured-dog1.png`} />
    <DogTreatment/>
    <AnimalLover fdirection={"flex-row-reverse"} img={`injured-dog2.png`} />
    <Breeds/>
    <PetcareTeam/>
    <Instrument/>
    <Post/>
    <Footer/>
    </>
  )
}

export default App
