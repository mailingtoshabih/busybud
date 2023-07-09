import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Landing } from './pages/Landing'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'

function App() {




  return (
    <div className='font-poppins bg-transparent text-gray-800'>


      <Landing/>

      <Footer/>

      

    </div>
  )


}

export default App
