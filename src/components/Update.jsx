import React from 'react'
import style from "../components/style.module.css"; 
import { UpdateData } from './Data';

function Update() {
  return (
    <div className={style.Update}>
      {UpdateData.map((update) => {
        return (
          <div className={style.updated}>

          <img src={update.img} alt ="images" />   

          <div className={style.notif}>

            <div style={{marginBottom : "0.5rem"}}>
               <span> {update.name} </span>
               <span> {update.notif} </span>
              </div>   
              <span> {update.time} </span>   
          </div>
            

          </div>
        )
      })
      
      }
    </div>
  )
}

export default Update
