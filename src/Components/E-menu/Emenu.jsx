import React from 'react'
import './Emenu.css'
//run devimport {menu_list} from '../../assets/frontend_assets/assets'
import {pizza_menu_list} from '../../assets/pizza/assetspizza.js'

const Emenu = ({category,setCategory}) => {
     

  return (
          <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>
            "Discover our diverse and delicious menu, 
            crafted to satisfy every craving and occasion."
            </p>
            <div className='explore-menu-list'>
                {pizza_menu_list.map((item,index)=>{
                    return (
                        <div onClick={()=>setCategory(
                            prev=>prev===item.menu_name?"All":item.menu_name
                        )} key={index} className='explore-menu-list-item'>
                           <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                           <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr/>
          </div>
        )
    }
export default Emenu