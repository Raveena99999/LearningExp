import React from 'react'
import { Box, Image, Text, Button, Flex, useToast } from "@chakra-ui/react";
import logoimage from "../assets/logoimage.svg"
import { Link } from 'react-router-dom';
export default function Ourgoals() {
  return (
    <div>
       <Flex align="center" justify="space between" w="100%" bg="#677294">
          <Image h="2.5rem" src={logoimage} mr="4"  mt="1rem" w="30vw"/>
        

        <Flex  w="60vw" justify="space-between" align="center">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              borderBottom: "2px solid #FFEC05",
              color:"white"
            }}
          >
            Home
          </Link>

          <Link
            to="/serviceus"

            style={{
              textDecoration: "none",
              transition: "transform 0.2s, font-weight 0.2s", 
              color:"white"

            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)"; 
              e.target.style.fontWeight = "bold"; 
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.fontWeight = "normal"; 
            }}
          >
            Services Us
          </Link>

          <Link
            to="/whyus"
            style={{
              textDecoration: "none",
              transition: "transform 0.2s, font-weight 0.2s", 
              color:"white"

            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)"; 
              e.target.style.fontWeight = "bold"; 
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.fontWeight = "normal"; 
            }}
          >
            Why Us
          </Link>

          <Link
            to="/ourgoals"
            style={{
              textDecoration: "none",
              transition: "transform 0.2s, font-weight 0.2s", 
              color:"white"

            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)"; 
              e.target.style.fontWeight = "bold";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)"; 
              e.target.style.fontWeight = "normal"; 
            }}
          >
            Our goals
          </Link>
          <Button
            ml="4"
            borderRadius="2rem"
            fontSize="0.8rem"
            bg="#FFEC05"
            h="2.2rem"
            w="7rem"
            // onClick={handleClick}
            onClick={() =>
              toast({
                title: 'Thanks for contacting',
                description: "Please fill email address first in input field",
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: "top",
              })
            }

          >
            Contact Us
          </Button>
        </Flex>
        </Flex>
        <Text textAlign="center" fontSize="2xl" mt="2rem">Welcome to our Goals</Text>

    </div>
  )
}
