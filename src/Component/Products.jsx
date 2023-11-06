import React, { useEffect, useState } from "react";
import { Button, Grid, Card, CardContent } from "@mui/material";
import axios from "axios";

export const Products=()=>{
    const [data,setData] = useState([]);

    const getData = async ()=>{
        const result = await 
        axios.get("https://fakestoreapi.com/products");
        console.log(result.data);
        setData(result.data)
    }
    useEffect (()=>{
        getData();
    },[])
    return(
        <React.Fragment>
            <h2>this is Products</h2>
          <Grid container spacing = {3}>
          {
                data.map ((item)=>{
                    <h1>{item}</h1>
           return(
            <Grid item xs = {3}  >

         <Card>
            <CardContent>


                <img src={item.image} alt="" height="200px"  width="220px"/>
                <h1>{item.category}</h1>
                <h1>{item.id}</h1>
                <h1>{item.price}</h1>
                <h1>{item.description}</h1>


            </CardContent>
         </Card>

            </Grid>
           )

                })
            }


          </Grid>
        </React.Fragment>
    )
}