import * as React from 'react';
import { ChangeEvent, SetStateAction, useState } from 'react';
import { Button, FormControl, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";


import { setNews } from '../helpers/setters/setNews';
import { updateNews } from '../helpers/setters/updateNews';
import { Props_ForAddOrEditNewsModal } from '@/app/types/news';


const AddOrEditNewsModal = ({ isAdd, setMyNews ,isOpen, onClose , editNews } : Props_ForAddOrEditNewsModal ) => {

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [newNewsName, setNewNewsName] = useState("");

    const handleAction = async () => {
      if (isAdd) {
        await setNews( {newNewsName, setNewNewsName, onClose, setMyNews } );
      } else {
        await  updateNews(editNews.id  , {newNewsName, setNewNewsName ,setMyNews, onClose}  )
    
      }
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewNewsName(e.target.value);
    }
    
    return (
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen = {isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isAdd ? "Ajouter" : "Editer"} une nouvelle News</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>  Name</FormLabel>
              <Input ref={initialRef} placeholder = {isAdd ? "Name" : editNews.name }  value={newNewsName} onChange={handleOnChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleAction}>
              {isAdd ? "Ajouter" : "Modifier"}
            </Button>
            <Button onClick={onClose}>Annuler</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
}
export default AddOrEditNewsModal;