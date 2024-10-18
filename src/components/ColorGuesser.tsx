import { useState } from 'react'

const ColorGuesser = () => {
    const [red, setRed] = useState<number>(0)
    const [green, setGreen] = useState<number>(0)
    const [blue, setBlue] = useState<number>(0)

    const [riddleRed] = useState(Math.floor(Math.random() * 255 + 1))
    const [riddleGreen] = useState(Math.floor(Math.random() * 255 + 1))
    const [riddleBlue] = useState(Math.floor(Math.random() * 255 + 1))

    const [showRiddle, setShowRiddle] = useState(false)
  return (
    <div style={{
        background: `hsl(${riddleRed} ${riddleGreen}% ${riddleBlue}%)`
    }}>
        <div style={{
            width: "100px",
            aspectRatio: 1,
            background: `hsl(${red} ${green}% ${blue}%)`
        }}></div>

        <label htmlFor="red">hue = {red}</label><br/>
        <input  value={red} 
                onChange={(e)=>setRed(Number(e.target.value))}
                type='range' id="red" min={0} max={255}/>
        <br/>
        <label htmlFor="green">saturation = {green}</label><br/>
        <input  value={green} 
                onChange={(e)=>setGreen(Number(e.target.value))}
                type='range' id="green" min={0} max={100}/>
        <br/>
        <label htmlFor="blue">lightness = {blue}</label><br/>
        <input  value={blue} 
                onChange={(e)=>setBlue(Number(e.target.value))}
                type='range' id="blue" min={0} max={100}/> <br/>
        
        <button onClick={()=>setShowRiddle(true)}>Guess</button>
        {showRiddle ?
            <h2>rgb( {riddleRed},{riddleGreen},{riddleBlue} )</h2>:
            <h2>rgb( ?,?,? )</h2>
        }
    </div>
  )
}

export default ColorGuesser