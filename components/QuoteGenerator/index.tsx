import React from "react";

// Components
import {
  QuoteGeneratorModalContainer,
  QuoteGeneratorModalInnerContainer,
} from "./QuoteGeneratorElements";

// Material UI Imports
import { Modal, Backdrop, Fade } from "@mui/material";

interface QuoteGeneratorModalProps {
  open: boolean;
  close: () => void;
  processingQuote: boolean;
  setProcessingQuote: React.Dispatch<React.SetStateAction<boolean>>;
  quoteReceived: String | null;
  setQuoteReceived: React.Dispatch<React.SetStateAction<String | null>>;
}

const style = {};

const QuoteGeneratorModal = ({
  open,
  close,
  processingQuote,
  setProcessingQuote,
  quoteReceived,
  setQuoteReceived,
}: QuoteGeneratorModalProps) => {
  return (
    <Modal
      id="QuoteGeneratorModal"
      aria-labelledby="spring-modal-quotegeneratormodal"
      aria-describedby="spring-modal-opens-and-closes-quote-generator"
      open={open}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <QuoteGeneratorModalContainer sx={style}>
          <QuoteGeneratorModalInnerContainer></QuoteGeneratorModalInnerContainer>
        </QuoteGeneratorModalContainer>
      </Fade>
    </Modal>
  );
};

export default QuoteGeneratorModal;
