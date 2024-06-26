import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

const Map = ({ coordinates, onMapClick, startCoordinates, endCoordinates, customIcon }) => {
  const mapContainerRef = useRef(null);
  const startMarkerRef = useRef(null);
  const endMarkerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3QzMDEwIiwiYSI6ImNsdnZ2ZWh2dzFsN2Mya253MjF6aWswc28ifQ.UwEhduRjaXvMPMJnJcK8EQ'

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinates,
      zoom: 12,
    });

    // Add navigation controls to the map
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add directions control to the map
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });
    map.addControl(directions, 'top-left');

    // Create custom marker elements
    const createMarker = (coordinates, draggable) => {
      const markerElement = document.createElement('div');
      markerElement.className = 'marker';
      if (customIcon) {
        markerElement.style.backgroundImage = `url(${customIcon})`;
        markerElement.style.width = '30px';
        markerElement.style.height = '30px';
        markerElement.style.backgroundSize = 'cover';
      }
      return new mapboxgl.Marker(markerElement, { draggable })
        .setLngLat(coordinates)
        .addTo(map);
    };

    // Add or update start and end markers
    if (startCoordinates) {
      if (!startMarkerRef.current) {
        startMarkerRef.current = createMarker(startCoordinates, true);
        startMarkerRef.current.on('dragend', () => {
          const { lng, lat } = startMarkerRef.current.getLngLat();
          onMapClick([lng, lat], 'start');
        });
      } else {
        startMarkerRef.current.setLngLat(startCoordinates);
      }
    }

    if (endCoordinates) {
      if (!endMarkerRef.current) {
        endMarkerRef.current = createMarker(endCoordinates, true);
        endMarkerRef.current.on('dragend', () => {
          const { lng, lat } = endMarkerRef.current.getLngLat();
          onMapClick([lng, lat], 'end');
        });
      } else {
        endMarkerRef.current.setLngLat(endCoordinates);
      }
    }

    // Update directions based on input coordinates
    if (startCoordinates && endCoordinates) {
      directions.setOrigin(startCoordinates);
      directions.setDestination(endCoordinates);
    }

    // Add click event listener to the map
    map.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      onMapClick([lng, lat], 'click');
    });

    return () => map.remove(); // Clean up the map instance
  }, [coordinates, onMapClick, startCoordinates, endCoordinates, customIcon]);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '80vh', position: "relative" }} />;
};

export default Map;

