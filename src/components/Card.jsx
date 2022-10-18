import React from 'react'
import style from '../components/style.module.css';
import Cards from './Cards';
import { cardData } from './Data';

function Card() {
  return (
    <div className={style.card}>
      {cardData.map((card, id) =>{
        return(
          <div className={style.container}>
             <Cards 
             title ={card.title}
             color = {card.color}
             barValue ={card.barValue}
             value= {card.value}
             Png = {card.png}
             series ={card.series} />   
          </div>
        )
      })}
    </div>
  )
}

export default Card
