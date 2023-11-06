import React, { useState } from "react";
import { Button } from "@mui/material";

export const Countetr=()=>{
    const [num, setNum]= useState (0);
    return(
        <React.Fragment>
            <h1>this is counter</h1>
            <Button variant="contained" color="secondary" onClick={()=>setNum(num+1)}>INCREAMENT</Button>
            <h3>{num}</h3>
            <Button variant="contained" color="primary" onClick={()=>setNum(num-1)}>INCREAMENT</Button>

        </React.Fragment>
    )
}