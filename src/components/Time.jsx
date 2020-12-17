import React, { useState } from 'react'

const Time = ({firstDay, lastDay}) => {
    const [hours,setHours]=useState([{id:1,y:0,z:"00:00"},{id:2,y:1,z:"01:00"}
    ,{id:3,y:2,z:"02:00"},{id:4,y:3,z:"03:00"},{id:5,y:4, z:"04:00"}
    ,{id:6,y:5,z:"05:00"},{id:7,y:6,z:"06:00"},{id:8,y:7,z:"07:00"},
    {id:9,y:8,z:"08:00"},{id:10,y:9,z:"09:00"},{id:11,y:10,z:"10:00"},
    {id:12,y:11,z:"11:00"},{id:13,y:12,z:"12:00"},{id:14,y:13,z:"13:00"},
    {id:15,y:14,z:"14:00"},{id:14,y:15,z:"15:00"},{id:15,y:16,z:"16:00"},
    {id:16,y:17,z:"17:00"},{id:17,y:18,z:"18:00"},{id:18,y:19,z:"19:00"},
    {id:19,y:20,z:"20:00"},{id:20,y:21,z:"21:00"},{id:21,y:22,z:"22:00"},
    {id:22,y:23,z:"23:00"} ,{id:23,y:"all day",z:"24/24"}])
    const [statut,setStatut]=useState("open")
    const [openHour, setOpenHour]=useState(null);
    const [closeHour, setCloseHour]=useState(null);
 
    const selectHour =(id)=>{
    let hourFilter= hours.filter(el=>el.id===id)
if (statut==="open"){setOpenHour(hourFilter[0].y)}
else {setCloseHour(hourFilter[0].y)}
    }

    const affichageData = () =>{
        console.log(firstDay)
        console.log(lastDay)
        console.log(openHour)
        console.log(closeHour)
    }

    return (
        <div>
                        <div className="open">
<select onChange={(e)=>setStatut(e.target.value)}>
    <option value="open">open</option>
    <option value="close">close</option>
</select>
            </div>
            <div className="time">
            {hours.map(el=><div key={el.id}>
<p className="element"  onClick={()=>  selectHour(el.id)}>{el.z} </p>
            </div>)}
            <div  className="btn"  onClick={affichageData}>
                Submit 
            </div>
            
            </div>

            
            <div>
                <p>openHour: {openHour}</p> 
                <p>closeHour: {closeHour}</p> 

            </div>
        </div>
    )
}

export default Time
