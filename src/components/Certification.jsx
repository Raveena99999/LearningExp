import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import tick from "../assets/tick.png";
import circle from "../assets/circle.png";
export default function Certification() {
  return (
    <Box w="90%" m="auto"  bg="#F9F9FF" mt="5rem">
      <Text fontSize="2rem" textAlign="center" color="#000000">
        We Completed 1200+ Certification Program
      </Text>
      <Text fontSize="2rem" textAlign="center" color="#000000" mt="-10px">
        Successfully & Counting
      </Text>
      <Text color="#707070" textAlign="center" mt="0.5rem">
        At Learning Exp. We are committed to providing you with a superior
        learning
      </Text>
      <Text color="#707070" textAlign="center">
        Experience that empowers you to achieve your goals.join us today and
      </Text>
      <Text color="#707070" textAlign="center">
        Embark on a journey of discovery,growth and success
      </Text>

      <Flex justify="space-evenly" mt="1.5rem" flexWrap="wrap" >
        <Box p="4" w={{ base: "45%", sm: "30%", md: "20%" }}>
          <Flex align="center">
            <Image h="6vh" src={tick} />
            <Text
              color="#1453FF"
              fontSize={{ base: "1rem", sm: "1.3rem" }}
              ml="0.5rem"
            >
              100+
            </Text>
          </Flex>
          <Text color="#1453FF" fontSize="1rem" ml="2.5rem" mt="-1rem">
            Batch complete
          </Text>
        </Box>

        <Box p="4" w={{ base: "45%", sm: "30%", md: "20%" }}>
          <Flex align="center">
            <Image h="6vh" src={tick} />
            <Text
              color="#1453FF"
              fontSize={{ base: "1rem", sm: "1.3rem" }}
              ml="0.5rem"
            >
              50+
            </Text>
          </Flex>
          <Text fontSize="1rem" ml="2.5rem" mt="-1rem">
            Active Batches
          </Text>
        </Box>

        <Box p="4" w={{ base: "45%", sm: "30%", md: "20%" }}>
          <Flex align="center">
            <Image h="6vh" src={circle} />
            <Text
              color="#1453FF"
              fontSize={{ base: "1rem", sm: "1.3rem" }}
              ml="0.5rem"
            >
              10,000+
            </Text>
          </Flex>
          <Text fontSize="1rem" ml="2.5rem" mt="-1rem">
            Students satisfied
          </Text>
        </Box>

        <Box p="4" w={{ base: "45%", sm: "30%", md: "20%" }}>
          <Flex align="center">
            <Image h="6vh" src={circle} />
            <Text
              color="#1453FF"
              fontSize={{ base: "1rem", sm: "1.3rem" }}
              ml="0.5rem"
            >
              10+
            </Text>
          </Flex>
          <Text fontSize="1rem" ml="2.5rem" mt="-1rem">
            Course modules
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
