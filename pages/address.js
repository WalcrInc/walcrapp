// Address.js
import AddressInput from '@/container/Register/Input';
import Map from '@/container/Register/Map';
import React, { useState, useEffect } from 'react';

const Address = () => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState([-74.006, 40.7128]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAddressFromCoordinates = async (latitude, longitude) => {
      try {
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1IjoiY3QzMDEwIiwiYSI6ImNsdnZ2ZWh2dzFsN2Mya253MjF6aWswc28ifQ.UwEhduRjaXvMPMJnJcK8EQ`);
        const data = await response.json();
        const defaultAddress = data.features[0].place_name;
        setAddress(defaultAddress);
      } catch (error) {
        console.error('Error fetching default address:', error);
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
        console.error('Error getting user location:', error);
        setIsLoading(false);
      }
    );
  }, []);

  const handleInputChange = (value) => {
    setAddress(value);
    // Convert typed address to coordinates and update map
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(value)}.json?access_token=pk.eyJ1IjoiY3QzMDEwIiwiYSI6ImNsdnZ2ZWh2dzFsN2Mya253MjF6aWswc28ifQ.UwEhduRjaXvMPMJnJcK8EQ`)
      .then((response) => response.json())
      .then((data) => {
        const [longitude, latitude] = data.features[0].center;
        setCoordinates([longitude, latitude]);
      })
      .catch((error) => console.error('Error converting address to coordinates:', error));
  };

  const handleMapClick = (clickedCoordinates) => {
    // Convert clicked coordinates to address and update input
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${clickedCoordinates[0]},${clickedCoordinates[1]}.json?access_token=pk.eyJ1IjoiY3QzMDEwIiwiYSI6ImNsdnZ2ZWh2dzFsN2Mya253MjF6aWswc28ifQ.UwEhduRjaXvMPMJnJcK8EQ`)
      .then((response) => response.json())
      .then((data) => {
        const clickedAddress = data.features[0].place_name;
        setAddress(clickedAddress);
        setCoordinates(clickedCoordinates);
      })
      .catch((error) => console.error('Error converting coordinates to address:', error));
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          
          <Map coordinates={coordinates} onMapClick={handleMapClick} />
          <AddressInput value={address} onChange={handleInputChange} />
        </>
      )}
    </div>
  );
};

export default Address;