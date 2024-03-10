import React, { useState } from "react";

("use client");

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  Flex,
  InputGroup,
  InputRightElement,
  Button,
  useToast
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import first1 from "../assets/first1.svg";
const Logo = (props) => {
  return <Image src={first1} />;
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const [email,setEmail]= useState("")
  const toast = useToast()

   function handleEmail(e){
      setEmail(e.target.value)
   }
   function handleSend(){
    alert("Thanks for contacting")
   }
  return (
    <Box mt="6rem">
      <Box
        position="relative"
        w="100%"
        bg="#EBEBF8"
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="1"
        >
          <Box
            w="100%"
            m="auto"
            h="15vh"
            borderRadius="0.8rem"
            bg="#333697"
            p="1rem"
          >
            <Flex align="center" justify="space-around">
              <Box>
                <Text color="white" fontSize="lg">
                  Contact us
                </Text>
                <Text color="white" fontSize="sm">
                  There are many variations of passages of loream ipsum
                </Text>
                <Text color="white" fontSize="sm">
                  but the majority have suffered alteration.
                </Text>
              </Box>
              <Box>
                <InputGroup>
                  <Input
                    placeholder="Email here"
                    borderRadius="2.5rem"
                    bg="white"
                    value={email}
                    onChange={handleEmail}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      borderRadius="2rem"
                      bg="#FFEC05"
                      w="5rem"
                      mr="1rem"
                      // onClick={handleSend}
                      onClick={() =>
                        toast({
                          title: 'contact',
                          description: "Thanku for contacting us",
                          status: 'success',
                          duration: 9000,
                          isClosable: true,
                          position: "top",
                        })
                      }
                    >
                      Send
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>

      <Box
        w="100%"
        m="auto"
        bg="#EBEBF8"
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10} w="90%" m="auto">
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
            spacing={166}
          >
            <Stack spacing={6}>
              <Flex mt="2rem">
                <Image h="5vh" src={first1} />
                <Text color="#707070">Learning Exp.</Text>
              </Flex>
              <Stack direction={"row"} spacing={6}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={"Pinterest"} href={"#"}>
                  <FaPinterest />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={"flex-start"} fontSize="0.8rem" mt="2rem">
              <ListHeader>Links</ListHeader>
              <Box as="a" href={"#"} color="#8A8A8A">
                Home
              </Box>
              <Box as="a" href={"#"} color="#8A8A8A">
                Pricing
              </Box>
              <Box as="a" href={"#"} color="#8A8A8A">
                Download
              </Box>
              <Box as="a" href={"#"} color="#8A8A8A">
                About
              </Box>
              <Box as="a" href={"#"} color="#8A8A8A">
                Service
              </Box>
            </Stack>
            <Stack align={"flex-start"} fontSize="0.8rem" mt="2rem">
              <ListHeader>Support</ListHeader>
              <Box as="a" href={"#"} color="#8A8A8A">
                FAQ
              </Box>
              <Box as="a" href={"#"} color="#8A8A8A">
                How it
              </Box>
              <Box as="a" href={"#"} color="#8A8A8A">
                Features
              </Box>
              <Box as="a" href={"#"} color="#8A8A8A">
                Contact
              </Box>
              <Box as="a" href={"#"} color="#8A8A8A">
                Reporting
              </Box>
            </Stack>

            <Stack align={"flex-start"} fontSize="0.8rem" mt="2rem">
              <ListHeader>Contact us</ListHeader>
              <Box as="a" href={"#"} color="#8A8A8A">
                +880 12345678
              </Box>
              <Box as="a" href={"#"} color="#8A8A8A">
                youremail@gmail.com
              </Box>
              <Box as="a" href={"#"} color="#8A8A8A">
                Pune City
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>

        <Flex justify="space-between" w="90%" m="auto" >
          <Box color="#677294" fontSize="0.6rem" mb="2rem">
            copyright & Design By @LearningExp
          </Box>
          <Box color="#677294" fontSize="0.6rem">
            Terms of use & privacy policy
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
