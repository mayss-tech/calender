import React, { useState } from 'react'

const Time = ({firstDay, lastDay}) => {
    const [hours,setHours]=useState([{id:1,y:0,z:"00:00"},{id:2,y:1,z:"01:00"}
    ,{id:3,y:2,z:"02:00"},{id:4,y:3,z:"03:00"},{id:5,y:4, z:"04:00"}
    ,{id:6,y:5,z:"05:00"},{id:7,y:6,z:"06:00"},{id:8,y:7,z:"07:00"},
    {id:9,y:8,z:"08:00"},{id:10,y:9,z:"09:00"},{id:11,y:10,z:"10:00"},
    {id:12,y:11,z:"11:00"},{id:13,y:12,z:"12:00"},{id:14,y:13,z:"13:00"},
    {id:15,y:14,z:"14:00"},{id:16,y:15,z:"15:00"},{id:17,y:16,z:"16:00"},
    {id:18,y:17,z:"17:00"},{id:19,y:18,z:"18:00"},{id:20,y:19,z:"19:00"},
    {id:21,y:20,z:"20:00"},{id:22,y:21,z:"21:00"},{id:23,y:22,z:"22:00"},
    {id:24,y:23,z:"23:00"} ,{id:25,y:"all day",z:"24/24"}])
    const [statut,setStatut]=useState("Open")
    const [openHour, setOpenHour]=useState(null);
    const [closeHour, setCloseHour]=useState(null);
    const [closeHourId, setCloseHourId]=useState(null);
    const [openHourId, setOpenHourId]=useState(null);
    let slide=["Open","Close"]
    const[x,setx]=useState(0)
    const selectHour =(id)=>{
        let hourFilter= hours.filter(el=>el.id===id)
    if (statut==="Open"){setOpenHour(hourFilter[0].y)
        setOpenHourId(hourFilter[0].id)}
    else  {setCloseHour(hourFilter[0].y)
        setCloseHourId(hourFilter[0].id)}
        }
    
    const right=()=>{
    x===-100*(slide.length-1)?setx(0):setx(x-100)
    setStatut(slide[x])
}
    const left=()=>{
    x===0?setx(-100*(slide.length-1)):setx(x+100)
    setStatut(slide[x])
}
    
    const affichageData = () =>{
        if(firstDay===null || lastDay===null || openHour===null || closeHour=== null ){
            alert("il a des champs vide!! svp compléter votre calendrier ")
        }
    }

    return (
        <div>
            <div className="slider open" >
     
<p className="right" onClick={right} > <i className="fas fa-chevron-left"></i>
</p>
{slide.map((el,id)=><div key={id} style={{transform:`translateX(${x}%)`}} > <h5 className="slide" >{el}</h5></div>)}
<p className="left" onClick={left} ><i className="fas fa-chevron-right"></i></p>
    </div>
            <div className="time">
            {hours.map(el=><div key={el.id}    className={(((statut==="Open")&&(el.id===openHourId))||((statut==="Close")&&(el.id===closeHourId)))? "choosenHour": "unchoosenHour"}   >
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
