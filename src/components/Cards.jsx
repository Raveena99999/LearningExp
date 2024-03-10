import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import smartphone from "../assets/smartphone.png";
import dashboard from "../assets/dashboard.png";
import layout from "../assets/layout.png";

export default function Cards() {
  return (
    <Box w="80%" m="auto"  bg="#F9F9FF">
      <Text fontSize="2rem" textAlign="center" color="#000000">
        We provide various kind of
      </Text>
      <Text fontSize="2rem" textAlign="center" color="#000000" mt="-10px">
        learning modules for you
      </Text>
      <Text color="#707070" textAlign="center">
        It is a long established factthat a reader will be distarcted by the
        readable{" "}
      </Text>
      <Text color="#707070" textAlign="center">
        {" "}
        content of a page when looking at its layout.The point of using Loream
      </Text>

      <Flex
        justify={{ base: "center", md: "space-around" }} // Centered for smaller screens and space-around for medium screens and above
        align="center"
        mt="2rem"
        wrap={{ base: "wrap", md: "nowrap" }} // Wrap on smaller screens and not wrap on medium screens and above
      >
        <Box
          p="4"
          h={{ base: "auto", md: "45vh" }}
          w={{ base: "80%", md: "15vw" }}
          bg="#F9F9FF"
          borderRadius="20px"
        >
          <Image src={smartphone} display="block" m="auto" />
          <Text
            fontSize={{ base: "1rem", md: "1.5rem" }}
            textAlign="center"
            color="#000000"
          >
            Learn Anything
          </Text>
          <Text fontSize="0.8rem" textAlign="center" color="#707070">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem
          </Text>
        </Box>
        <Box
          p="4"
          h={{ base: "auto", md: "50vh" }}
          w={{ base: "80%", md: "17vw" }}
          bg="#FFF5E1"
          borderRadius="20px"
        >
          <Image src={dashboard} display="block" m="auto" />
          <Text
            fontSize={{ base: "1rem", md: "1.5rem" }}
            textAlign="center"
            color="#000000"
          >
            Flexible Learning
          </Text>
          <Text fontSize="0.8rem" textAlign="center" color="#707070">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem
          </Text>
        </Box>
        <Box
          p="4"
          h={{ base: "auto", md: "45vh" }}
          w={{ base: "80%", md: "15vw" }}
          bg="#F9F9FF"
          borderRadius="20px"
        >
          <Image src={layout} display="block" m="auto" />
          <Text
            fontSize={{ base: "1rem", md: "1.5rem" }}
            textAlign="center"
            color="#000000"
          >
            Expert Connect
          </Text>
          <Text fontSize="0.8rem" textAlign="center" color="#707070">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem
          </Text>
        </Box>
      </Flex>

      <Text fontSize="1.5rem" textAlign="center" color="#000000" mt="1rem">
        Why Us
      </Text>
      <Text fontSize="0.8rem" textAlign="center" color="#707070" mt="0.5rem">
        At learning Exp.We are committed to providing you with a superior
        learning
      </Text>
      <Text fontSize="0.8rem" textAlign="center" color="#707070">
         expeience that empowers you to achieve your goals.Join us today
        and
      </Text>
      <Text fontSize="0.8rem" textAlign="center" color="#707070">
        embark on a journey of discovery ,growth and success.
      </Text>
    </Box>
  );
}
