import { ChakraProvider, Box, useDisclosure, RadioGroup, Stack, Radio, Button } from "@chakra-ui/react";
import * as React from 'react';
import Link from "next/link";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
} from '@chakra-ui/react'


interface props {
    isOpen: boolean 
    onOpen: () => void
    onClose :() => void
}
const SideNav = () => {
    const { isOpen ,onOpen ,onClose }:props = useDisclosure() 
    return (

        <Box padding="10">
          <Button size='lg' bg='gray.600' color="white" onClick={onOpen}>
            Naviguer
          </Button>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth='1px' padding="20px">Menu</DrawerHeader>
              <DrawerBody>
                <Box padding="20px">
                  <Link href="./home">Accueil</Link>
                </Box>
                <Box padding="20px">
                  <Link href="./news"> News </Link>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
    
      );
}
export default SideNav;