import React from 'react'
import { useState } from 'react';
import Logo from "../../src/images/logo.png";
import style from "../components/style.module.css"; 
import { SideBarData } from './Data';

function Sidebar() {

  const [selected, setSelected] = useState(0);
  return (
    <div className={style.Sidebar}>
      
    {/* logo */}
    <div className={style.logo}>
      <img src={Logo} alt="logo" />
      <span>
        Sh<span>o</span>ps
      </span>

    </div>
    <div className={style.menu}>
      
       {SideBarData.map((item, index) =>{
         return(
          <div className={selected === index ? `${style.item} ${style.active}` : `${style.item}`}
           key={index} onClick ={() => setSelected(index)}
          >
               <item.icon />
               <span>{item.heading} </span>
          </div>
         )
       })} 
    </div>
    </div>
  )
}

export default Sidebar
