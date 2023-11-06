import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Card, CardContent, Rating } from "@mui/material";
import axios from "axios";


export const Jwellery=()=>{
    const [data, setData] = useState ([]);
    const getData = async ()=>{
        const result = await
        axios.get("https://fakestoreapi.com/products/category/jewelery");
        console.log(result.data);
        setData(result.data)
    }
    useEffect (()=>{
        getData();
    },[])
    return(
        <React.Fragment>
            <h2>this is Jwellery shopee</h2>
            <Grid contsiner spacing={3} >
                {
                    data.map ((item)=>{
                        <h1>{item}</h1>
                        return(
                            <Grid item xs = {4}>
                                <Card>
                                    <CardContent>
                                     <h1>{item.title}</h1>
                                     <h1>{item.title}</h1>
                                     <img src= {item.image} alt="" height="100px" width="100px" />
                                     <h1>{item.price}</h1>
                                     <h1>{item.id}</h1>
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