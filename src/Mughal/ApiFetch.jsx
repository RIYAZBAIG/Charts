import axios from "axios";
import React, { useEffect, useState, Rating } from "react";

export const ApiFetch=()=>{
    const [data,setData] = useState ([]);

    const getData = async ()=>{
        const result = await axios.get("https://fakestoreapi.com/products");
        console.log(result.data);
        setData(result.data);

    }
    useEffect (()=>{
        getData();
    },[])
    return(
        <div>
            <h1>this is api fe </h1>
            {
                data.map ((item)=>{
                    return(
                        <div>
                            <h1>{item.title}</h1>
                            <img src={item.image} alt="" height="100px" width="100px" />
                            <h1>{item.discription}</h1>
                            <h1>{item.category}</h1>
                            <h1>₹{item.pric}</h1>
                            <h1>{item.count}</h1>
                            <Rating  value= {item.rating.rate} />
                           
                            



                        </div>
                    )
                })
            }
        </div>
    )
}