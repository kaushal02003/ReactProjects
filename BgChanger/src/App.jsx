import { useState } from 'react'

function App() {
  const [color , setColor] = useState('#000')
  return (
    <>
    <div className='flex flex-col justify-end items-center h-screen w-full' style={{backgroundColor: color}}>
      <div className='fixed bg-white p-4 m-10 rounded-3xl'>
        <div className='flex flex-row justify-evenly gap-6'>
          <button className='bg-red-600 px-3 py-2 rounded-2xl text-lg font-semibold' onClick={()=>{setColor('red')}}>Red</button>
          <button className='bg-blue-600 px-3 py-2 rounded-2xl text-lg font-semibold' onClick={()=>{setColor('blue')}}>Blue</button>
          <button className='bg-green-600 px-3 py-2 rounded-2xl text-lg font-semibold' onClick={()=>{setColor('green')}}>Green</button>
          <button className='bg-yellow-500 px-3 py-2 rounded-2xl text-lg font-semibold' onClick={()=>{setColor('yellow')}}>Yellow</button>
          <button className='bg-purple-600 px-3 py-2 rounded-2xl text-lg font-semibold' onClick={()=>{setColor('purple')}}>Purple</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
