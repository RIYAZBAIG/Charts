import React, { useState } from "react";
import { Button } from "@mui/material";

export const Counter=()=>{
    const [num,setNum]= useState(0);
    return(
        <React.Fragment>
            <h2>this is Counter</h2>
            <Button variant="contained" color="secondary" onClick={()=>setNum(num+1)}>INCREAMENT</Button>
            <h2>{num}</h2>
            <Button variant="contained" color="secondary" onClick={()=>setNum(num-1)}>DICREAMENT</Button>

        </React.Fragment>
    )
}