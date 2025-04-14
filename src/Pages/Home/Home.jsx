import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Emenu from '../../Components/E-menu/Emenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import BannerSlider from '../../Components/carosel/Carosel'


const Home = () => {

   const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <BannerSlider/>
      <Emenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      
    </div>
  )
}

export default Home