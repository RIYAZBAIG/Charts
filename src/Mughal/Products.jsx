import React, { useEffect, useState } from "react";
import axios from "axios";

export const Products =()=>{
    const [data, setData]= useState ([]);
    const getData =async ()=>{
        const result =await axios.get("https://fakestoreapi.com/products");
        console.log(result.data);
        setData(result.data)

    }
    useEffect (()=>{
        getData()
    },[])
    return(
        <div>
            <h2> this products</h2>
            {
                data.map ((item)=>{
                    return(
                        <div>
                            <h1>{item.title}</h1>
                            <h1>{item.id}</h1>
                            <img src={item.image} height="100px" width="100px"  />
                            <h1>{item.category}</h1>
                            <h1>{item.description}</h1>
                            <h1>{item.price}</h1>
                            <h1>{item.rating.rate}</h1>


                        </div>
                    )
                })
            }
            
        </div>
    )
}