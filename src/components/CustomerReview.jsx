import React from "react";
import Chart from "react-apexcharts";
import style from "../components/style.module.css";

function CustomerReview() {

  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      }
    ],

    options : {
      chart : {
        type: "area",
        height: "auto",
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
       colors : ["#ff929f"],
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
         "2018-06-16T00:00:00.000Z",
         "2018-06-16T01:30:00.000Z",
         "2018-06-16T02:30:00.000Z",
         "2018-06-16T03:30:00.000Z",
         "2018-06-16T04:30:00.000Z",
         "2018-06-16T05:30:00.000Z",
         "2018-06-16T06:30:00.000Z",
       ]
     },
     yaxis: {
       show : false
     },

     toolbar: {
       show: false
     }
    }
  }
  return(
    <div className={style.CustomerReview}>
    <Chart series={data.series} options = {data.options} type= "area" />
    </div>
  )
  
}

export default CustomerReview;
