import React, { useState } from "react";
import {motion, AnimateSharedLayout } from "framer-motion"
import style from '../components/style.module.css';
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import {UilTimes} from "@iconscout/react-unicons";
import Chart from "react-apexcharts"

function Cards({title, color, barValue, value, Png, series}) {

  const [expanded, setExpanded] = useState(false);
  return(
    <AnimateSharedLayout>

      { expanded ?  <ExpandedCard  title ={title}
         color= {color} barValue= {barValue}
         value= {value} Png ={Png} series = {series} setExpanded = {() => setExpanded(false)} />  : 

         <CompactCard title ={title}
         color= {color} barValue= {barValue}
         value= {value} Png ={Png} series = {series}  setExpanded = {() => setExpanded(true)} />
      }
      
    </AnimateSharedLayout>
  ) 
}

//make the structure of compact card

function CompactCard ({title, color, barValue, value, Png, setExpanded }) {
  return(
    <motion.div className={style.compact} 
    
    style = {{
      background : color.backGround,
      boxShadow : color.boxShadow
    }} 
    onClick = {setExpanded}  layoutId = "expandableCard" >

      <div className={style.radialBar}>
        <CircularProgressBar percent={barValue} size="50" colorSlice="white" fontWeight={400} fill="white" fontColor="white" />

        <span> {title} </span>
      </div>

      

      <div className= {style.detail}>
        <Png png={Png} />
        <span>${value} </span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  )
}

function ExpandedCard ({title, color, barValue, value, series, setExpanded }) {

  const data = {
    options : {

       chart : {
         type: "area",
         height: "auto",
       },
       
       dropShadow : {
         enabled: false,
         enabledOnSeries : undefined,
         top: 0,
         left: 0,
         blur: 3,
         color: "#000",
         opacity: 0.35,
       },

       fill : {
         colors: ["#fff"],
         type: "gradient",
       },

      dataLabels: {
        enabled: false,
      },

      stroke: {
        curve: "smooth",
        colors : ["white"],
      },

      tooltip: {
        x: {
           format : "dd/MM/yy HH:mm",
        }, 
      },

      grid:{
        show : true,
      },
      
      xaxis : {
        type : "datetime",
        categories: [
          "2022-06-16T00:00:00.000Z",
          "2022-06-16T01:30:00.000Z",
          "2022-06-16T02:30:00.000Z",
          "2022-09-16T03:30:00.000Z",
          "2022-06-16T04:30:00.000Z",
          "2022-06-16T05:30:00.000Z",
          "2022-06-16T06:30:00.000Z",
        ]
      }

    }
  }
  return(
    <motion.div className={style.expanded}
     style={{
       background : color.backGround,
       boxShadow : color.boxshadow
     }}  layoutId = "expandableCard" >

      <div style={{
          alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick= {setExpanded}   />
      </div>
      <span> {title} </span>

      <div className={style.chart}>
        <Chart series = {series} type ="area" options = {data.options} />
      </div>
      <span>Last 24 hours</span>
       
    </motion.div>
  )
}


export default Cards;
