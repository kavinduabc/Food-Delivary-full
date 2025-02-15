import React from 'react'
import './AppDownloard.css'
import { assets } from '../../assets/frontend_assets/assets'

const AppDownloard = () => {
  return (
    <div className='app-downloard' id='app-downloard'>
         <p>For Better Experience Download <br/>Tomato App</p>
         <div className='app-download-platforms'>
            <img src={assets.play_store} alt="pl" />
            <img src={assets.app_store} alt="as" />
         </div>
    </div>
  )
}

export default AppDownloard