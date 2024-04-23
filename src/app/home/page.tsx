"use client"
import * as React from 'react' 
import { Text,Box, Square,Center, Flex , ChakraProvider } from "@chakra-ui/react";
import SideNav from "../components/sideNav";

export default function Home() {

    return (
      <ChakraProvider>
        <Flex h="100vh" color='white' bg="gray.800">
          <Square bg='teal.400' size='20%' sx={{height: "100vh"}} >
              <SideNav/>
          </Square>
          <Box bg='gray.700' w="100%">
            <Center h="100%">
              <Text as="b" fontSize="4xl" color="white"> Welcome !</Text>
            </Center>
          </Box>
        </Flex>
      </ChakraProvider>
    );
  } 
  
  