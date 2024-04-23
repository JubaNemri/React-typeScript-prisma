import * as React from 'react';
import { ChangeEvent, SetStateAction, useState } from 'react';
import { Button, FormControl, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";
import { fetchUpdateNews } from '../helpers/fetchers/updateNews';
import { Props_ForAddOrEditNewsModal } from '@/app/types/news';
import { fetchCreateNews } from '../helpers/fetchers/createNews';

const AddOrEditNewsModal = ({ isAdd, setNews, isOpen, onClose, editNews }: Props_ForAddOrEditNewsModal) => {

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [newsNameValue, setNewsNameValue] = useState("");

  const handleAction = () => {
    if (isAdd) fetchCreateNews({ newsNameValue, setNewsNameValue, onClose, setNews });
    else fetchUpdateNews(editNews.id, { newsNameValue, setNewsNameValue, setNews, onClose });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewsNameValue(e.target.value);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isAdd ? "Ajouter" : "Editer"} une nouvelle News</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>  Name</FormLabel>
            <Input ref={initialRef} placeholder={isAdd ? "Name" : editNews.name} value={newsNameValue} onChange={handleOnChange} />
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