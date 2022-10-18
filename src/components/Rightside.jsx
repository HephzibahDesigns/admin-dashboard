import React from "react";
import style from "../components/style.module.css"; 
import CustomerReview from "./CustomerReview";
import Update from "./Update";

function Rightside() {
  return (
    <div className={style.right}>
       <div>
         <h3>Update</h3>
         <Update />
       </div>
       <div> 
         <h3>Customer Review</h3>
         <CustomerReview />
       </div>
    </div>
  ) 
}

export default Rightside;
