import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Loader from './components/Loader'

function App() {

  return (
    <div className="root">
      <Header />
      <Loader/>
    </div>
  )
}

export default App