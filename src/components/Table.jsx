import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import style from '../components/style.module.css';

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData('Lasanla Chicken fri', 18908424, "17th June 2022" , "Approved"),
  createData('Big Baza Bang',  18908424, "17th June 2022" , "Pending"),
  createData('Mouth Freshner',  18908424, "17th June 2022" , "Approved"),
  createData('Cupcake',  18908424, "17th June 2022" , "Delivered"),
];

 const makeStyles = (status) =>{

   if (status === "Approved") {
     return{
       background : 'rgb(145 254 159 / 47%)',
       color : 'green'
     }
  
   }

   else if(status === "Pending"){
    return{
      background : '#ffadad8f',
      color : 'red'
    }
     
   }

   else{

    return{
      background : '#59bfff',
      color : 'white'
    }

   }
 }

export default function BasicTable() {
  return (
    <div className='table'>
      <h3>Recent Orders</h3>
      
    <TableContainer component={Paper}
      style = {{
        boxShadow : "0px 13px 20px 0px #80808029"
      }} className='Table'
    >
    

      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead className='Table'>
          <TableRow  className='Table'>
            <TableCell className={style.head}>Product</TableCell>
            <TableCell className={style.head} align="left">Tracking ID</TableCell>
            <TableCell className={style.head} align="left">Date</TableCell>
            <TableCell className={style.head} align="left">Status</TableCell>
            <TableCell className={style.head} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='Table'>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className= {style.row}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className={style.status} style={makeStyles(row.status)}>
                {row.status}
                  </span></TableCell>
              <TableCell align="left" className={style.Detail} > Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

