import React from "react";
import bluewomen from "../assets/bluewomen.jpg";
import anotherbutton from "../assets/anotherbutton.svg";
import arrowwhite from "../assets/arrowwhite.svg";
import vediosmall from "../assets/vediosmall.mp4";
import logoimage from "../assets/logoimage.svg";
import { Box, Image, Text, Button, Flex, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Afternavbar() {
  const navigate = useNavigate();
  const toast = useToast()
  function handleClick(){
    prompt("Enter your name to book demo class ")
    alert("you can now attend the demo class")
  }

  return (
    <Box position="relative" overflowX="hidden">
      <Flex
        w="80%"
        m="auto"
        justify="space-between"
        align="center"
        p="2"
        color="white"
        position="absolute"
        top="0"
        left="0"
        right="0"
        zIndex="1"
        width="80%"
      >
        <Flex align="center">
          <Image h="2.5rem" src={logoimage} mr="4" ml="2rem" mt="1rem" />
        </Flex>

        <Flex align="center" w="45vw" justify="space-around" mt="1rem">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              borderBottom: "2px solid #FFEC05",
            }}
          >
            Home
          </Link>

          <Link
            to="/serviceus"

            style={{
              textDecoration: "none",
              transition: "transform 0.2s, font-weight 0.2s", 
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
            _hover={{bg:"black", color:"red",fontWeight:"bold"}}
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

      {/* Background image with overlay */}
      <Box
        w="100%"
        h="100vh"
        backgroundImage={`linear-gradient(to bottom, rgba(38, 43, 219, 0.8), rgba(38, 43, 219, 0.1)), url(${bluewomen})`}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
      >
        {/* Content */}
        <Box
          position="absolute"
          top="50%"
          left="30%"
          transform="translate(-50%, -50%)"
          zIndex="0"
          color="white"
        >
          <Text fontSize="3xl" fontWeight="bold">
            We create Learning Experience{" "}
          </Text>
          <Text fontSize="3xl" fontWeight="bold" mb="4">
            With Excellent Technology.{" "}
          </Text>
          <Text color="white" fontSize="md">
            unlimited access to 100+world-class courses,hands-on{" "}
          </Text>
          <Text color="white" fontSize="md">
            Projects,and job ready certificate programs-{" "}
          </Text>
          <Text color="white" fontSize="md" mb="4">
            All included in your subscription{" "}
          </Text>

          <Flex align="center" mt="2">
            <Image w="8rem" src={anotherbutton} _hover={{bg:"blue" ,w:"12vw"}} onClick={handleClick}  />
            <Text fontSize="md" ml="0.5rem">
              Explore More
            </Text>
            <Image ml="0.5rem" src={arrowwhite} />
          </Flex>
        </Box>
      </Box>

      {/* Video */}
      <Flex
        position="absolute"
        top="0"
        left="22%"
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
      >
        <video width="25%" style={{ borderRadius: "1rem" }} controls>
          <source src={vediosmall} type="video/mp4" />
        </video>
      </Flex>
    </Box>
  );
}
