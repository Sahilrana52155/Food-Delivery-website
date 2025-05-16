import React, { useState } from 'react'
import './Home.css'
import Header from '../../compnents/Header/Header'
import Exploremenu from '../../compnents/Exploremenu/Exploremenu'
import FoodDisplay from '../../compnents/Food Display/FoodDisplay'
import AppDownload from '../../compnents/AppDownload/AppDownload'



const Home = () => {
  const[category,setcategory]=useState("All")

  return (
    <div>
      <Header/>
<Exploremenu category={category} setcategory={setcategory}/>
<FoodDisplay category={category}/>
<AppDownload/>

    </div>
  )
}

export default Home
