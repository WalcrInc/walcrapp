import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = ({ coordinates, onMapClick }) => {
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3QzMDEwIiwiYSI6ImNsdnZ2ZWh2dzFsN2Mya253MjF6aWswc28ifQ.UwEhduRjaXvMPMJnJcK8EQ';

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinates,
      zoom: 12,
    });

    // Add navigation controls to the map
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker to the map
    const markerElement = document.createElement('div');
    markerElement.className = 'marker';
    markerRef.current = new mapboxgl.Marker(markerElement);

    // Set marker on initial coordinates
    markerRef.current?.setLngLat(coordinates).addTo(map);

    // Add click event listener to the map
    map.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      // Update marker position
      markerRef.current.setLngLat([lng, lat]);
      // Pass coordinates to parent component
      onMapClick([lng, lat]);
    });

    return () => map.remove(); // Clean up the map instance
  }, [coordinates, onMapClick]);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '55dvh', position:"relative" }} />;
};

export default Map;
