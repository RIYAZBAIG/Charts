import React, { useState } from "react";
export const Counter=()=>{
    const[count,setcount]=useState(0)
    return(
        <div>
            <h1>Counter</h1>

            <button onClick={()=> count<10 && setcount(count+1)}>Inc</button>
            <h2>{count}</h2>
            <button onClick={()=>count>0&&setcount(count-1)}>Dec</button>
        </div>
    )
}