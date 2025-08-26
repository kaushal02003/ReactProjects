import React , {useState} from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "../feature/todo/todoSlice";


function AddTodo() {
    const [input , setInput ] = useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


  return (
    <>
    <div className="flex justify-center font-semibold text-[4rem] pt-16 mb-7 bg-gradient-to-tl from-gray-950 via-slate-700 to-zinc-400 bg-clip-text text-transparent">Todo List</div>
      <form onSubmit={addTodoHandler} className="flex justify-center items-center">
        <div className="p-7 overflow-hidden w-[80px] h-[80px] hover:w-[350px] bg-[#303030] shadow-[2px_2px_24px_rgba(0,0,0,0.12)] rounded-full flex group justify-center items-center hover:duration-300 duration-300">
          <div className="flex items-center justify-center fill-white">
            <input
              type="text"
              className="outline-none text-[26px] bg-transparent w-full text-white font-normal "
              placeholder="Enter your Todo..."
              value={input}
              onChange={(e)=>{setInput(e.target.value)}}
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Isolation_Mode"
                data-name="Isolation Mode"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
