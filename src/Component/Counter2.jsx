import React, { useState } from "react";
import { Button } from "@mui/material";

export const Counter2=()=>{
    const [num, setNum] =useState (0);
    return(
        <React.Fragment>
            <h2>this is counter</h2>
            <Button variant="contained" color="error" onClick={()=>setNum(num+1)}>INCREAMENT</Button>
            <h2>{num}</h2>
            <Button variant="contained" color="error" onClick={()=>setNum(num-1)}>DECREAMENT</Button>

        </React.Fragment>
    )
}