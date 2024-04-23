"use client"
import { useState } from 'react';
import { Button, FormLabel, FormControl, Input, Text, Box, Square, Center, useDisclosure, Flex, ChakraProvider, IconButton } from "@chakra-ui/react";
import SideNav from '../components/sideNav';
import * as React from 'react';

import NewsBox from './components/newsBox'
import AddOrEditNewsModal from './modals/AddOrEditNewsModal';
import { News } from '../types/news';

export default function Page() {

  const [news , setMyNews] = useState<News[]>([]);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [editNews, setEditNews] = useState<News>({ id: -1, name: "" });


  return (
    <>
      <ChakraProvider >
        <Flex color='white' bg="gray.800" >
          <Flex<React.ElementType> size="20%" bg='teal.400' >
            <Text as="b" color="white" fontSize="2xl" > <SideNav /></Text>
          </Flex>
          <Flex flex='1' flexDirection="column" justify="space-around">

            <Flex justify="space-around" p="4">
              <Text as="b" color="white" fontSize="5xl">News</Text>

              <Button onClick={() => { setIsOpen(true), setIsAdd(true) }} colorScheme='teal' size='lg'> 
                Ajouter
              </Button>

            </Flex>

            {<NewsBox
              news =  {news}
              setMyNews={setMyNews}
              setEditNews={setEditNews}
              setIsOpen={setIsOpen}
              setIsAdd={setIsAdd} 
            /> }

            {<AddOrEditNewsModal isAdd = {isAdd} setMyNews={setMyNews} isOpen={isOpen} onClose={() => { setIsOpen(false); }} editNews={editNews}  />}
          </Flex>
        </Flex>
      </ChakraProvider>


    </>
  )
}

