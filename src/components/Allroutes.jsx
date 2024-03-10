import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Serviceus from '../pages/Serviceus'
import Whyus from '../pages/Whyus'
import Ourgoals from '../pages/Ourgoals'

export default function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/serviceus" element={<Serviceus/>}></Route>
            <Route path="whyus" element={<Whyus/>}></Route>
            <Route path="ourgoals" element={<Ourgoals/>}></Route>

        </Routes>
    </div>
  )
}
