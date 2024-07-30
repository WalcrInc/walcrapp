import React from "react";
import styled from "@emotion/styled";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #f0f2f6;
  border-radius: 16px;
  padding: 24px 0 0;
  width: 90%;
  max-width: 320px;
  margin: 3rem;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  color: var(--Black, #000);
  text-align: center;
  font-family: Mulish;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0rem 1rem;
`;

const Subtitle = styled.p`
  color: var(--Black, #000);
  text-align: center;
  font-family: Mulish;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0px 1.5rem;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid #969696;
  margin: 1rem 0 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px 28px;
`;

const Button = styled.button`
  color: #1a1a1a;
  font-family: Mulish;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CustomModal = ({ isOpen, onClose, onContinue }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalBody>
          <Title>Location is set as primary address</Title>
          <Subtitle>
            You can switch to another address any time in the address settings.
          </Subtitle>
          <Divider />
          <ButtonGroup>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onContinue}>Continue</Button>
          </ButtonGroup>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CustomModal;