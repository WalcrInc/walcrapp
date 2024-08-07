import React, { useState } from "react";
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
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ModalDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const CancelButton = styled(ModalButton)`
  background-color: #f1f1f1;
  color: #333;
`;

const ContinueButton = styled(ModalButton)`
  background-color: #000;
  color: #fff;
`;

export const ImageConfirmationModal = ({ image, onConfirm, onCancel }) => (
  <ModalOverlay>
    <ModalContent>
      <ModalTitle>
        Take a clear picture of the task or you need help with
      </ModalTitle>
      <ModalDescription>
        This will allow us to give you a precise estimate of the task&apos;s duration
        and charges.
      </ModalDescription>
      <PreviewImage src={image} alt="Preview" />
      <ButtonContainer>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
        <ContinueButton onClick={onConfirm}>Continue</ContinueButton>
      </ButtonContainer>
    </ModalContent>
  </ModalOverlay>
);
