import axios from "axios"
import React, { useEffect, useState } from "react";

export const GraphApi = ()=> {
   const [data,setData] = useState([])

   const getData =async () => {
      const result = await axios.get("http://dev.etldata.traversetec.co/test.php")
      console.log(result.data.data)
      setData(result.data.data) // only set result.data.data to the data state variable
   }
   
   useEffect(()=>{
      getData()
   },[])

   return (
     <div className="App">
       {
          data.map((item)=>{
             return(
                <div>
                   <h1>{item.Income}</h1> // access properties with lowercase letters
                </div>
             )
          })
       }
     </div>
   );
}

export default GraphApi