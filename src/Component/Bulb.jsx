import React, { useState } from "react";
import { Button } from "@mui/material";

export const Bulb=()=>{
    const [on, setOn]= useState(false);
    return(
        <React.Fragment>
            <h1> fan on off here</h1>
            <h2>{on? "on" : "off"}</h2>
            <div className={on? "Bulbon" : "Bulboff"}>
                <Button variant="contained" color="primary" onClick={()=>setOn(!on)} >
                    {on? "on" : "off"}
                    </Button>

            </div>
        </React.Fragment>
    )
}