import { getNews } from "../helpers/getters/getNews";
import { Button, FormLabel, FormControl, Input, Text, Box, Square, Center, useDisclosure, Flex, ChakraProvider, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useEffect ,useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { deleteNews } from '../helpers/setters/deleteNews';
import { News , Props_ForNewsBox} from '../../types/news'



const NewsBox = ({ news, setMyNews, setEditNews , setIsOpen ,setIsAdd  }: Props_ForNewsBox) => {
  
    useEffect(() => {
        const fetchNews = async () => {
        const fetchedNews = await getNews()
        setMyNews(fetchedNews)
        console.log(fetchedNews)
      }
      fetchNews();
  
    }, [])
  
    return (
      <Flex as="b" color="white" fontSize="3xl" justify="space-around" p="4" flexDirection="column" alignItems="space-around">
  
        { news !== undefined && 
        news.map(singleNews => (
          <Box key={singleNews.id} bg='gray.700' borderWidth="1px" borderRadius="md" p="4" marginBottom="10px">
            <Flex justifyContent="space-between" alignItems="center">
              <Text>{singleNews.name}</Text>
              <Flex>
                <IconButton
                  colorScheme="teal.400"
                  aria-label="Editer"
                  icon={<EditIcon />}
                  onClick={() => { setIsOpen(true); setIsAdd(false); setEditNews(singleNews); }}
                />
              <IconButton
                  colorScheme="red"
                  aria-label="Supprimer"
                  icon={<DeleteIcon />}
                  onClick={
                    async () => { 
                  await deleteNews( singleNews.id  , setMyNews ) }}
              />
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
    )
  }
  
  export default NewsBox;