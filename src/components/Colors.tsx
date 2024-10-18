import { useState } from 'react'

const Colors = () => {
  const colors = ["gray", "red", "black", "green", "orange"]
  const [idx, setIdx] = useState(0)

  const toggle = () => {
    if(idx < colors.length -1 ){
      setIdx(idx + 1)}
    else{
      setIdx(0)
    }
  }

  return (
    <button 
      onMouseEnter={toggle}
      className='colorbtn' 
      style={{background: colors[idx]}}
    ></button>
  )
}

export default Colors