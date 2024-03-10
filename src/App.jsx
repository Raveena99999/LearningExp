import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Certification from './components/Certification'
import Studentfeedback from './components/Studentfeedback'
import Footer from './components/Footer'
import Dreamcareer from './components/Dreamcareer'
import Afternavbar from './components/Afternavbar'
import Allroutes from './components/Allroutes'
import { Box} from "@chakra-ui/react";
import Learningexphome from './components/Learningexphome'
import { Route, Routes } from 'react-router-dom'
import Serviceus from './pages/Serviceus'
import Whyus from './pages/Whyus'
import Ourgoals from './pages/Ourgoals'

// import './App.css'

function App() {

  return (
    <Box bg="#F9F9FF">
  
{/* <Learningexphome/> */}
<Routes>
<Route path='/serviceus' element={<Serviceus/>}></Route>
<Route path='/whyus' element={<Whyus/>}></Route>
<Route path='/ourgoals' element={<Ourgoals/>}></Route>

<Route path='/' element={<Learningexphome/>}></Route>
</Routes>
    </Box>
  )
}

export default App
