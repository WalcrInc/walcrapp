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
  padding: 1rem 0;
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
  font-weight: 700;
  margin-bottom: 0.5rem;
  padding: 0 1rem;
  color: var(--Black, #000);
  text-align: center;
  font-family: Mulish;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Subtitle = styled.p`
  margin-bottom: 1rem;
  padding: 0 1rem;
  color: var(--Black, #000);
  text-align: center;
  font-family: Mulish;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid #e2e8f0;
  margin: 1rem 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 28px;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--Hyperlink, #1a1a1a);
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
            <Button>Continue</Button>
          </ButtonGroup>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CustomModal;
