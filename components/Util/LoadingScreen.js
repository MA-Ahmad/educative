import { useState } from "react";
import {
  Center,
  CircularProgress,
  CircularProgressLabel,
  Progress,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";

const LoadingScreen = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <div>
      <Modal isCentered isOpen={true}>
        {overlay}
        {/* <ModalContent>
          <CircularProgress isIndeterminate color="green.300" />
        </ModalContent> */}
      </Modal>
    </div>
  );
};

export default LoadingScreen;
