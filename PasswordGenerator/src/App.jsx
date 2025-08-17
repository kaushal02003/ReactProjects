import { useCallback, useState , useEffect ,useRef } from 'react'
import './App.css'
import { Copy } from '../components/Copy'



function App() {
  const [length ,setLength] = useState(8)
  const [numAllowed , setNumAllowed] = useState(false)
  const [characterAllowed , setCharacterAllowed] = useState(false)
  const [password , SetPassword] = useState("")
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed){str +="0123456789"}
    if(characterAllowed){str += "!@#$%^&*()-_=+[]{}|;:'`,.<>/?~"}
    for(let i=0 ; i<length ; i++){
      pass += str[Math.floor(Math.random()*str.length)]
    }
    SetPassword(pass);
  } ,[length , numAllowed , characterAllowed, SetPassword])
  useEffect(()=>{
    passwordGenerator();
  },[length , numAllowed , characterAllowed , passwordGenerator])
  
  const passwordRef = useRef(null);

  const copyPassword = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
  },[password])
  return (
      <>
        <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-[#4d606e] via-[#3fbac2] to-[#d3d4d8] rounded-lg p-6">
          <p className='flex flex-col justify-start items-center text-2xl'>Password Generator</p>
          <div className='flex justify-center items-center mt-4'>
              <div className="relative rounded-full overflow-hidden bg-white shadow-xl w-72">
            <input className="input bg-transparent outline-none border-none pl-5 pr-13 py-4 w-full font-sans text-lg font-semibold text-black" 
            placeholder="Generate Your Password" name="text" type="text" value={password} readOnly 
            ref={passwordRef}/>
          <div className="absolute right-2 top-[0.4rem]">
            <button className="w-12 h-12 p-3 rounded-full bg-violet-500 group shadow-xl flex items-center justify-center relative overflow-hidden"
            onClick={copyPassword}>
             <Copy width={20} height={20} stroke="#FFFFFF" />
            </button>
          </div>
        </div>
          <button class="inline-block py-2 px-6 ml-4 rounded-2xl bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200"
          onClick = {passwordGenerator}>
          Generate
          </button>
        </div>
        <div className='flex flex-row justify-start items-center mt-3'>
          <input className="mr-2"  type="range" 
          min={6} 
          max={20} 
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length : {length}</label>

          <input type='checkbox' className='ml-5 mr-1 h-6 w-6'
          onChange={()=>{setNumAllowed((tick)=>(!tick))}} />
          <label>Numbers</label>

          <input type='checkbox' className='ml-5 mr-1 h-6 w-6'
          onChange={()=>{setCharacterAllowed((tick)=>(!tick))}} />
          <label>Characters</label>
        </div>
        </div>
        </>                
    )
  }

export default App
