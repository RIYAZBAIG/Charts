import React, { useState }  from "react";

export const  Color=()=>{
    const [color, setColor]= useState (0)
    return(
           
      <div  style={{border:"5px solid blue", height:"200px" ,width:"200px" , backgroundColor:"red"}} > 
     <button onClick={()=>setColor("Red Color")}>Red Color</button>
     <button onClick={()=>setColor("Yellow Color")} >Yellow Color</button>
     <button onClick={()=>setColor("Green Color")} >Green Color</button>

      </div>

    )

}