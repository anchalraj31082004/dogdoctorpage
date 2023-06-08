import React from 'react'
import Header from './components/Header'
import AnimalLover from './components/AnimalLover'
import DogTreatment from './components/DogTreatment'

const App = () => {
  return (
    <>
    <Header/>
    <AnimalLover fdirection={"flex-row"} img={"Injured-dog1.png"} />
    <DogTreatment/>
    </>
  )
}

export default App
