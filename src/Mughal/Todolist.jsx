import React, { useState } from "react";
export const Todolist=()=>{
    const[list,setlist]=useState("")
    const[data,setdata]=useState([])

    const handleadd=()=>{
        setdata([...data,list])
        setlist("")
    }
    const handledelete=(i)=>{
        setdata(
            data.filter((item,ind)=>{ return i!==ind })
        )
    }
    return(
        <div>
            <h1>Todolist</h1>
            <input type="text" value={list} onChange={(e)=>setlist(e.target.value)}/>
            <button onClick={handleadd}>Add</button>

            {data.map((item,i)=>{
                return(
                    <div>
                        <h1>{item}</h1>
                        <button onClick={()=>handledelete(i)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}