"use client"
import { useState } from 'react';
import { Button, Text, Flex, ChakraProvider } from "@chakra-ui/react";
import SideNav from '../components/sideNav';
import NewsBox from './components/newsBox'
import AddOrEditNewsModal from './modals/AddOrEditNewsModal';
import { News } from '../types/news';

export default function Page() {

  const [news, setNews] = useState<News[]>([]);
  const [isAddNewsModal, setIsAddNewsModal] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [editNews, setEditNews] = useState<News>({ id: -1, name: "" });

  const handleClickOpenAddNewsModal = () => {
    setIsOpen(true); 
    setIsAddNewsModal(true);
  }

  const handleClickOpenEditNewsModal = () => {
    setIsOpen(true); 
    setIsAddNewsModal(false);
  }

  return (
    <>
      <ChakraProvider >
        <Flex color='white' bg="gray.800" >
          <Flex bg='teal.400'>
            <SideNav />
          </Flex>
          <Flex flexGrow="1" flexDirection="column" justify="space-around">

            <Flex justify="space-around" p="4">
              <Text as="b" color="white" fontSize="5xl">News</Text>

              <Button onClick={handleClickOpenAddNewsModal} colorScheme='teal' size='lg'>
                Ajouter
              </Button>

            </Flex>

            <NewsBox
              news={news}
              setNews={setNews}
              setEditNews={setEditNews}
              setIsOpen={setIsOpen}
              setIsAdd={setIsAddNewsModal}
            />

            <AddOrEditNewsModal
              isAdd={isAddNewsModal}
              setNews={setNews}
              isOpen={isOpen}
              onClose={() => { setIsOpen(false); }}
              editNews={editNews} />
            </Flex>
        </Flex>
      </ChakraProvider>
    </>
  )
}

