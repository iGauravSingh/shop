import React, { useState } from 'react'
import './QuantityAdder.css'



const QuantityAdder = () => {

    const [counter,setCounter] = useState(0)

  return (
    <div>
        <div className='quantityMaster'>
            <button className='qm-1' onClick={()=>setCounter(prevstate=> prevstate - 1)}>-</button>
            <p>{counter}</p>
            <button className='qm-1' onClick={()=>setCounter(prevstate=> prevstate + 1)}>+</button>
        </div>
        <div className='ob-1'>
        <button className='qm-2'>Add to Cart</button>
        </div>
    </div>
  )
}

export default QuantityAdder