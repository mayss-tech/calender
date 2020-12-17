import React, { useState } from 'react'

const Carousel = () => {
    const [status,setStatus]=useState(["Open","Close"]);
    const [Currentvalue, setCurrentvalue] = useState(1);
    const prev = () => {
        if (Currentvalue == 0) {
          setCurrentvalue(status.length - 1);
        } else {
          setCurrentvalue(Currentvalue - 1);
        }
      };
      const next = () => {
        if (Currentvalue == status.length - 1) {
          setCurrentvalue(0);
        } else {
          setCurrentvalue(Currentvalue + 1);
        }
      };
      const selectHour =(id)=>{
        let hourFilter= hours.filter(el=>el.id===id)
 if (status[Currentvalue]==="Open"){setOpenHour(hourFilter[0].y)}
 else {setCloseHour(hourFilter[0].y)}
     }
    return (

        <div>
            <p onClick={next()}>+</p>
            {status[Currentvalue]}
            <p onClick={prev()}>-</p>
        </div>
    )
}

export default Carousel
