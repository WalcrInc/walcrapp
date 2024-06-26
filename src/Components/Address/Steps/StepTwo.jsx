import React, { useState, useEffect } from "react";
import { Button, Input, Spinner } from "@chakra-ui/react";
import { AddressIconSmall, BackIcon, RadioIcon } from "@/assets";
import Map from "../Map/Map";

const StepTwo = ({ handleNext, handlePrev }) => {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [coordinates, setCoordinates] = useState([-74.006, 40.7128]);
  const [startCoordinates, setStartCoordinates] = useState(null);
  const [endCoordinates, setEndCoordinates] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(true); // Toggle between start and end address

  useEffect(() => {
    const getAddressFromCoordinates = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1IjoiY3QzMDEwIiwiYSI6ImNsdnZ2ZWh2dzFsN2Mya253MjF6aWswc28ifQ.UwEhduRjaXvMPMJnJcK8EQ`
        );
        const data = await response.json();
        const defaultAddress = data.features[0].place_name;
        setAddress1(defaultAddress);
        setStartCoordinates([longitude, latitude]);
      } catch (error) {
        console.error("Error fetching default address:", error);
      }
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoordinates([longitude, latitude]);
        getAddressFromCoordinates(latitude, longitude);
        setIsLoading(false);
      },
      (error) => {
        console.error("Error getting user location:", error);
        setIsLoading(false);
      }
    );
  }, []);

  const handleInputChange = (value, setAddress, setCoordinates) => {
    setAddress(value);

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        value
      )}.json?access_token=pk.eyJ1IjoiY3QzMDEwIiwiYSI6ImNsdnZ2ZWh2dzFsN2Mya253MjF6aWswc28ifQ.UwEhduRjaXvMPMJnJcK8EQ`
    )
      .then((response) => response.json())
      .then((data) => {
        const [longitude, latitude] = data.features[0].center;
        setCoordinates([longitude, latitude]);
      })
      .catch((error) =>
        console.error("Error converting address to coordinates:", error)
      );
  };

  const handleMapClick = (clickedCoordinates, source) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${clickedCoordinates[0]},${clickedCoordinates[1]}.json?access_token=pk.eyJ1IjoiY3QzMDEwIiwiYSI6ImNsdnZ2ZWh2dzFsN2Mya253MjF6aWswc28ifQ.UwEhduRjaXvMPMJnJcK8EQ`
    )
      .then((response) => response.json())
      .then((data) => {
        const clickedAddress = data.features[0].place_name;
        if (source === "click") {
          if (toggle) {
            setAddress1(clickedAddress);
            setStartCoordinates(clickedCoordinates);
          } else {
            setAddress2(clickedAddress);
            setEndCoordinates(clickedCoordinates);
          }
          setToggle(!toggle);
        } else if (source === "start") {
          setAddress1(clickedAddress);
          setStartCoordinates(clickedCoordinates);
        } else if (source === "end") {
          setAddress2(clickedAddress);
          setEndCoordinates(clickedCoordinates);
        }
      })
      .catch((error) =>
        console.error("Error converting coordinates to address:", error)
      );
  };

  const mergedData = { address1, address2 };

  const handleSubmit = () => {
    typeof window !== "undefined" &&
      localStorage.setItem("address", JSON.stringify(mergedData));
    handleNext();
  };

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          height: "100dvh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spinner />
      </div>
    );

  return (
    <>
      <div className="top">
        <span onClick={handlePrev} className="back-icon">
          <>
            {" "}
            <BackIcon /> <h1>Address</h1>
            <span style={{ color: "white" }}>.</span>
          </>
        </span>

        {isLoading ? (
          <div
            style={{
              display: "flex",
              height: "100dvh",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Spinner />
          </div>
        ) : (
          <Map
            coordinates={coordinates}
            onMapClick={handleMapClick}
            startCoordinates={startCoordinates}
            endCoordinates={endCoordinates}
            customIcon="images/icon.png" // Replace with the path to your custom icon
          />
        )}
      </div>
      <div className="bottom">
        <div>
          <h1>Address</h1>
          <p>Add a new address</p>
        </div>
        <div className="icon-input">
          <div className="input">
            <Input
              size={"lg"}
              width={"100%"}
              border={"none"}
              boxShadow={"0px 0px 0px 1px #CDD1DC"}
              background={"#F0F2F6"}
              borderRadius={"6px"}
              value={address1}
              onChange={(e) =>
                handleInputChange(
                  e.target.value,
                  setAddress1,
                  setStartCoordinates
                )
              }
              placeholder="Search street, city, district"
            />
            <Input
              size={"lg"}
              width={"100%"}
              boxShadow={"0px 0px 0px 1px #CDD1DC"}
              background={"#F0F2F6"}
              value={address2}
              onChange={(e) =>
                handleInputChange(
                  e.target.value,
                  setAddress2,
                  setEndCoordinates
                )
              }
              placeholder="Office, Home e.t.c"
              borderRadius={"6px"}
            />
          </div>
        </div>

        <Button
          color={"#fff"}
          background={"#1a1a1a"}
          borderRadius={"6px"}
          size={"lg"}
          onClick={handleSubmit}
        >
         Add address
        </Button>
      </div>
    </>
  );
};

export { StepTwo };
