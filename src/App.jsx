import React from 'react'
import Header from './components/Header'
import AnimalLover from './components/AnimalLover'
import DogTreatment from './components/DogTreatment'
import Breads from './components/Breads'

const App = () => {
  return (
    <>
    <Header/>
    <AnimalLover fdirection={"flex-row"} img={`Injured-dog1.png`} />
    <DogTreatment/>
    <AnimalLover fdirection={"flex-row-reverse"} img={`injured-dog2.png`} />
    <Breads/>
    </>
  )
}

export default App
