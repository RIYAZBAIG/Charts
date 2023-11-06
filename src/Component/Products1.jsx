import axios from "axios";
import React, { useEffect, useState }  from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const Products1=()=>{
    const [data, setData] = useState ([]);
    const getData = async ()=>{
        const result = await
        axios.get("https://fakestoreapi.com/products/1")
        console.log(result.data);
        setData(result.data)
    }
    useEffect (()=>{
        getData();
    },[])
     return(
        <React.Fragment>
            <h1>this is Products1 details here......</h1>
            <Grid container spacing={3}>
                {
                    data.map ((item)=>{
                        <h2>{item}</h2>
                        return(
                            <Grid item xs = {4}>
                                <Card>
                                    <CardContent>
                                        <img src={item.image} alt="" />
                                        <h1>{item.title}</h1>

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