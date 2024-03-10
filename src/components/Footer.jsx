import React from 'react'

'use client'

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
  Flex
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaYoutube,FaPinterest } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import first1 from "../assets/first1.svg"
const Logo = (props) => {
  return (
   
    <Image src={first1}/>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}
) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box
    w="80%" m="auto"
    bg="#EBEBF8"
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}  w="90%" m="auto">
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={166}>
          <Stack spacing={6}>
            <Flex>
              <Image h="5vh" src={first1}/>
            <Text color="#707070">Learning Exp.</Text>
            </Flex>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Pinterest'} href={'#'}>
                <FaPinterest />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'} fontSize="0.8rem" >
            <ListHeader  >Links</ListHeader>
            <Box as="a" href={'#'} color="#8A8A8A">
              Home
            </Box>
            <Box as="a" href={'#'} color="#8A8A8A">
              Pricing
            </Box>
            <Box as="a" href={'#'} color="#8A8A8A">
              Download
            </Box>
            <Box as="a" href={'#'} color="#8A8A8A">
              About
            </Box>
            <Box as="a" href={'#'} color="#8A8A8A">
              Service
            </Box>
          </Stack>
          <Stack align={'flex-start'} fontSize="0.8rem" >
            <ListHeader>Support</ListHeader>
            <Box as="a" href={'#'} color="#8A8A8A">
              FAQ
            </Box>
            <Box as="a" href={'#'} color="#8A8A8A">
              How it
            </Box>
            <Box as="a" href={'#'} color="#8A8A8A">
              Features
            </Box>
            <Box as="a" href={'#'} color="#8A8A8A">
              Contact
            </Box>
            <Box as="a" href={'#'} color="#8A8A8A">
              Reporting
            </Box>
          </Stack>
         
           <Stack align={'flex-start'} fontSize="0.8rem">
            <ListHeader>Contact us</ListHeader>
            <Box as="a" href={'#'} color="#8A8A8A">
              +880 12345678
            </Box>
            <Box as="a" href={'#'} color="#8A8A8A">
                youremail@gmail.com
            </Box>
            <Box as="a" href={'#'} color="#8A8A8A">
                Pune City
            </Box>
           
          </Stack>
        </SimpleGrid>
      </Container>

      <Flex justify="space-between" w="90%" m="auto" >
        <Box color="#677294" fontSize="0.6rem">copyright & Design By @LearningExp</Box>
        <Box color="#677294" fontSize="0.6rem">Terms of use & privacy policy</Box>

      </Flex>
    </Box>
  )
}
