import React, { useState } from "react";

export const TodoList1=()=>{
    const [list, setList]= useState ("");
    const [data,setdata]= useState ([]);

    const handleAdd =()=>{
        setdata([...data,list])
    }
    const handleDelete =(i)=>{
        setdata(
            data.filter((item,ind)=>{return i !==ind})
        )
    }

    return(
        <React.Fragment>
            <h2>this is TodoList</h2>
            <input type="text" value={list} onClick={(e)=>setList(e.target.value)} />
            <button onClick={handleAdd}>ADD</button>
            {
                data.map ((item,i)=>{
                    return(
                        <div>
                            <h2>{item}</h2>
                            <button onClick={()=>handleDelete(i)} >Delete</button>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}