import React from 'react'
import './App.css'
import UserContext from './context/userContext'
import { Login , Profile} from './components'
import UserContextProvider from './context/userContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Hello i am learning contextAPI</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
