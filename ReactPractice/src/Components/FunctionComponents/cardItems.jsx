import React from "react"

let CardItems = (prop)=>(
    <span className="divCard">
        <img src={prop.image} height={150} alt=''/>
        <h4>{prop.title}</h4>
        <h5>{prop.desc}</h5>
        <button>{prop.price+' $'}</button>
    </span>
)

export default CardItems