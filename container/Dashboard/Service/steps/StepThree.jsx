import React, { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import styled from "@emotion/styled";
import { Spinner } from "@chakra-ui/react";

const PageWrapper = styled.div`
  filter: ${(props) => (props.blackAndWhite ? "grayscale(100%)" : "none")};
  transition: filter 0.3s ease;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`;

const LinkButton = styled.button`
  color: var(--Primary-black, var(--Hyperlink, #1a1a1a));
  text-align: center;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

export default function StepThree({ handleNext }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [locationPermission, setLocationPermission] = useState("prompt");
  const [blackAndWhite, setBlackAndWhite] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleContinue = () => {
    handleNext();
    closeModal();
  };

  const requestLocationAccess = async () => {
    setLoading(true);
    if (navigator.permissions && navigator.geolocation) {
      try {
        const permission = await navigator.permissions.query({
          name: "geolocation",
        });

        if (permission.state === "granted" || permission.state === "prompt") {
          getPosition();
        } else {
          handlePermissionDenied();
        }

        permission.onchange = () => {
          if (permission.state === "granted") {
            getPosition();
          } else {
            handlePermissionDenied();
          }
        };
      } catch (error) {
        console.error("Error checking permission:", error);
        handlePermissionDenied();
      } finally {
        setLoading(false);
      }
    } else {
      alert("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationPermission("granted");
        setBlackAndWhite(false);
        openModal();
      },
      (error) => {
        console.error("Error getting position:", error);
        handlePermissionDenied();
      }
    );
  };

  const handlePermissionDenied = () => {
    setLocationPermission("denied");
    setBlackAndWhite(true);
    alert(
      "Please enable location access in your browser settings to use this feature."
    );
  };

  useEffect(() => {
    if (locationPermission === "denied") {
      setBlackAndWhite(true);
    } else {
      setBlackAndWhite(false);
    }
  }, [locationPermission]);

  return (
    <PageWrapper blackAndWhite={blackAndWhite}>
      <div className="location-tracking">
        <div className="empty"></div>
        <div className="icon"></div>
        <div className="details">
          <h2>
            {locationPermission === "denied"
              ? "See Taskwalkers nearby"
              : "Find Taskwalkers near you by allowing location services"}
          </h2>
          <p>
            {locationPermission === "denied"
              ? "We can show nearby Taskwalkers if you allow location access"
              : "Turn on Location Services to see Taskwalkers available near you."}
          </p>
        </div>
        <button className="black-button" onClick={requestLocationAccess}>
          {loading ? <Spinner /> : "Allow Access"}
        </button>
        {locationPermission === "denied" && (
          <LinkButton>Address Settings</LinkButton>
        )}
        <CustomModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onContinue={handleContinue}
        />
      </div>
    </PageWrapper>
  );
}
