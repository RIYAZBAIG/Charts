import React, { useState } from "react";
import { Button,TextField, Grid } from "@mui/material";
export const TodoList=()=>{
    const [list, setList]= useState([]);
    const [text, setText] = useState ("");
    const handleAdd =()=>{
        setList([text,...list])}

        
        const handleDelete= (ind)=>{
            const result=list.filter((item,i)=>i!==ind)
            setList(result)
        }

    

    return(
        <React.Fragment>
            <h2>this is medical list here... </h2>
 <Grid container spacing ={3}>
    <Grid item xs = {4}>
    <TextField id="outlined" label = "Add Text" onChange={(e)=>setText(e.target.value)}/>
    </Grid>

    <Grid item xs = {4}>
        <Button variant="contained" onClick={handleAdd}>ADD</Button>
    </Grid>
    <Grid item xs = {4}>
        <TextField id="outlined" label = "Search"/>
    </Grid>
    
    
    </Grid>   
    {
list.map((item,ind)=>{
    return(
        <div>
            <h2>{ind} </h2>
            <h1>{item}</h1>h
            <Button onClick={()=> handleDelete(ind) }>Delete</Button>
        </div>
    )
})
    }         
        </React.Fragment>
    )
    
}