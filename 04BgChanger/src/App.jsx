import { useState } from 'react'
import './App.css'

function App() {
  const [Color,setColor] = useState("black")
  
  return (
    <div className="w-full h-screen"
    style={{backgroundColor:Color}}>
      <div className="absolute bottom-0 right-0 flex flex-wrap justify-center inset-x-0 px-2">
        <div className='flex flex-wrap bg-white rounded-full px-2 py-2 justify-center gap-2'>
          <button 
           onClick={()=> setColor("red")}
          className='bg-red-600 tex-white rounded-full px-4 py-1'
           >Red
           </button>

          <button
          onClick={()=> setColor("green")}
          className='bg-green-600 tex-white rounded-full px-4 py-1' >Green
          </button>

          <button
          onClick={()=> setColor("blue")}
          className='bg-blue-600 tex-white rounded-full px-4 py-1' >Blue
          </button>
          <button
          onClick={()=> setColor("yellow")}
          className='bg-yellow-600 tex-white rounded-full px-4 py-1' >Yellow
          </button>

          <button
          onClick={()=> setColor("lime")}
          className='bg-lime-600 tex-white rounded-full px-4 py-1' >Lime
          </button>

          <button
          onClick={()=> setColor("Violet")}
          className='bg-violet-500 tex-white rounded-full px-4 py-1' >Violet
          </button>

          <button
          onClick={()=> setColor("orange")}
          className='bg-orange-500 tex-white rounded-full px-4 py-1' >Orange
          </button>

        </div>
      </div>
    </div>

  )
}

export default App
