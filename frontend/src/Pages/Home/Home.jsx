import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Emenu from '../../Components/E-menu/Emenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownloard from '../../Components/AppDownloard/AppDownloard'

const Home = () => {

   const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <Emenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownloard/>
    </div>
  )
}

export default Home