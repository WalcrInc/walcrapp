import React, { useState, useEffect } from "react";
import CustomModal from "./CustomModal";
import styled from "@emotion/styled";

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleContinue = () => {
    handleNext();
    closeModal();
  };

  const requestLocationAccess = async () => {
    if (navigator.permissions && navigator.geolocation) {
      try {
        const permission = await navigator.permissions.query({
          name: "geolocation",
        });

        if (permission.state === "granted") {
          // Permission already granted, get position
          getPosition();
        } else if (permission.state === "prompt") {
          // Will show a prompt, get position
          getPosition();
        } else if (permission.state === "denied") {
          // Permission denied, show instructions to enable
          setLocationPermission("denied");
          setBlackAndWhite(true);
          alert(
            "Please enable location access in your browser settings to use this feature."
          );
        }

        // Listen for changes to the permission state
        permission.onchange = () => {
          if (permission.state === "granted") {
            getPosition();
          } else {
            setLocationPermission("denied");
            setBlackAndWhite(true);
          }
        };
      } catch (error) {
        console.error("Error checking permission:", error);
        setLocationPermission("denied");
        setBlackAndWhite(true);
      }
    } else {
      alert("Geolocation is not supported by this browser.");
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
        setLocationPermission("denied");
        setBlackAndWhite(true);
      }
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
          Allow Access
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
