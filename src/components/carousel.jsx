import React,{useState} from 'react'

const Carousel = () => {
  let slide=[<p>Open</p>,<p>Close</p>]
    const[x,setx]=useState(0)
    const right=()=>{
    x===-100*(slide.length-1)?setx(0):setx(x-100)
}
    const left=()=>{
    x===0?setx(-100*(slide.length-1)):setx(x+100)
} 
  return (
    <div className="slider">
      {slide.map((el,id)=><div key={id}className="slide" style={{transform:`translateX(${x}%)`}}>{el}</div>)}
<button className="left" onClick={left}> <i className="fas fa-chevron-right"></i>
</button>
<button className="right" onClick={right} ><i className="fas fa-chevron-left"></i></button>
    </div>
  )
}

export default Carousel
