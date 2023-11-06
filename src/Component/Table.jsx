import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import axios from "axios";



export const Table=()=>{
    const [data,setData]= useState ([]);

    const getData = async ()=>{
        const result = await
        axios.get("https://reqres.in/api/products");
        console.log(result.data.data);
        setData(result.data.data)
    
    } 
    useEffect (()=>{
        getData()
    },[])
    return(
        <React.Fragment>
           <h1>this is table</h1>
           <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Year</th>
                <th>Color</th>


                
            </tr>
           {
            data.map((item)=>{
                
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.year}</td>
                        <td>{item.color}</td>

                        <td> <div style={{ height: "50px", width: "50px", borderRadius:"100px" }}></div></td>


                    </tr>
            
            })
           }
           </table>
        </React.Fragment>
    )
}