import React from 'react'
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import arrowright from "../assets/arrowright.png"
import humanimage2 from "../assets/humanimage2.jpg"
import star from "../assets/star.png"

export default function Studentfeedback() {
  return (
    <Box w="80%" m="auto"  bg="#F9F9FF" >
        <Flex  justify="space-between" align="center" w="90%" m="auto">
  <Box p='4' > 
  <Text fontSize="2rem"  color="#000000" mt="-10px">
        Our Students Feedback
      </Text>
      <Text color="#707070"  mt="0.5rem">
        At Learning Exp. We are committed to providing you with a superior
        learning Experience that empowers you 
      </Text>
      <Text color="#707070" >
      to Achieve your goals .join us today and Embark on a journey of discovery,growth and success

      </Text>

  </Box>
  <Box p='4' >
    <Flex>
    <Button bg="#0000000D" >
Read more <Image w="2rem" src={arrowright}/></Button>
    </Flex>
  </Box>
</Flex>

<Flex w="90%" m="auto">
  <Image src={humanimage2} h="45vh" w="25%"/>

  <Box bg="#0000000D" w="75%" >
    <Flex ml="8rem" mt="3rem" >
    <Image h="5vh"src={star}/>
    <Image h="5vh"src={star}/>
    <Image h="5vh"src={star}/>
    <Image h="5vh"src={star}/>
    <Image h="5vh"src={star}/>

    </Flex>
    <Text mt="1rem" ml="8rem">"Sed Ut Perspiciatis Unde omnis iste natus error sit</Text>
    <Text ml="8rem">voluptatem accusantium doleremque</Text>
    <Text ml="8rem">Laudantium</Text>
    <Text ml="8rem">Totam rem aperiam,eaque ipsa quae ab illo"</Text>
    <Text mt="1rem" ml="8rem" color="black" fontWeight="bold"> Riad Isalm</Text>
    <Text ml="8rem"color="black" fontWeight="bold" fontSize="12px">product manager <span style={{color:'#333697'}} >@Learning.com</span> </Text>




  </Box>
</Flex>
</Box>
  )
}
