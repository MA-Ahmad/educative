import React from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from '@chakra-ui/react'

const FormModal = ({ isOpen, onOpen, onClose }) => {
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input ref={initialRef} placeholder="First name" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Last name" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default FormModal
