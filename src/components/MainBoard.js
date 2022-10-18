import React from 'react'
import Table from "../components/Table"
import  Card  from '../components/Card';
import style from '../components/style.module.css';

function MainBoard() {
  return (
    <div className={style.main}>
       <h1>DashBoard</h1>
       <Card />
       <Table />
    </div>
  )
}

export default MainBoard
 