import { Box } from '@chakra-ui/react'
import React from 'react'
import Afternavbar from './Afternavbar'
import Cards from './Cards'
import Dreamcareer from './Dreamcareer'
import Certification from './Certification'
import Studentfeedback from './Studentfeedback'
import Footer from './Footer'

export default function Learningexphome() {
  return (
    <Box>
        <Afternavbar/>
        <Cards/>
        <Dreamcareer/>
        <Certification/>
        <Studentfeedback/>
        <Footer/>
    </Box>
  )
}
