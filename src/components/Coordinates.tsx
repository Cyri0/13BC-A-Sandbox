import { useState } from 'react'

type Marker = {
    xPos: number,
    yPos: number
}

const Coordinates = () => {
  const [xPos, setXPos] = useState<number>(0)
  const [yPos, setYPos] = useState<number>(0)

  const [markers, setMarkers] = useState<Marker[]>([])

  const pinMarker = () => {
    setMarkers([...markers, {xPos: xPos, yPos: yPos}])
  }

  return (
    <div>
        <div className='map'>
            { markers.map(marker => <div className='marker' style={{left: marker.xPos,bottom: marker.yPos
            }}></div>) }

            <div className='marker' 
            style={{
                left: xPos,
                bottom: yPos
            }}></div>
        </div>
        <label htmlFor="xPos">X:</label>
        <input  value={xPos}
                onChange={(e)=>setXPos(Number(e.target.value))}
                type='range' 
                id="xPos"
                max={188}/><br/>
        <label htmlFor="yPos">Y:</label>
        <input  onChange={(e)=>setYPos(Number(e.target.value))}
                value={yPos} type='range' id="yPos"
                max={188}/>
        <br/>
        <button onClick={pinMarker}>Pin Marker</button>
    </div>
  )
}

export default Coordinates