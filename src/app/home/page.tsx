"use client"
import * as React from 'react' 
import { Text,Box, Square,Center, Flex , ChakraProvider, SquareProps } from "@chakra-ui/react";
import SideNav from "../components/sideNav";

export default function Home() {

    return (
      <ChakraProvider>
        <Flex h="100vh" color='white' bg="gray.800">
  
          <Square<React.ElementType> bg='teal.400' size='20%' h ="100vh" >
            <Text as ="b" color="white" fontSize="2xl" > <SideNav/></Text>
          </Square>
  
          <Box flex='1' bg='gray.700' w="100%">
            <Center h="100%">
            <Text as ="b" fontSize="4xl" color="white"> Welcome !</Text>
            </Center>
          </Box>
  
        </Flex>
      </ChakraProvider>
    );
  } 
  
  