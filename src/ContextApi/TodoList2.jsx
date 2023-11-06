import React, { useState } from "react";
import { Button,Grid, TextField } from "@mui/material";

export const TodoList2=()=>{
    const [data, setData] = useState ("");
    const [text, setText] = useState ([]);

    const handleAdd = ()=>{
        setText([...text, data])


    }
    const handleDelete=((item)=>{
        const filtered=((elem)=>elem!==item)
        setText(filtered)
    })
    return(
        <React.Fragment>
            <h2>this is TodoList2</h2>
            <Grid container spacing={3}>
                <Grid item xs = {4}>
                    <TextField id="Outlined" label = "ADD TEXT" onChange={(e)=>setData(e.target.value)}/>
                </Grid>
                <Grid item xs = {4}>
                    <Button variant="contained" onClick={handleAdd}>ADD</Button>
                </Grid>
                <Grid item xs = {4}>
                    {
                        text.map ((item)=>{
                            return(
                                <li>{item} <Button variant="contained" onClick={()=>handleDelete(item)}>Delete</Button></li>

                            )
                        })
                    }
                </Grid>
            </Grid>
        </React.Fragment>
    )
}